import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeListing } from "../../store/products";
import { Modal } from "../../context/Modal";
import UserProductDelete from "./UserProductDelete";
import UserProductEdit from "./UserProductEdit";
import "./UserListing.css";




const UserListings = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showModal, setShowModal] = useState(false);
  const [EoD, setEoD] = useState('');

  const remove = () => {
    dispatch(removeListing(product.id))
    history.go()
  }


  const deleteButton = () => {
    setShowModal(true)
    setEoD('delete')
  }

  const editButton = () => {
    setShowModal(true)
    setEoD('edit')
  }


  return (
    <div className='userListing__container'>
      <Link  to={`/products/${product.id}`}>
        <div className='userPage__image--holder'>
          <img className='userPage__image' src={product.imgURL} alt={product.name}/>
        </div>
      </Link>
      <div>
        <h1>{product.name}</h1>
        <div>Total Listings: {product.quantity}</div>
        <div>About <br/>{product.description}</div>
        <div>Price: ${product.price}</div>
        <button onClick={editButton}>Edit Product Info</button>
        <button onClick={deleteButton}>Remove Product</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {EoD === 'delete' && <UserProductDelete remove={remove} productName={product.name}/>}
            {EoD === 'edit' && <UserProductEdit setShowModal={setShowModal} product={product} history={history} dispatch={dispatch}/>}
          </Modal>
        )}
      </div>
    </div>
  )
}

export default UserListings;
