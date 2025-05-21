import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import styles from './Resultado.module.css';
import ResultadoContent from '@/components/ResultadoContent/index'; // novo componente para o detalhe do pé

export default function Resultado() {
  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>
              Resultados
            </h1>
          </div>
          <div className={styles.line} />
          <ResultadoContent />
        </main>
      </div>
    </div>
  );
}
