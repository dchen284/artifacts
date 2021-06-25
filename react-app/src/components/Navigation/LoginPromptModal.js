import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
export default function SignUpModal({ setCurrentModal, isLoginPrompt }) {
    const [showModal, setShowModal] = useState(false);

    // listen for when the button is hit
    useEffect(() => {
        if(isLoginPrompt){
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [isLoginPrompt])


    return (
        <>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false);
                    setCurrentModal('');
                }}>
                    <div>
                        Login
                    </div>
                </Modal>
            )}
        </>
    )
}
