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
    const res = await fetch(`/api/category/user/${id}`);

    if (res.ok) {
        const orders = await res.json();

        dispatch(userOrders(orders));
    }
};


export const retrieveOrder = (productId) => async dispatch => {
    const res = await fetch(`/api/category/products/${productId}`);

    if (res.ok) {
        const order = await res.json();
        dispatch(retrieve(order));
    }
};

const orderReducer = (state = {}, action) => {
    const newState = { ...state }
    switch(action.type) {
        case GET_ORDERS:
        {
            const res = {}
            action.orders.forEach(order => {
            res[order.id] = order;
            });
            return res;
        }
        case RETRIEVE_ORDER:
        {
            const res = { ...state }
            res[action.order.id] = action.order;
            return res;
        }
        default:
        return newState
    }
}
export default orderReducer;