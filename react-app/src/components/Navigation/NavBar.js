import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpModal from '../auth/SignUpModal';
import UploadListingModal from '../UploadListing/UploadListingModal'
import ProfileButton from './ProfileButton'
import SearchBar from './SearchBar';
import styles from '../../css-modules/NavBar.module.css'
const NavBar = () => {

  const [currentModal , setCurrentModal] = useState('');
  //console.log("mode", currentModal)
  const user = useSelector(state => state.session.user);

  return (
    <nav>
      <ul className={styles.navItems}>
        <li className={styles.leftMenu}>
          <Link to="/" exact={true} activeClassName="active">
            <img className={styles.logo} src="logo2.png" />
          </Link>
          <Link to="/category/Prehistoric" exact={true} activeClassName="active">
            <button className={styles.exploreBtn}>Explore</button>
          </Link>
        </li>
        <SearchBar />
        <li className={styles.rightMenu}>
          {user ?
          <>
            {/* <LogoutButton />  */}
            <button className={styles.favoritesBtn}>
              <i className="far fa-heart fa-lg" />
            </button>
            <ProfileButton user={user} setCurrentModal={setCurrentModal}/>
            <UploadListingModal setCurrentModal={setCurrentModal} isUpload={currentModal === 'upload'}/>
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