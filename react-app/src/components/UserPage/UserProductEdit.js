import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateListing } from "../../store/products";


const UserProductEdit = ({ product, history, setShowModal }) => {
  const dispatch = useDispatch()
  const [editName, setEditName] = useState(product.name)
  const [editQuantity, setEditQuantity] = useState(product.quantity)
  const [editDescription, setEditDescription] = useState(product.description)
  const [editPrice, setEditPrice] = useState(product.price)
  const [editImage, setEditImage] = useState(product.imageURL)
  const update = (e) => {
    e.preventDefault()
    const newProduct = {
      id: product.id,
      quantity: editQuantity,
      name: editName,
      description: editDescription,
      imageURL: editImage,
      categoryId: product.categoryId,
      userId: product.userId
    }

    dispatch(updateListing(newProduct))
    // history.go()
  }

  return (
    <form className='userListing__editForm'>
      <div>Edit Product Info</div>
      <label>Product Name</label>
      <input type='text' value={editName} onChange={e => setEditName(e.target.value)}></input>
      <label>Product Quantity</label>
      <input type='number' value={editQuantity} onChange={e => setEditQuantity(e.target.value)}></input>
      <label>Product Price</label>
      <input type='number' value={editPrice} onChange={e => setEditPrice(e.target.value)}></input>
      <label>Product Image</label>
      <input type="file" accept="image/*" onChange={e => setEditImage(e.target.files[0])}/>
      <label>Product Description</label>
      <textarea value={editDescription} onChange={e => setEditDescription(e.target.value)}></textarea>
      <button onSubmit={e => update}>Confirm Changes</button>
      <button onClick={() => setShowModal(false)}>Abandon Changes</button>
    </form>
  )
}

export default UserProductEdit;
