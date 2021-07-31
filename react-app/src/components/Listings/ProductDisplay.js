import React from "react";
import { Link } from "react-router-dom";


import "./ProductDisplay.css"

const ProductDisplay = ({product, reviews}) => {
  let count = 0
  const calcPrice = () => {
    const currentPrice = `${product.price}`.split('');
    let newPrice = [];

    let popCount = 0
    while (currentPrice.length) {
      const last = currentPrice.pop();
      if (popCount > 0 && popCount % 3 === 0) newPrice.unshift(',')
      newPrice.unshift(last)
      popCount++
    }
    return newPrice.join('')
  }


  return (
    <Link to={`/products/${product.id}`}>
      <div className='productDisplay__container'>
        <img className='productDisplay__image'src={product.imgURL} alt={product.name}/>
        <div className='productDisplay__AboutContainer'>
          <div className='productAbout productTitle'>{product.name}</div>
          <div className='productAbout'>{reviews.length ? reviews.reduce((acc, review) => {
            count++;
            acc += review.rating;
            return Math.round(10*acc / count)/10
          }, 0) : <span style={{'fontSize' : '14px'}}>No reviews yet</span>}
          {reviews.length > 0 && <i style={{'fontSize' : '12px', 'padding' : '0 1px'}}className="fas fa-star"></i>}
          {reviews.length > 0 && <span style={{'fontSize' : '14px'}}>({count} reviews)</span>}</div>
          <div className='productAbout productPrice'>${calcPrice()}.00</div>
        </div>
      </div>
    </Link>
  )
}

export default ProductDisplay
