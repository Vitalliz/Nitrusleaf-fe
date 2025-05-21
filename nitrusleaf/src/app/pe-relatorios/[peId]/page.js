"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import PeRelatoriosContent from '@/components/PeRelatoriosContent';
import styles from '../PeRelatorios.module.css';
import api from '@/services/api';

export default function PeRelatorios() {
  const { peId } = useParams();  // Ajustado para 'peId'
  const [relatorios, setRelatorios] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!peId) return;
    setLoading(true);

    api.get(`/pes/${peId}/relatorios`)
      .then(res => {
        setRelatorios(res.data);
      })
      .catch(err => {
        console.error('Erro ao buscar relatórios:', err);
        setRelatorios([]);
      })
      .finally(() => setLoading(false));
  }, [peId]);

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
          {loading ? <p>Carregando relatórios...</p> : <PeRelatoriosContent relatorios={relatorios} peId={peId} />}
        </main>
      </div>
    </div>
  );
}
