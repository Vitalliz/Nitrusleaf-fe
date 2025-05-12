// src/App.js
import React from 'react';
import Header from '@/components/Header/index';
import styles from './Register.module.css'
import RegisterContent1 from '@/components/RegisterContent1/index'
import Footer from '@/components/Footer/index';

function Register1() {
  return (
    <>
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterContent1 />
      </div>
      <Footer />
    </>
  );
}

export default Register1;