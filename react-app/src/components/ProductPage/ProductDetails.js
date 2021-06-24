import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shopping } from '../../store/shopping_cart';
import "./ProductDetails.css"


const ProductDetails = ({ product }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const history = useHistory();

  const handleClick = () => {
    const item = {
      userId : user.id,
      productId : product.id,
      quantity: +currentQuantity
    }

    dispatch(shopping(item));

    history.goBack();
  }
  //


  return (
    <div className='productDetails__container'>
      <div className='productDetails__header'>{product.name}</div>
      <div>This is where the ratings go</div>
      <div style={{"font-size": "26px"}}>Price: <span style={{"font-weight": "bold"}}>${product.price}</span></div>
      <div  style={{"font-size": "26px"}}>Product Description: <br/><span style={{"font-style": "italic", "font-size":"18px"}}>{product.description}</span></div>
      <span style={{"font-size": "26px"}}>Quantity: <input type='number' value={currentQuantity} onChange={e => setCurrentQuantity(e.target.value)}></input></span>
      {(product.quantity < currentQuantity || product.quantity < 5) && <div className='productDetails__stock'>Only {product.quantity} left in stock!</div>}
      <div style={{"font-size": "26px"}}>Total: <span style={{"font-weight": "bold"}}>${product.price * currentQuantity}</span></div>
      <button onClick={handleClick} disabled={(product.quantity < currentQuantity || currentQuantity < 1) ? true : false}>Add To Cart</button>
    </div>
  )
}

export default ProductDetails;
