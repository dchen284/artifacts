

const GET_SHOPPING_CART = "shopping_cart/GET_SHOPPING_CART"
const ADD_TO_SHOPPING_CART = "shopping_cart/ADD_TO_SHOPPING_CART"
const REMOVE_FROM_SHOPPING_CART = "shopping_cart/REMOVE_FROM_SHOPPING_CART"
const CLEAR_SHOPPING_CART = "shopping_cart/CLEAR_SHOPPING_CART"


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

const clearShoppingCart = () => {
  return {
      type: CLEAR_SHOPPING_CART
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


export const checkoutCart = cartItems => async dispatch => { // cartItems comes as an array of shopping_cart_item objects
    // Should also create an Order on the backend
    // Iterate through and delete 'product' key since we don't need that object data
    // for (let item of cartItems) {
    //   delete item['product']
    // }

    const res = await fetch('/api/shopping/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(cartItems)
    })

    const message = await res.json();
    // If there are no errors, update state
    // Else return error messages to shopping cart component for rendering
    if(!message.length){
      dispatch(clearShoppingCart());
    } 
    return message;
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
        case CLEAR_SHOPPING_CART:
          return {};
        default:
          return newState
      }
}

export default shoppingCartReducer
