const GET_PRODUCTS = 'categories/GET_PRODUCTS';
const RETRIEVE_PRODUCT = 'categories/RETRIEVE_PRODUCT';

export const list = (products) => ({
  type: GET_PRODUCTS,
  products
});

export const retrieve = (product) => ({
  type: RETRIEVE_PRODUCT,
  product
});


export const getProducts = (category) => async dispatch => {
  const res = await fetch(`/api/category/${category}`);

  if (res.ok) {
    const products = await res.json();
    console.log(products, 'return from fetch')
    dispatch(list(products));
  }
};


export const retrieveProduct = (productId) => async dispatch => {
  console.log(productId, 'thunking about products')
  const res = await fetch(`/api/category/products/${productId}`);

  if (res.ok) {
    const product = await res.json();
    console.log(product, 'return from fetch')
    dispatch(retrieve(product));
  }
};


const productReducer = (state = {}, action) => {
  const newState = { ...state }
  switch(action.type) {
    case GET_PRODUCTS:
      {
        const res = {}
        action.products.products.forEach(product => {
          res[product.id] = product;
        });
        return res;
      }
    case RETRIEVE_PRODUCT:
      {
        return {...action.product};
      }
    default:
      return newState
  }
}
export default productReducer;
