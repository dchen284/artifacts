import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './auth/LoginFormModal';
import SignUpModal from './auth/SignUpModal';
import styles from '../css-modules/NavBar.module.css'
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
          <LogoutButton />
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

        {/* <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        
      </ul>
    </nav>
  );
}

export default NavBar;