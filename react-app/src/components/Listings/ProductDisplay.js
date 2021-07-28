import React from "react";
import { Link } from "react-router-dom";


import "./ProductDisplay.css"

const ProductDisplay = ({product, reviews}) => {
  let count = 0



  return (
    <Link to={`/products/${product.id}`}>
      <div className='productDisplay__container'>
        <img className='productDisplay__image'src={product.imgURL} alt={product.name}/>
        <div>{product.name}</div>
        <div>${product.price}</div>
        <div>{reviews.length ? reviews.reduce((acc, review) => {
              count++;
              console.log(acc)
              acc += review.rating;
              return acc / count
              }, 0) : 'No reviews yet'}
              {reviews.length > 0 && <i className="fas fa-star"></i>}
        {reviews.length > 0 && `(${count})`}</div>
      </div>
    </Link>
  )
}

export default ProductDisplay
