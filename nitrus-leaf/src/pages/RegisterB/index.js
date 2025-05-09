// src/App.js
import React from 'react';
import Header from '../../components/Header/index.js';
import styles from './RegisterB.module.css'
import RegisterContentB from '../../components/RegisterContentB/index.js'
import Footer from '../../components/Footer/index.js';

function RegisterB() {
  return (
    <div className="App">
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterContentB />
      </div>
      <Footer />
    </div>
  );
}

export default RegisterB;