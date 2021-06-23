import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './CheckoutForm.css';

const CheckoutForm = ({ setShowModal }) => {

    //hooks and state
    const dispatch = useDispatch();
    const history = useHistory();

    //functions
    const confirmOrder = () => {
        //back end stuff
        history.push('/');
    }

    //JSX
    return (
        <div className="checkout_form">
            <div>Please review your order before confirming:</div>
            <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
            <div className="shopping_cart_summary__item_list">
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div className="checkout_form__title">Name of Item</div>
                    <div className="checkout_form__title">Quantity of Item</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 1 with a really long name like I dunno think of something you can do it or whatever oh look the linter is mad except this is JavaScript</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 2</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 3</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 4</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 5</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 6</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 7</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 8</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 9</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 10</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 11</div>
                    <div>1000000</div>
                </div>
                <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                    <div>Thing 12</div>
                    <div>1000000</div>
                </div>
            </div>
            <hr className="shopping_cart_summary__divider shopping_cart_summary__line"/>
            <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                <div>Current Credits</div>
                <div>$0.00</div>
            </div>
            <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                <div>Total Cost of Order</div>
                <div>$0.00</div>
            </div>
            <div className="shopping_cart_summary__priceline shopping_cart_summary__line">
                <div>Credits After Order</div>
                <div>$0.00</div>
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

export default CheckoutForm;