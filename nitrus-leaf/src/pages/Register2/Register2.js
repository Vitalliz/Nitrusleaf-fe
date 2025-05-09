// src/App.js
import React from 'react';
import Header from '../../components/Header/index.js';
import styles from './Register2.module.css'
import RegisterComponent2 from '../../components/RegisterContent2/index.js'
import Footer from '../../components/Footer/index.js';

function Register2() {
  return (
    <div className="App">
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterComponent2 />
      </div>
      <Footer />
    </div>
  );
}

export default Register2;