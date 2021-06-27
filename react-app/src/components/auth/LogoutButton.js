import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logout } from "../../store/session";
import styles from '../../css-modules/NavBar.module.css';
const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout()); 
    history.push('/')
  };

  return <button className={styles.dropDownBtn}onClick={onLogout}>
          <span>Logout</span>
          <i className="fas fa-sign-out-alt" />
        </button>;
};

export default LogoutButton;
