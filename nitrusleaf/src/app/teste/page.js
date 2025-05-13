// src/App.js
import React from 'react';
import Header2 from '@/components/Header2/index';
import styles from './teste.module.css'
import TesteContent from '@/components/TesteContent/index'
import Sidebar from '@/components/Sidebar/index'

function Teste() {
  return (
    <>
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <TesteContent />
        </main>
      </div>
    </div>
  </>
  );
}

export default Teste;