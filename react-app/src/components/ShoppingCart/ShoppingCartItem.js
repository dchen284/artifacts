import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCartItem = ({setCheckoutIsDisabled, item}) => {
    console.log('WHAT IS ITEM',)
    //hooks and state
    const [quantity, setQuantity] = useState(item.quantity);
    const { product } = item;
    //to do

    //functions
        //remove item from cart
        //change quantity in cart
            //if quantity is zero, remove item from cart
            //max is...?
                //based off inventory?

    // flow:
    // changing the quantity here will update Redux store for cart
    // Redux store will contain cart items
    // so on the Shopping Cart, it will get all the cart items from store

    // useEffects
    useEffect(() => {
        console.log(setCheckoutIsDisabled);
        // quantity > 3 ? console.log(true) : console.log(false);
        setQuantity(item.quantity)
    }, [item.quantity])


    //JSX
    return (
        <div className="shopping_cart_item">
            <div>
                <img className="shopping_cart_item__image" src={product.imgURL}/>
            </div>
            <div>
                <div className="shopping_cart_item__line">
                    <Link to={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </div>
                <div className="shopping_cart_item__line">
                    <span className="shopping_cart_item__stock_yes">Stock:
                        <span>3</span>
                    /</span>
                    <span className="shopping_cart_item__stock_low">Almost Out, Order Now! /</span>
                    <span className="shopping_cart_item__stock_no">Out of Stock</span>
                </div>
                <div className="shopping_cart_item__line">
                    <label htmlFor="quantity" className="shopping_cart_item__quantity_label">Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        name="quantity"
                        className="shopping_cart_item__quantity_number"
                    />
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