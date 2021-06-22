import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import './ShoppingCart.css';

const ShoppingCart = () => {

    // post route for shopping_cart_items
    // get route for shopping_cart_items


    // for single product page:
        // what shows when there is no inventory?
            //disable button or show message hiding button
        // when is there an update on inventory?
            //updated on checkout
            //when going to single product page (already has this)

        // note: items added to cart are really "phantom items"
        // or "voucher" that may not be redeemable if no stock

    //what happens when "Add to Shopping Cart" is clicked?
        // on the product page, we have the current quantity
            // check availability
                // disable the Checkout button if insufficient availability
        //on clicking the Checkout
            // render a component modal with links to cart and continue shopping (product listings page)
                //(look into useHistory to go back?)

    //load ShoppingCartItems from database
        //on login, or when app is loaded when logged in


    //checkout button goes to confirmation modal
        //shows credits
        //show total price
        //confirm button
        //cancel button (exit modal)

    //purchase button on confirmation modal
        //for each shopping cart item, query for the given product to get the most up-to-date quantity
            //check availability
                //if there is not availaibity, close the modal, render the error
                    //on the shopping cart page, checkout button is disabled
                //if there is availability
                    // create an order
                    // update all product quantities
                    // clear shopping_cart_items on backend
                    // clear ShoppingCart component on frontend
                    // redirect to root



    //get all items from shopping cart
    //calculate price from quantity*product price

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
