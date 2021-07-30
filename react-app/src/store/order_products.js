const GET_ORDER_PRODUCTS = 'categories/GET_ORDER_PRODUCTS';

const userOrderProducts = order_products => ({
    type: GET_ORDER_PRODUCTS,
    order_products
})

export const getUserOrderProducts = (id) => async dispatch => {
    const res = await fetch(`/api/orders/${orderId}`);
    if (res.ok) {
        const order_products = await res.json();
        dispatch(userOrderProducts(order_products));
        return res;
    }
};
