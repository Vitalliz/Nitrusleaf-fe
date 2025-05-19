// src/App.js
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import ListaPes from '@/components/ContentListaPes';
import styles from '@/app/talhao/Talhao.module.css'
import Footer from '@/components/Footer';

export default function Talhao() {
  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <ListaPes />
        </main>
      </div>
      <Footer />
    </div>
  );
}