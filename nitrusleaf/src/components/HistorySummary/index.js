import React from "react";
import styles from "./HistorySummary.module.css";

export default function HistorySummary({
  talhoesRegistrados,
  totalPes,
  pesDiagnosticados,
  pesAnalisados,
}) {
  return (
    <section className={styles.summaryBox}>
      <div className={styles.summaryGrid}>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Talhões registrados</span>
          <span className={styles.value}>{talhoesRegistrados ?? 0}</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Total de pés</span>
          <span className={styles.value}>{totalPes ?? 0}</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Pés Diagnosticados</span>
          <span className={styles.value}>{pesDiagnosticados ?? 0}</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Pés analisados</span>
          <span className={styles.value}>{pesAnalisados ?? 0}</span>
        </div>
      </div>
    </section>
  );
}