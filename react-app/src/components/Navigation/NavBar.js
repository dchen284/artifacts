import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpModal from '../auth/SignUpModal';
import UploadListingModal from '../UploadListing/UploadListingModal'
// import LoginPromptModal from './LoginPromptModal';
import ProfileButton from './ProfileButton'
import SearchBar from './SearchBar';
import styles from '../../css-modules/NavBar.module.css'
import logo from '../../images/logo2.png'
import { getCartItems } from '../../store/shopping_cart';

const NavBar = () => {

  const [currentModal , setCurrentModal] = useState('');
  const [authMsg, setAuthMsg] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const shopping_cart = useSelector(state => state.shopping_cart);
  const cartItems = Object.values(shopping_cart);

  useEffect(() => {
    if (user) {
      dispatch(getCartItems(user.id))
    }
  }, [dispatch, user])

  const checkForUser = e => {
    if(user){
      history.push('/shopping-cart')
    } else {
      setAuthMsg('Please login to access shopping cart')
      setCurrentModal('login')
    }
  }

  return (
    <nav>
      <ul className={styles.navItems}>
        <li className={styles.leftMenu}>
          <Link to="/" exact="true" activeclassname="active">
            <img alt="logo" className={styles.logo} src={logo} />
          </Link>
          <Link to="/category/Prehistoric" exact="true" activeclassname="active">
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
            {/* <LoginPromptModal setCurrentModal={setCurrentModal} isLoginPrompt={currentModal === 'login-prompt'}/>  */}
            <LoginFormModal setCurrentModal={setCurrentModal} isLogin={currentModal === 'login'} auth={{authMsg, setAuthMsg}}/>
            <SignUpModal setCurrentModal={setCurrentModal} isSignup={currentModal === 'signup'}/>
          </>
          }

          <button onClick={checkForUser} className={styles.shoppingCart}>
            <i className="fas fa-shopping-cart fa-lg" />
            {user ? <div>:{cartItems.length}</div> : null}
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;