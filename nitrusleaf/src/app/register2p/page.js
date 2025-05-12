// src/App.js
import React from 'react';
import Header from '@/components/Header/index';
import styles from './Register2p.module.css'
import RegisterComponent2e from '@/components/RegisterContent2p/index'
import Footer from '@/components/Footer/index'

function Register2e() {
  return (
    <>
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterComponent2e />
      </div>
      <Footer />
    </>
  );
}

export default Register2e;