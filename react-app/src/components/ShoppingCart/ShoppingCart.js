import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import CheckoutModal from './CheckoutModal';
import { getCartItems } from '../../store/shopping_cart';
import './ShoppingCart.css';

const ShoppingCart = () => {
    //hooks and state variables
    const dispatch = useDispatch();
    const [currentModal, setCurrentModal] = useState('');
    const [checkoutIsDisabled, setCheckoutIsDisabled] = useState(false);
    const [errors, setErrors] = useState([]);
    const { session , shopping_cart } = useSelector(state => state);
    const userId = session.user.id;
    const cartItems = Object.values(shopping_cart);
    // console.log('SHOPPING', cartItems);

    useEffect(() => {
        dispatch(getCartItems(userId))
    }, [dispatch, userId])

    //useEffects

    /*
    This useEffect toggles the disabled status of the Checkout button.

    In the useEffect, the Checkout button starts as disabled=false,
    then changes to disabled=true if any of the following problems occur:

    1) A cart item's quantity is larger than the product's quantity (the available inventory).
    2) A cart item's quantity is less than 1.  (0 should be deleted, negative numbers not possible)
    */

    useEffect(() => {
        setCheckoutIsDisabled(false);
        if (!cartItems.length) {
            setCheckoutIsDisabled(true);
        }
        cartItems.forEach( cartItem => {
            if (cartItem.quantity > cartItem.product.quantity || cartItem.quantity < 1) {
                setCheckoutIsDisabled(true);
            }
        });
    }, [cartItems]);

    //functions
    const cartTotal = cartItems.reduce((accum, item) => {
        const {product} = item;
        accum += product.price * item.quantity;
        return accum;
    }, 0)

    //JSX
    return (
        <div className="shopping_cart">
            <div className="shopping_cart_item_display">
                <div className="shopping_cart_item_display__title">Shopping Cart</div>
                {cartItems?.map(item => <ShoppingCartItem item={item} key={item.id}/>)}
            </div>
            <div className="shopping_cart_summary">
                <div className="shopping_cart_summary__title shopping_cart_summary__line">Cart Summary</div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Subtotal</div>
                    <div>{`$${cartTotal}.00`}</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Tax</div>
                    <div>$0.00</div>
                </div>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div className="shopping_cart_summary__line--bold">Total</div>
                    <div className="shopping_cart_summary__line--bold">{`$${cartTotal}.00`}</div>
                </div>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <CheckoutModal
                    setCurrentModal={setCurrentModal}
                    isCheckout={currentModal === 'checkout'}
                    checkoutIsDisabled={checkoutIsDisabled}
                    cartItems={cartItems}
                    setErrors={setErrors}
                    // setCheckoutIsDisabled={setCheckoutIsDisabled}
                />
                {errors.length ?
                <ul>
                    {errors.map(error => <li>{error}</li>)}
                </ul>
                :
                null}
            </div>
        </div>
    )
};

export default ShoppingCart;
