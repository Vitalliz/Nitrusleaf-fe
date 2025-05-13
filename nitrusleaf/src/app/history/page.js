import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HistorySummary from '@/components/HistorySummary';
import TalhoesTable from '@/components/TalhoesTable';
import styles from './History.module.css';

export default function HistoryPage() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>Histórico</h1>
            <select className={styles.selectPropriedade}>
              <option>Propriedade 1</option>
              <option>Propriedade 2</option>
              <option>Propriedade 3</option>
            </select>
          </div>
          <HistorySummary />
          <TalhoesTable />
        </main>
      </div>
      <Footer />
    </div>
  );
} 