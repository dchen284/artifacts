import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../store/products";
import { getReviews } from "../../store/reviews";
import ProductDisplay from "./ProductDisplay";
import React from "react";
import "./ListingGrid.css"

const ListingGrid = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const stateObj = useSelector(state => {
    return {'products' : state.products, 'reviews' : state.reviews}
  });
  const products = Object.values(stateObj.products)
  const reviews = Object.values(stateObj.reviews)


  useEffect(() => {
    dispatch(getProducts(category))
    dispatch(getReviews())
  }, [dispatch, category])

  return (
   <div className='listingGrid__container'>
     {products?.map(product => {
       const indReviews = reviews.filter(review => review.productId === product.id)
       return <ProductDisplay key={product.id} reviews={indReviews} product={product}/>
     })}

   </div>
  )
}


export default ListingGrid;
