

const GET_SHOPPING_CART = "shopping_cart/GET_SHOPPING_CART"
const ADD_TO_SHOPPING_CART = "shopping_cart/ADD_TO_SHOPPING_CART"


// ACTION CREATORS
const addToCart = (item) => {
    return {
        type: ADD_TO_SHOPPING_CART,
        item
    }
} 

// THUNKS
export const shopping = (item) => async dispatch => {
    const res = await fetch('/api/shopping/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    const data = await res.json();

    dispatch(addToCart(data))
} 


// REDUCER

const shoppingCartReducer = (state = {}, action) => {
      const newState = { ...state }
    switch(action.type) {
        case GET_SHOPPING_CART:
          return 
        case ADD_TO_SHOPPING_CART:
          newState[action.item.id] = action.item;
          return newState;
        default:
          return newState
      }
}

export default shoppingCartReducer

