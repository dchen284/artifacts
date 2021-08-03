// const GET_ORDER_PRODUCTS = 'categories/GET_ORDER_PRODUCTS';

// const userOrderProducts = order_products => ({
//     type: GET_ORDER_PRODUCTS,
//     order_products
// })

// export const getUserOrderProducts = (orderId) => async dispatch => {
//     const res = await fetch(`/api/orders/${orderId}`);
//     if (res.ok) {
//         const order_products = await res.json();
//         dispatch(userOrderProducts(order_products));
//         return res;
//     }
// };

// const initialState = {}

// const orderProductsReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         case GET_ORDER_PRODUCTS:
//             newState = {};
//             action.order_products.forEach((order_product) => {
//                 newState[order_product.id] = order_product;
//             });
//             return newState;
//         default:
//             return state;
//     }
// }

// export default orderProductsReducer;