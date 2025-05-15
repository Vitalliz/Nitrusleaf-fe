// src/App.js
import React from 'react';
import Header from '@/components/Header/index';
import styles from './historico1.module.css'
import RegisterContent1e from '@/components/historico1/index'
import Footer from '@/components/Footer/index';

function historico1(){
    return(
        <>
        <Header/>
        <div className={styles["divprincipal"]}></div>
        </>
    )
}

export default historico1;
