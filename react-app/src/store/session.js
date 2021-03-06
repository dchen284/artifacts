import { clearShoppingCart } from './shopping_cart';

// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";




// action creators
const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

// thunks - functions that return functions

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }
    dispatch(setUser(data));
  }

  export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(setUser(data));
    return {};
  }

  export const logout = () => async (dispatch) => {
    await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });

    dispatch(removeUser())
    dispatch(clearShoppingCart())
  };


  export const signUp = (username, email, password, repeatPassword) => async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        repeat_password: repeatPassword,
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(setUser(data));
    return {}

  }


// Initial state + reducer
const initialState = {}

export default function reducer( state = initialState, action) {
  switch(action.type){
        case SET_USER:
            return {user: action.payload}
        case REMOVE_USER:
            return {user: null}
        default:
            return state;
    }
}