// src/App.js
import React from 'react';
import Header from '@/components/Header/index';
import styles from './Register2.module.css'
import RegisterComponent2 from '@/components/RegisterContent2/index'
import Footer from '@/components/Footer/index'

function Register2() {
  return (
    <>
      <Header />
      <div className={styles["divprincipal"]}>
      <RegisterComponent2 />
      </div>
      <Footer />
    </>
  );
}

export default Register2;