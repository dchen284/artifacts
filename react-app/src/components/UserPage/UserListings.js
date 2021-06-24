import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeListing } from "../../store/products";
import "./UserListing.css";




const UserListings = ({ product }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeListing(product.id))
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
        <button>Edit Product Info</button>
        <button onClick={() => remove()}>Remove Product</button>
      </div>
    </div>
  )
}

export default UserListings;
