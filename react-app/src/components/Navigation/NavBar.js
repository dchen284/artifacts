import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpModal from '../auth/SignUpModal';
import ProfileButton from './ProfileButton'
import styles from '../../css-modules/NavBar.module.css'
const NavBar = () => {
  // TODO: Turn Login into button once Modal is created
  const [currentModal , setCurrentModal] = useState('');
  console.log("mode", currentModal)
  const user = useSelector(state => state.session.user);
  
  return (
    <nav>
      <ul className={styles.navItems}>
        <li className={styles.leftMenu}>
          <NavLink to="/" exact={true} activeClassName="active">
            Artifacts
          </NavLink>
        </li>
        <li className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for anything"/>
            <button>
              <i className="fas fa-search fa-lg" />
            </button>    
          </div>
        </li>
        <li className={styles.rightMenu}>
          {user ? 
          <>
            {/* <LogoutButton />  */}
            <button className={styles.favoritesBtn}>
              <i className="far fa-heart fa-lg" />
            </button>
            <ProfileButton user={user}/>
          </>
          :
          <>
            <LoginFormModal setCurrentModal={setCurrentModal} isLogin={currentModal === 'login'}/>
            <SignUpModal setCurrentModal={setCurrentModal} isSignup={currentModal === 'signup'}/>
          </>
          }
        
          <NavLink to="/shopping-cart" className={styles.shoppingCart}>
            <i className="fas fa-shopping-cart fa-lg" />
          </NavLink>    
        </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;