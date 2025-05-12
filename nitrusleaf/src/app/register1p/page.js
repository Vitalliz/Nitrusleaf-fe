// src/App.js
import React from 'react';
import Header from '@/components/Header/index';
import styles from './Register1p.module.css'
import RegisterContent1p from '@/components/RegisterContent1p/index'
import Footer from '@/components/Footer/index';

function Register1p() {
  return (
    <>
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterContent1p />
      </div>
      <Footer />
    </>
  );
}

export default Register1p;