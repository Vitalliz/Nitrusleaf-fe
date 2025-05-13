import React from 'react';
import styles from './HistorySummary.module.css';

export default function HistorySummary() {
  return (
    <section className={styles.summaryBox}>
      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Talhões registrados</span>
          <span className={styles.value}>3</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Total de pés</span>
          <span className={styles.value}>82</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Pés Diagnosticados</span>
          <span className={styles.value}>42</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Pés analisados</span>
          <span className={styles.value}>52</span>
        </div>
      </div>
    </section>
  );
} 