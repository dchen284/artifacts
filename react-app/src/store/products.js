const GET_PRODUCTS = 'categories/GET_PRODUCTS';


export const list = (products) => ({
  type: GET_PRODUCTS,
  products
});


export const getProducts = (category) => async dispatch => {
  console.log(category, 'thunk category')
  const res = await fetch(`/api/category/${category}`);

  if (res.ok) {
    const products = await res.json();
    console.log(products, 'return from fetch')
    dispatch(list(products));
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
    default:
      return newState
  }
}
export default productReducer;
