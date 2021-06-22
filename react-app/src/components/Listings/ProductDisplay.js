import React from "react";
import { Link } from "react-router-dom";


const ProductDisplay = ({product}) => {
  return (
    <div className='productDisplay__container'>
      <Link to={`/products/${product.id}`}>
        <img src={product.imgURL} alt={product.name}/>
        <div>{product.name}</div>
        <div>{product.price}</div>
      </Link>
    </div>
  )
}

export default ProductDisplay
