import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from '../../css-modules/UploadListing.module.css'

export default function UploadListing({ setCurrentModal }) {
    const history = useHistory();
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
            //console.log('Data', 'Test')
            history.push('/')
            setCurrentModal('');
        }

    }

    return (
        <>
            <h1>UPLOAD</h1>
            <form className={styles.uploadForm} onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                    Quantity
                    <input type="number" min="1" onChange={e => setQuantity(e.target.value)}/>
                </label>
                <label>
                    Price
                    <input type="number" min="1" onChange={e => setPrice(e.target.value)}/>
                </label>
                <label>
                    <textarea placeholder='Add a description (optional)' onChange={e => setDescription(e.target.value)}/>
                </label>
                <label>
                    Image
                    <input type="file" accept="image/*" onChange={updateImage}/>
                </label>
                <label>
                    Category
                    <select onChange={e => setCategoryId(e.target.value)}>
                        <option value="1">Prehistoric</option>
                        <option value="2">Antiquities</option>
                        <option value="3">Modern</option>
                        <option value="4">Future</option>
                    </select>
                </label>
                <button>Add Listing</button>
            </form>
        </>
    )
}
