import React, { useState } from "react";
import "./ProductDetails.css"

const ProductDetails = ({ product }) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);




  return (
    <div className='productDetails__container'>
      <div className='productDetails__header'>{product.name}</div>
      <div>This is where the ratings go</div>
      <div>Price: <span>${product.price}</span></div>
      {(product.quantity < currentQuantity || product.quantity < 5) && <div className='productDetails__stock'>Only {product.quantity} left in stock!</div>}
      <div style={{"font-style": "italic"}}><span style={{"font-size": "22px"}}>Product Description:</span><br/>{product.description}</div>
      <span>Quantity: <input type='number' value={currentQuantity} onChange={e => setCurrentQuantity(e.target.value)}></input></span>
      <div>Total: ${product.price * currentQuantity}</div>
      <button disabled={(product.quantity < currentQuantity || currentQuantity < 1) ? true : false}>Add To Cart</button>
    </div>
  )
}

export default ProductDetails;
