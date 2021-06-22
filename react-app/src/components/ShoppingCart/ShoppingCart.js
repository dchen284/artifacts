import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import './ShoppingCart.css';

const ShoppingCart = () => {

    // make shopping_cart_items model and seeder
    // get route for shopping_cart_items

    // for single product page:
        // what shows when there is no inventory?
        // when is there an update on inventory?

        // note: items added to cart are really "phantom items"
        // or "voucher" that may not be redeemable if no stock

    //what happens when "Add to Shopping Cart" is clicked?

    //load ShoppingCartItems from database
        //when?


    //checkout button goes to confirmation modal
        //actions

    //purchase button on confirmation modal
        //actions
        //redirect to root (on success? on fail?)

    //checks on inventory:
        //when?
            //maybe multiple checks?
        //what happens if item is not available?



    //JSX
    return (
        <div className="shopping_cart">
            <div className="shopping_cart__item_display">
                <h1>Shopping Cart</h1>
                <ShoppingCartItem />
            </div>
            <div className="shopping_cart__summary">
                <h2>Summary</h2>
                <h3>Subtotal: $0.00</h3>
                <h3>Tax: $0.00</h3>
                <hr className="shopping_cart__summary_divider"/>
                <h3>Total: $0.00</h3>
                <hr className="shopping_cart__summary_divider"/>
                <button>Checkout</button>
            </div>
        </div>
    )
};

export default ShoppingCart;
