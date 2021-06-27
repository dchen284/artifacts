import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import styles from '../../css-modules/AuthForms.module.css';

export default function LoginFormModal({setCurrentModal, isLogin, auth}) {
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if(isLogin){
            setShowLoginModal(true);
        } else {
            setShowLoginModal(false);
            auth.setAuthMsg('');
        }
    }, [auth, isLogin])


    return (
        <>
            <button className={styles.loginBtn} onClick={() => {
                setShowLoginModal(true);
                setCurrentModal('login');
            }}>Login</button>
            {showLoginModal && (
                <Modal onClose={() => {
                    setShowLoginModal(false);
                    setCurrentModal('');
                }}>
                    <LoginForm hideLogin={() => setShowLoginModal(false)} setCurrentModal={setCurrentModal} auth={auth}/>
                </Modal>
            )}
        </>
    )
}
