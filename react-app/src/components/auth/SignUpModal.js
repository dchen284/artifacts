import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';
export default function SignUpModal({ setCurrentModal, isSignup }) {
    const [showModal, setShowModal] = useState(false);

    // listen for when the button is hit
    useEffect(() => {
        if(isSignup){
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [isSignup])


    return (
        <>
            {/* <button onClick={() => {
                setShowModal(true)
            }}>Register</button> */}
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false);
                    setCurrentModal('');
                }}>
                    <SignUpForm setCurrentModal={setCurrentModal}/>
                </Modal>
            )}
        </>
    )
}
