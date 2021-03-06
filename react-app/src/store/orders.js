const GET_ORDERS = 'categories/GET_ORDERS';
const RETRIEVE_ORDER = 'categories/RETRIEVE_ORDER';

export const retrieve = (order) => ({
    type: RETRIEVE_ORDER,
    order
});

const userOrders = orders => ({
    type: GET_ORDERS,
    orders
})

export const getUserOrders = (id) => async dispatch => {
    const res = await fetch(`/api/orders/user/${id}`);
    if (res.ok) {
        const orders = await res.json();
        dispatch(userOrders(orders));
        return res;
    }
};


export const retrieveOrder = (productId) => async dispatch => {
    const res = await fetch(`/api/orders/products/${productId}`);

    if (res.ok) {
        const order = await res.json();
        dispatch(retrieve(order));
    }
};


const initialState = {}

const orderReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ORDERS:
            newState = {};
            for (const key in action.orders) {
                newState[key] = action.orders[key];
            }
            return newState;
        case RETRIEVE_ORDER:
            newState = { ...state };
            newState[action.order.id] = action.order;
            return newState;
        default:
            return state;
    }
}

export default orderReducer;