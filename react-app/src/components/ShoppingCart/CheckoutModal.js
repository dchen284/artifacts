import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import CheckoutForm from './CheckoutForm';
import './ShoppingCart.css';

export default function CheckoutModal({setCurrentModal, isCheckout, checkoutIsDisabled, cartItems, setErrors}) {

    const [showModal, setShowModal] = useState(false);

    // listen for when the button is hit
    useEffect(() => {
        if(isCheckout){
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [isCheckout])


    return (
        <>
            <button
                className="shopping_cart_checkout_button"
                onClick={() => {setShowModal(true)}}
                disabled={checkoutIsDisabled}
            >
                {checkoutIsDisabled ? 'Cannot Checkout' : 'Checkout'}
            </button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false);
                    setCurrentModal('');
                }}>
                    <CheckoutForm
                    setShowModal={setShowModal}
                    cartItems={cartItems}
                    setErrors={setErrors}
                    //setCheckoutIsDisabled={setCheckoutIsDisabled}
                    />
                </Modal>
            )}
        </>
    )
}
