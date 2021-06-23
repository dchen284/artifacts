import React, { useEffect, useState } from 'react';
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

    const cartItems = [
        { quantity: 2, product: {quantity: 3} },
        { quantity: 2, product: {quantity: 3} },
    ];
    // cartItems will be an array of objects, objects with the form:
    /*
        {
            "id": self.id,
            "userId": self.userId,
            "productId": self.productId,
            "quantity": self.quantity,
            "product": self.products.to_dict()
        }
    */

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
        cartItems.forEach( cartItem => {
            if (cartItem.quantity > cartItem.product.quantity || cartItem.quantity < 1) {
                setCheckoutIsDisabled(true);
            }
        });
    }, [cartItems]);

    //functions
    // const checkout = () => {

    // }

    //JSX
    return (
        <div className="shopping_cart">
            <div className="shopping_cart_item_display">
                <div className="shopping_cart_item_display__title">Shopping Cart</div>
                <ShoppingCartItem />
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
