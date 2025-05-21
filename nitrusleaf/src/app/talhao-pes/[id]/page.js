'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import Footer from '@/components/Footer';
import TalhaoPesContent from '@/components/TalhaoPesContent';
import styles from '../TalhaoPes.module.css';
import api from '@/services/api';

export default function TalhaoPesPage() {
  const { id } = useParams();
  const [talhao, setTalhao] = useState(null);

  useEffect(() => {
    const fetchTalhao = async () => {
      try {
        const response = await api.get(`/talhoes/${id}`); // Ajuste conforme sua API
        setTalhao(response.data);
      } catch (error) {
        console.error('Erro ao carregar talhão:', error);
      }
    };

    fetchTalhao();
  }, [id]);

  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>
              Histórico &gt; Talhões &gt;{' '}
              <strong>{talhao?.nome || `Talhão ${id}`}</strong>
            </h1>
            <button className={styles.editTalhaoBtn} type="button">
              <span>✏️</span> Editar Talhão
            </button>
          </div>
          <div className={styles.line} />
          <TalhaoPesContent talhaoId={id} />
        </main>
      </div>
      <Footer />
    </div>
  );
}