import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './products';
import session from './session';
import reviewsReducer from './reviews';
import shoppingCartReducer from './shopping_cart';
import usersReducer from './users';
import orderReducer from './orders';
// import orderProductsReducer from './order_products';

const rootReducer = combineReducers({
    session,
    products: productReducer,
    reviews: reviewsReducer,
    shopping_cart: shoppingCartReducer,
    users: usersReducer,
    orders: orderReducer,
    // order_products: orderProductsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
