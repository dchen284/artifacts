import React from "react";
import { Link } from "react-router-dom";
import "./ProductDisplay.css"

const ProductDisplay = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className='productDisplay__container'>
        <img className='productDisplay__image'src={product.imgURL} alt={product.name}/>
        <div>{product.name}</div>
        <div>${product.price}</div>
      </div>
    </Link>
  )
}

export default ProductDisplay
