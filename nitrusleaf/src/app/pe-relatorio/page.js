import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import styles from './PeRelatorio.module.css';
import PeRelatorioContent from '@/components/PeRelatorioContent/index'; // novo componente para o detalhe do pé

export default function PeRelatorio() {
  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>
              Histórico &gt; Talhões &gt; <strong>Talhão 1</strong>
            </h1>
            <button className={styles.editTalhaoBtn} type="button">
              <span>✏️</span> Editar Talhão
            </button>
          </div>
          <div className={styles.line} />
          <PeRelatorioContent />
        </main>
      </div>
    </div>
  );
}
