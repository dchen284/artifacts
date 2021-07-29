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



const userProducts = products => ({
  type: GET_PRODUCTS,
  products
})


export const getProducts = (category) => async dispatch => {
  const res = await fetch(`/api/category/${category}`);

  if (res.ok) {
    const products = await res.json();
    //console.log(products, 'return from fetch')
    dispatch(list(products));
  }
};


export const getUserProducts = (id) => async dispatch => {
  const res = await fetch(`/api/category/user/${id}`);

  if (res.ok) {
    const products = await res.json();

    dispatch(userProducts(products));
  }
};


export const retrieveProduct = (productId) => async dispatch => {
  const res = await fetch(`/api/category/products/${productId}`);

  if (res.ok) {
    const product = await res.json();
    dispatch(retrieve(product));
  }
};

export const removeListing = (productId) => async dispatch => {
  await fetch(`/api/category/products/${productId}`, {
    method: 'DELETE',
  });

};



const productReducer = (state = {}, action) => {
  const newState = { ...state }
  switch(action.type) {
    case GET_PRODUCTS:
      {
        const res = {}
        action.products.forEach(product => {
          res[product.id] = product;
        });
        return res;
      }
    case RETRIEVE_PRODUCT:
      {
        const res = { ...state }
        res[action.product.id] = action.product;
        return res;
      }
    default:
      return newState
  }
}
export default productReducer;
