import React from 'react';
import styles from './ScanImageCard.module.css';

export default function ScanImageCard() {
  return (
    <div className={styles.card}>
      <button className={styles.button}>+ Escanear Imagem</button>
      <span className={styles.note}>*Cerifique-se que a folha esteja visível</span>
    </div>
  );
} 