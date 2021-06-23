import React, { useState } from "react";
import "./ProductDetails.css"

const ProductDetails = ({ product }) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);




  return (
    <div className='productDetails__container'>
      <div className='productDetails__header'>{product.name}</div>
      <div>This is where the ratings go</div>
      <div style={{"font-size": "26px"}}>Price: <span style={{"font-weight": "bold"}}>${product.price}</span></div>
      <div  style={{"font-size": "26px"}}>Product Description: <br/><span style={{"font-style": "italic", "font-size":"18px"}}>{product.description}</span></div>
      <span style={{"font-size": "26px"}}>Quantity: <input type='number' value={currentQuantity} onChange={e => setCurrentQuantity(e.target.value)}></input></span>
      {(product.quantity < currentQuantity || product.quantity < 5) && <div className='productDetails__stock'>Only {product.quantity} left in stock!</div>}
      <div style={{"font-size": "26px"}}>Total: <span style={{"font-weight": "bold"}}>${product.price * currentQuantity}</span></div>
      <button disabled={(product.quantity < currentQuantity || currentQuantity < 1) ? true : false}>Add To Cart</button>
    </div>
  )
}

export default ProductDetails;
