import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import UploadListing from './UploadListing';
import styles from '../../css-modules/NavBar.module.css';

// setCurrentModal, setCurrentModal={setCurrentModal}
export default function UploadListingModal({ setCurrentModal, isUpload }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(isUpload){
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [isUpload])


    return (
        <>
         
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false);
                    setCurrentModal('');
                }}>
                    <UploadListing hideLogin={() => setShowModal(false)} setCurrentModal={setCurrentModal} />
                </Modal>
            )}
        </>
    )
}
