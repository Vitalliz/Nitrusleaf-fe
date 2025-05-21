"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Header2 from "@/components/Header2";
import styles from "../PeRelatorio.module.css";
import api from "@/services/api";
import PeRelatorioContent from "@/components/PeRelatorioContent";

export default function PeRelatorioPage() {
  const { peId, relatorioId } = useParams();
  const [pe, setPe] = useState(null);
  const [relatorio, setRelatorio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!peId || !relatorioId) return;

    async function fetchData() {
      try {
        const [peRes, relatorioRes] = await Promise.all([
          api.get(`/pes/${peId}`),
          api.get(`/relatorios/${relatorioId}`)
        ]);
        setPe(peRes.data);
        setRelatorio(relatorioRes.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [peId, relatorioId]);

  if (loading) return <p>Carregando relatório...</p>;
  if (!pe || !relatorio) return <p>Dados do pé ou do relatório não disponíveis.</p>;

  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
          <h1>
            Histórico &gt; Talhões &gt; <strong>{pe?.nome || "Talhão desconhecido"}</strong>
          </h1>
          <button className={styles.editTalhaoBtn} type="button">
            <span>✏️</span> Editar Talhão
          </button>
           </div>
          <div className={styles.line} />
          <PeRelatorioContent pe={pe} relatorio={relatorio} />
        </main>
      </div>
    </div>
  );
}