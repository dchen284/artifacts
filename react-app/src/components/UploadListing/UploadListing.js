import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from '../../css-modules/UploadListing.module.css'
import * as productActions from '../../store/products';

export default function UploadListing({ setCurrentModal }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [categoryId, setCategoryId] = useState('1');
    //console.log(categoryId)

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const handleSubmit = async (e) => {
        //TODO: dispatch thunk action creator - set up thunk action creator in the store
        e.preventDefault();
        const product = new FormData();

        product.append("name", name);
        product.append("quantity", +quantity);
        product.append("price", +price);
        product.append("description", description);
        product.append("categoryId", +categoryId);
        product.append("image", image);
        product.append("userId", user.id);

        // console.log(`
        // Name: ${product.get('name')},
        // Quantity: ${product.get('quantity')},
        // Price: ${product.get('price')},
        // Description: ${product.get('description')},
        // Image: ${product.get('image')},
        // Category: ${product.get('categoryId')},
        // `)

        const res = await fetch('/api/category/new-product', {
            method: "POST",
            body: product,
        });
        const data = await res.json();

        if(data){
            // console.log('Data', 'Test')
            dispatch(productActions.retrieve(data));
            history.push(`/users/${user.id}`);
            setCurrentModal('');
        }

    }

    return (
        <>
            <form className={styles.uploadForm} onSubmit={handleSubmit}>
            <h1>UPLOAD</h1>
                <label className={styles.inputLabel}>
                    Product Name
                    <input className={styles.listingInput} type="text" onChange={e => setName(e.target.value)}/>
                </label>
                <label className={styles.inputLabel}>
                    Quantity
                    <input className={styles.listingInput} type="number" min="1" onChange={e => setQuantity(e.target.value)}/>
                </label>
                <label className={styles.inputLabel}>
                    Price
                    <input className={styles.listingInput} type="number" min="1" onChange={e => setPrice(e.target.value)}/>
                </label>
                <label className={styles.inputLabel}>
                    <textarea className={styles.listingDescription} placeholder='Add a description (optional)' onChange={e => setDescription(e.target.value)}/>
                </label>
                <label className={styles.inputLabel}>
                    Category
                    <select className={styles.select} onChange={e => setCategoryId(e.target.value)}>
                        <option value="1">Prehistoric</option>
                        <option value="2">Antiquities</option>
                        <option value="3">Modern</option>
                        <option value="4">Future</option>
                    </select>
                </label>
                <label htmlFor='upload-image' className={styles.fileUploadLabel}>
                    <p>Choose Image</p>
                    <input id='upload-image' className={styles.hiddenInput} type="file" accept="image/*" onChange={updateImage}/>
                </label>
                <button className={styles.listingBtn}>Add Listing</button>
            </form>
        </>
    )
}
