// src/App.js
import React from 'react';
import Header from '../../components/Header/index.js';
import styles from './Register.module.css'
import RegisterComponent1 from '../../components/RegisterContent1/index.js'
import Footer from '../../components/Footer/index.js';

function Register1() {
  return (
    <div className="App">
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterComponent1 />
      </div>
      <Footer />
    </div>
  );
}

export default Register1;