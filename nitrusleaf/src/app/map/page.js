import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapContent from '@/components/MapContent/index';
import styles from './Map.module.css';

export default function HistoryPage() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>Mapas</h1>
            <select className={styles.selectPropriedade}>
              <option>Propriedade 1</option>
              <option>Propriedade 2</option>
              <option>Propriedade 3</option>
            </select>
          </div>
          <MapContent />
        </main>
      </div>
      <Footer />
    </div>
  );
} 