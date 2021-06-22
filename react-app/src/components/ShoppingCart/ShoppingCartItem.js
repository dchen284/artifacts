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
        <div className="shopping_cart__item">
            <div>Item</div>
            <div>In Stock?  Stock Number?  Just a few left?</div>
            <label htmlFor="quantity">Quantity:</label>
            <select name="quantity" id="quantity">
                <option value="0">0 (Delete From Cart)</option>
                <option defaultValue value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button>Delete Item</button>
        </div>
    )
};

export default ShoppingCartItem;