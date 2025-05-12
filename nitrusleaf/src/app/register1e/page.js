// src/App.js
import React from 'react';
import Header from '@/components/Header/index';
import styles from './Register1e.module.css'
import RegisterContent1e from '@/components/RegisterContent1e/index'
import Footer from '@/components/Footer/index';

function Register1e() {
  return (
    <>
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterContent1e />
      </div>
      <Footer />
    </>
  );
}

export default Register1e;