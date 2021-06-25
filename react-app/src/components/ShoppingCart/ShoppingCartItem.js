import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCartItemFromDb, updateCartItemInDb } from '../../store/shopping_cart';
import './ShoppingCart.css';

const ShoppingCartItem = ({item}) => {
    //console.log('WHAT IS ITEM',)
    //hooks and state
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);
    const [quantityStatus, setQuantityStatus] = useState();
    const [quantityError, setQuantityError] = useState(false);
    const { product } = item;
    //to do

    // useEffects

    /*
    This function updates the Redux store that the quantity of an item has changed.
    */
    const changeQuantity = (e) => {
        if (e.target.value > item.product.quantity) {
            setQuantity(item.product.quantity);
            setQuantityError('Quantity exceeds stock quantity, please adjust.');
            setTimeout(() => {setQuantityError('')}, 5000);
        }
        else if (e.target.value < 1) {
            setQuantity(1);
            setQuantityError('Quantity must be 1 or greater; use Delete Item button to delete.');
            setTimeout(() => {setQuantityError('')}, 5000);
        }
        else {
            setQuantity(e.target.value);
        }
        /*
        Tried updating from here, the problem is that 'quantity' here is still the old value,
        not the value set by setQuantity.  Used a useEffect to ensure that the 'quantity'
        is after setQuantity fires.
        */
    }

    //This useEffect works after changeQuantity is invoked
    useEffect(() => {
        /*
        'item.quantity' is from the database, 'quantity' is the user input.
        The dispatch only occurs if the quantity needs updating, which is
        when 'item.quantity' and 'quantity' do not match.  Without this 'if',
        updates would be attempted every reload.

        This useEffect creates a copy of the item named 'updatedItem',
        but with the updated quantity.  'updatedItem' is then dispatched.
        */
        // setTimeout( () => {
            if (item.quantity !== +quantity) {
                const updatedItem = Object.assign({}, item);
                updatedItem.quantity = +quantity;
                // console.log('item and updatedItem', item, updatedItem);
                dispatch(updateCartItemInDb(updatedItem));
            }
        // }, 500);

    }, [dispatch, item, quantity])

    /*
    This function updates the Redux store that an item has been removed.
    */
    const deleteCartItem = () => {
        //console.log('>>>>>>item', item);
        dispatch(deleteCartItemFromDb(item));
    }

    //This useEffect displays different quantity status text on the shopping cart screen.
    useEffect(() => {
        if (item.product.quantity === 0) {
            setQuantityStatus(`In Stock: ${item.product.quantity} [Sold Out]`);
        }
        else if (item.product.quantity <= 5) {
            setQuantityStatus(`In Stock: ${item.product.quantity} [Almost out, order now!]`);
        }
        else {
            setQuantityStatus(`In Stock: ${item.product.quantity}`);
        }
    }, [item]);

    //JSX
    return (
        <div className="shopping_cart_item">
            <div>
                <img className="shopping_cart_item__image" alt={product.name} src={product.imgURL}/>
            </div>
            <div>
                <div className="shopping_cart_item__line">
                    <Link to={`/products/${product.id}`}>
                        {product.name}
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