import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import styles from '../../css-modules/AuthForms.module.css';

const LoginForm = ({ setCurrentModal, auth }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setCurrentModal('')
    }
  };

  // Demo Login
  const loginDemo = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
    setCurrentModal('');
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={styles.modalHeader}>
        <h1 className={styles.modalHeaderTxt}>Sign in</h1>
        <button className={styles.registerBtn} onClick={() => setCurrentModal('signup')}>Register</button>
      </div>
        {auth && <p className={styles.authMsg}>{auth.authMsg}</p>}
      <form className={styles.authForm} onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className={styles.authInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className={styles.authInput}
          />
        </div>
        <div className={styles.authBtnContainer}>
          <button className={styles.authBtn} type="submit">Login</button>
          <button  className={styles.authBtn} onClick={loginDemo}>Login as Demo User</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
