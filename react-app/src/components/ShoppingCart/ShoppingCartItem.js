import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCartItem = () => {

    const cartItem = { quantity: 2, product: {quantity: 4}};

    //hooks and state
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const [quantityStatus, setQuantityStatus] = useState();
    const [quantityError, setQuantityError] = useState(false);
    // const dispatch = useDispatch();
    // let quantityStatus;
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

    /*
    This function updates the Redux store that the quantity of an item has changed.
    */
    const changeQuantity = (e) => {
        if (e.target.value > cartItem.product.quantity) {
            setQuantity(cartItem.product.quantity);
            setQuantityError('Quantity exceeds stock quantity, please adjust.');
            setTimeout(() => {setQuantityError('')}, 5000);
            //dispatch(fetchChangeQuantityOfItem(quantity));
        }
        else if (e.target.value < 1) {
            setQuantity(1);
            setQuantityError('Quantity must be 1 or greater; use Delete Item button to delete.');
            setTimeout(() => {setQuantityError('')}, 5000);
            //dispatch(fetchChangeQuantityOfItem(1));
        }
        else {
            setQuantity(e.target.value);
            //dispatch(fetchChangeQuantityOfItem(quantity));
        }

    }

    useEffect(() => {
        if (cartItem.product.quantity === 0) {
            setQuantityStatus(`In Stock: ${cartItem.product.quantity} [Sold Out]`);
        }
        else if (cartItem.product.quantity <= 5) {
            setQuantityStatus(`In Stock: ${cartItem.product.quantity} [Almost out, order now!]`);
        }
        else {
            setQuantityStatus(`In Stock: ${cartItem.product.quantity}`);
        }
    }, [cartItem]);

    /*
    This function updates the Redux store that an item has been removed.
    */
    const deleteCartItem = (e) => {

    }


    //JSX
    return (
        <div className="shopping_cart_item">
            <div>
                <img className="shopping_cart_item__image"/>
            </div>
            <div>
                <div className="shopping_cart_item__line">
                    <Link to="/products/1">
                        Item Name
                    </Link>
                </div>
                <div className="shopping_cart_item__line">
                    <div>{quantityStatus}</div>
                    {/* <span className="shopping_cart_item__stock_yes">Stock:
                        <span>3</span>
                    /</span>
                    <span className="shopping_cart_item__stock_low">Almost Out, Order Now! /</span>
                    <span className="shopping_cart_item__stock_no">Out of Stock</span> */}
                </div>
                <div className="shopping_cart_item__line">
                    <label htmlFor="quantity" className="shopping_cart_item__quantity_label">Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={changeQuantity}
                        name="quantity"
                        className="shopping_cart_item__quantity_number"
                    />

                </div>
                <div className="shopping_cart_item__quantity_error">{quantityError}</div>
                <div className="shopping_cart_item__line shopping_cart_item__priceline">
                    <div>Total</div>
                    <div>$0.00</div>
                </div>
                <div className="shopping_cart_item__line">
                    <button
                        onClick={deleteCartItem}
                    >
                        Delete Item
                    </button>
                </div>
            </div>

        </div>
    )
};

export default ShoppingCartItem;