import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import styles from '../../css-modules/AuthForms.module.css';

const SignUpForm = ({setCurrentModal}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([])
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const errorStyles = {
    'color' : 'red',
    'marginLeft' : '5px',
  }

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) setErrors(['Passwords do not match'])

    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
      // TODO: add errors for signup form
      setCurrentModal('');
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={styles.modalHeader}>
        <h1>Register</h1>
        <button className={styles.registerBtn} onClick={() => setCurrentModal('login')}>Login</button>
      </div>
      {errors?.map(error => <strong style={errorStyles}>{error}</strong>)}
      <form className={styles.authForm} onSubmit={onSignUp}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            className={styles.authInput}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            className={styles.authInput}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            className={styles.authInput}
          ></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className={styles.authInput}
          ></input>
        </div>
        <button className={styles.authBtn} type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
