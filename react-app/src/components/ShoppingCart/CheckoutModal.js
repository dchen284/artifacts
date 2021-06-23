import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import CheckoutForm from './CheckoutForm';
export default function CheckoutModal({ setCurrentModal, isCheckout }) {
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
            <button onClick={() => {
                setShowModal(true)
            }}>Checkout</button>
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
