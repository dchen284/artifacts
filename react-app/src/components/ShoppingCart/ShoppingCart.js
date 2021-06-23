import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import CheckoutModal from './CheckoutModal';
import './ShoppingCart.css';

const ShoppingCart = () => {
    //hooks and state variables
    const [currentModal, setCurrentModal] = useState('');
    const [checkoutIsDisabled, setCheckoutIsDisabled] = useState(false);
    // const dispatch = useDispatch();
    // const cartItems = useSelector(state => state.cart);

    // cartItems = [

    // ]

    //functions
    // const checkout = () => {

    // }

    //JSX
    return (
        <div className="shopping_cart">
            <div className="shopping_cart_item_display">
                <div className="shopping_cart_item_display__title">Shopping Cart</div>
                <ShoppingCartItem setCheckoutIsDisabled={setCheckoutIsDisabled}/>
                <ShoppingCartItem />
                <ShoppingCartItem />
                <ShoppingCartItem />
            </div>
            <div className="shopping_cart_summary">
                <div className="shopping_cart_summary__title shopping_cart_summary__line">Cart Summary</div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Subtotal</div>
                    <div>$0.00</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Tax</div>
                    <div>$0.00</div>
                </div>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div className="shopping_cart_summary__line--bold">Total</div>
                    <div className="shopping_cart_summary__line--bold">$0.00</div>
                </div>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <CheckoutModal
                    setCurrentModal={setCurrentModal}
                    isCheckout={currentModal === 'checkout'}
                    checkoutIsDisabled={checkoutIsDisabled}
                />
            </div>
        </div>
    )
};

export default ShoppingCart;
