import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
export default function LoginFormModal({setCurrentModal, isLogin}) {
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if(isLogin){
            setShowLoginModal(true);
        } else {
            setShowLoginModal(false);
        }
    }, [isLogin])


    return (
        <>
            <button onClick={() => {
                setShowLoginModal(true);
                setCurrentModal('login');
            }}>Login</button>
            {showLoginModal && (
                <Modal onClose={() => {
                    setShowLoginModal(false);
                    setCurrentModal('');
                }}>
                    <LoginForm hideLogin={() => setShowLoginModal(false)} setCurrentModal={setCurrentModal}/>
                </Modal>
            )}
        </>
    )
}
