// src/App.js
import React from 'react';
import Header from '@/components/Header/index';
import styles from './Register2e.module.css'
import RegisterContent2e from '@/components/RegisterContent2e/index'
import Footer from '@/components/Footer/index';

function Register2e() {
  return (
    <>
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterContent2e />
      </div>
      <Footer />
    </>
  );
}

export default Register2e;