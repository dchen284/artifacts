import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import UploadListingModal from '../UploadListing/UploadListingModal'
import styles from '../../css-modules/NavBar.module.css';

export default function ProfileButton({user, setCurrentModal}) {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const closeMenu = () => setShowMenu(false)

        if(showMenu){
            document.addEventListener('click', closeMenu);
        }

        return () => document.removeEventListener('click', closeMenu);
        
    }, [showMenu])

    const toggleMenu = () => setShowMenu(prevState => !prevState);

    return (
        <div className={styles.profileMenu}>
             <button className={styles.profileBtn} onClick={toggleMenu}>
              <i className="fas fa-user-circle fa-lg" />
              <i className="fas fa-caret-down" />
            </button>
            {showMenu && 
            <ul className={styles.dropDown}>
                <li>
                    <NavLink to={`/users/${user.id}`}> 
                        {user.username}
                        <div>View your profile</div>
                    </NavLink>
                </li>
                <li>
                    <button className={styles.dropDownBtn} onClick={() => {
                    setCurrentModal('upload');
                    }}>Add Listing</button>
                </li>
                <li>
                    <LogoutButton />
                </li>
                
            </ul>}
        </div>
    )
}
