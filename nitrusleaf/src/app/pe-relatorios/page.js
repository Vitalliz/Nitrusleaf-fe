import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import TalhaoPesContent from '@/components/TalhaoPesContent/index';
import styles from './PeRelatorios.module.css';

export default function PeRelatorios() {
  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>Histórico &gt; Talhões &gt; Talhão 1</h1>
            <select className={styles.selectPropriedade}>
              <option>Propriedade 1</option>
              <option>Propriedade 2</option>
              <option>Propriedade 3</option>
            </select>
          </div>
          <div className={styles.line} />
          <TalhaoPesContent />
        </main>
      </div>
    </div>
  );
} 