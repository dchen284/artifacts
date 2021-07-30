import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { checkoutCart, getCartItems } from "../../store/shopping_cart";
import './CheckoutForm.css';

const CheckoutForm = ({ setShowModal, cartItems, setErrors }) => {

    //hooks and state
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [isPurchased, setIsPurchased] = useState(false);

    //functions
    const confirmOrder = async () => {
        //back end stuff
        const errors = await dispatch(checkoutCart( cartItems ))

        if(errors.length){
            setErrors(errors);
            // setCheckoutIsDisabled(true);
            dispatch(getCartItems(user.id))
            setShowModal(false);
        } else {
            setErrors([]);
            setIsPurchased(true);
        }
    }
    const redirectHome = () => history.push('/');
    const redirectShopping = () => history.push('/category/Prehistoric')


    const cartTotal = cartItems.reduce((accum, item) => {
        const {product} = item;
        accum += product.price * item.quantity;
        return accum;
    }, 0)

    //JSX
    // If checkout is confirmed, display thank you message and redirect options
    // Else, display checkout form
    if (isPurchased){
        return(
            <div className="checkout_form">
                <h1>Thank you for your purchase!</h1>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <div className="checkout_form__button_line">
                    <button
                        onClick={redirectHome}
                        className="checkout_form__button">
                        Return Home
                    </button>
                    <button
                        onClick={redirectShopping}
                        className="checkout_form__button">
                        Continue Shopping
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="checkout_form">
                <div>Please review your order before confirming:</div>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <div className="shopping_cart_summary__item_list">
                    <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                        <div className="checkout_form__title">Name of Item</div>
                        <div className="checkout_form__title">Quantity of Item</div>
                    </div>
                    {cartItems.map( (item) => {
                        const { product } = item;
                        return (
                            <div key={product.id} className="shopping_cart_summary__priceline shopping_cart_summary__line">
                            <div>{product.name}</div>
                            <div>{item.quantity}</div>
                            </div>
                        )
    
                    })}
                </div>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Total Cost of Order</div>
                    <div>{`$${cartTotal}`}</div>
                </div>
                <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
                <div className="checkout_form__button_line">
                    <button
                        onClick={confirmOrder}
                        className="checkout_form__button">
                        Confirm Order
                    </button>
                    <button
                        onClick={() => setShowModal(false)}
                        className="checkout_form__button">
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default CheckoutForm;
