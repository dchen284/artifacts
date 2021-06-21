import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../store/products";
import ProductDisplay from "./ProductDisplay";
import React from "react";

const ListingGrid = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const products = Object.values(useSelector(state => state.products));

  console.log(products, 'the state of things')
  useEffect(() => {
    dispatch(getProducts(category))
  }, [dispatch, category])

  return (
   <div className='listingGrid__container'>
     {products?.map(product => {
       return <ProductDisplay product={product} key={product.id}/>
     })}

   </div>
  )
}


export default ListingGrid;
