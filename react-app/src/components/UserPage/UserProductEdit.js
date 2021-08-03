import React, { useState } from "react";
import styles from '../../css-modules/UploadListing.module.css';
// import { useDispatch } from "react-redux";



const UserProductEdit = ({ product, history, setShowModal }) => {
  // const dispatch = useDispatch()
  const [editName, setEditName] = useState(product.name)
  const [editQuantity, setEditQuantity] = useState(product.quantity)
  const [editDescription, setEditDescription] = useState(product.description)
  const [editPrice, setEditPrice] = useState(product.price)
  const [editImage, setEditImage] = useState(null)

    const update = async (e) => {
      e.preventDefault()


      const formProduct = new FormData();
      formProduct.append("id", product.id)
      formProduct.append("name", editName);
      formProduct.append("quantity", +editQuantity);
      formProduct.append("price", +editPrice);
      formProduct.append("description", editDescription);
      formProduct.append("categoryId", +product.categoryId);
      if(formProduct !== null) formProduct.append("image", editImage);
      formProduct.append("userId", product.userId);

      const res = await fetch(`/api/category/products/${product.id}`, {
        method: "PUT",
        body: formProduct,
    });
    if (res.ok) {
      history.go()
    }

    }



  return (
    <form className='userListing__editForm' onSubmit={update}>
      <h1>Edit Product Info</h1>
      <label>Product Name</label>
      <input required type='text' value={editName} onChange={e => setEditName(e.target.value)}></input>
      <label>Quantity</label>
      <input required type='number' value={editQuantity} onChange={e => setEditQuantity(e.target.value)}></input>
      <label>Price</label>
      <input required type='number' value={editPrice} onChange={e => setEditPrice(e.target.value)}></input>
      <label>Image</label>
      <label id={'editForm__filelabel'} htmlFor='edit-upload-image' className={styles.fileUploadLabel}>
        <p>Choose file</p>
        <input id='edit-upload-image' className={styles.hiddenInput} type="file" accept="image/*" onChange={e => setEditImage(e.target.files[0])}/>
      </label>
      <label>Description</label>
      <textarea required value={editDescription} onChange={e => setEditDescription(e.target.value)}></textarea>
      <button type="submit">Confirm Changes</button>
      <button onClick={() => setShowModal(false)}>Abandon Changes</button>
    </form>
  )
}

export default UserProductEdit;
