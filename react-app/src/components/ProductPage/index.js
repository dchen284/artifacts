import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrieveProduct } from '../../store/products';
import ProductDetails from "./ProductDetails";
import "./index.css"

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  // const product = useSelector(state => state.products)
  const product = useSelector(state => state.products[productId])
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(retrieveProduct(productId))
      .then(() => {
        setIsLoaded(true);
      })
      .catch((e)=>{
        setIsLoaded(true); //if there is an error from finding a non-existent product,
      }) // set isLoaded to true, to indicate the fetch was attempted
  }, [dispatch, productId]);

  if (!isLoaded) {
    return null;
  }

  if (isLoaded && !product) { //fetching a non-existent product happened
    return <h1>This product does not exist across all of time (404).</h1>
  }

  return (
    <div>
      <div className='productPage__listing'>
        <img className='productPage__image' src={product?.imgURL} alt={product.name}/>
        <ProductDetails product={ product }/>
      </div>
    </div>
  )
}


export default ProductPage;
