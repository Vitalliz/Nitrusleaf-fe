import React from 'react';
import styles from './ScanImageCard.module.css';
import Link from 'next/link'

export default function ScanImageCard() {
  return (
    <div className={styles.card}>
      <Link href="/resultado">
      <button className={styles.button}>+ Escanear Imagem</button>
      </Link>
      <span className={styles.note}>*Cerifique-se que a folha esteja visível</span>
    </div>
  );
} 