import React from 'react';
import './ShoppingCart.css';

const ShoppingCartItem = () => {

    //to do

    //clickable link to product page
        //need path to product page

    //when to update database when the cart items change?

    //functions
        //remove item from cart
        //change quantity in cart
            //if quantity is zero, remove item from cart
            //max is...?
                //based off inventory?

    //JSX
    return (
        <div className="shopping_cart_item">
            <div>
                <img className="shopping_cart_item__image"/>
            </div>
            <div>
                <div className="shopping_cart_item__line">Item Name</div>
                <div className="shopping_cart_item__line">
                    <span className="shopping_cart_item__stock_yes">Stock: ### /</span>
                    <span className="shopping_cart_item__stock_low">Almost Out, Order Now! /</span>
                    <span className="shopping_cart_item__stock_no">Out of Stock</span>
                </div>
                <div className="shopping_cart_item__line">
                    <label htmlFor="quantity" className="shopping_cart_item__quantity_label">Quantity:</label>
                        <select defaultValue="1" name="quantity" id="quantity">
                            <option value="0">0 (Delete From Cart)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                </div>
                <div className="shopping_cart_item__line shopping_cart_item__priceline">
                    <div>Total</div>
                    <div>$0.00</div>
                </div>
                <div className="shopping_cart_item__line">
                    <button>Delete Item</button>
                </div>
            </div>

        </div>
    )
};

export default ShoppingCartItem;