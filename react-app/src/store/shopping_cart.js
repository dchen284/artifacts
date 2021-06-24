

const GET_SHOPPING_CART = "shopping_cart/GET_SHOPPING_CART"
const ADD_TO_SHOPPING_CART = "shopping_cart/ADD_TO_SHOPPING_CART"
const REMOVE_FROM_SHOPPING_CART = "shopping_cart/REMOVE_FROM_SHOPPING_CART"

// ACTION CREATORS
const addToCart = (item) => {
    return {
        type: ADD_TO_SHOPPING_CART,
        item
    }
}

const getCart = (items) => ({
    type: GET_SHOPPING_CART,
    items
})

const removeFromCart = (item) => {
  return {
      type: REMOVE_FROM_SHOPPING_CART,
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

export const getCartItems = (userId) => async (dispatch) => {
    const res = await fetch(`/api/shopping/${userId}`)

    const data = await res.json();

    dispatch(getCart(data))

}

export const deleteCartItemFromDb = (item) => async dispatch => {
  const res = await fetch(`/api/shopping/`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
  if (res.ok) {
    //const data = await res.json();
    dispatch(removeFromCart(item));
  }
}

export const updateCartItemInDb = (itemToUpdate) => async dispatch => {
  const res = await fetch(`/api/shopping/`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(itemToUpdate)
  })
  if (res.ok) {
    const data = await res.json();
    dispatch(addToCart(data)); //the logic for addToCart also works for updating
  }
}

// REDUCER

const shoppingCartReducer = (state = {}, action) => {
      const newState = { ...state }
    switch(action.type) {
        case GET_SHOPPING_CART:
          action.items.forEach(item => {
            newState[item.id] = item;
          })
          return newState;
        case ADD_TO_SHOPPING_CART:
          newState[action.item.id] = action.item;
          return newState;
        case REMOVE_FROM_SHOPPING_CART:
          delete newState[action.item.id];
          return newState;
        default:
          return newState
      }
}

export default shoppingCartReducer
