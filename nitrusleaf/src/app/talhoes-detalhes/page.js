import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import TalhoesDetalhados from '@/components/TalhoesDetalhados';
import styles from './TalhoesDetalhes.module.css';

export default function TalhoesDetalhesPage() {
  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>Talhões</h1>
            <select className={styles.selectPropriedade}>
              <option>Propriedade 1</option>
              <option>Propriedade 2</option>
              <option>Propriedade 3</option>
            </select>
          </div>
          <TalhoesDetalhados />
        </main>
      </div>
    </div>
  );
} 