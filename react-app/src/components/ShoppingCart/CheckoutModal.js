import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import CheckoutForm from './CheckoutForm';
import './ShoppingCart.css';

export default function CheckoutModal({setCurrentModal, isCheckout, checkoutIsDisabled}) {

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
                Checkout
            </button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false);
                    setCurrentModal('');
                }}>
                    <CheckoutForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )
}
