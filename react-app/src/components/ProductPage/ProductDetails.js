import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { shopping } from '../../store/shopping_cart';
import { getReviews } from "../../store/reviews";
import "./ProductDetails.css"


const ProductDetails = ({ product }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const history = useHistory();
  const reviewState = useSelector(state => state.reviews)
  const reviews = Object.values(reviewState);

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

    useEffect(() => {
      dispatch(getReviews())
    }, [dispatch])

    const productReviews = reviews.filter((review) => review.productId === product.id)
    const ratings = productReviews.map((review) => review.rating)
    function averageRating(ratings) {
      let sum = 0
      for(let i = 0; i < ratings.length; i++) {
        sum += ratings[i]
      }
      let average = sum / 2
      return average
    }
    const myRating = averageRating(ratings)

  return (
    <div className='productDetails__container'>
      <div className='productDetails__header'>{product.name}</div>
      <div style={{"fontSize": "26px"}}>Rating: <span style={{"fontWeight": "bold"}}>{myRating} / 5</span></div>
      <div style={{"fontSize": "26px"}}>Price: <span style={{"fontWeight": "bold"}}>${product.price}</span></div>
      <div  style={{"fontSize": "26px"}}>Product Description: <br/><span style={{"fontStyle": "italic", "fontSize":"18px"}}>{product.description}</span></div>
      <span style={{"fontSize": "26px"}}>Quantity: <input type='number' value={currentQuantity} onChange={e => setCurrentQuantity(e.target.value)}></input></span>
      {(product.quantity < currentQuantity || product.quantity < 5) && <div className='productDetails__stock'>Only {product.quantity} left in stock!</div>}
      <div style={{"fontSize": "26px"}}>Total: <span style={{"fontWeight": "bold"}}>${product.price * currentQuantity}</span></div>
      <button onClick={handleClick} disabled={(product.quantity < currentQuantity || currentQuantity < 1) ? true : false}>Add To Cart</button>
    </div>
  )
}

export default ProductDetails;
