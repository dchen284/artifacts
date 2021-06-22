import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrieveProduct } from '../../store/products';

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products)

  useEffect(() => {
    dispatch(retrieveProduct(productId))
  }, [dispatch, productId]);



  return (
    <div>
      <div className='productPage__listing'>
        <img className='productPage__image' src={product?.imgURL} alt={product.name}/>
        <div className='productPage__details' ></div>
      </div>
    </div>
  )
}


export default ProductPage;
