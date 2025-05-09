// src/App.js
import React from 'react';
import styles from './Login.module.css';
import Header from '../../components/Header/index.js';
import LoginComponent from '../../components/LoginContent/index.js'
import Footer from '../../components/Footer/index.js';

function Login() {
  return (
    <div className="App">
      <Header />
      <div className={styles["divprincipallogin"]}>
      <LoginComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Login;