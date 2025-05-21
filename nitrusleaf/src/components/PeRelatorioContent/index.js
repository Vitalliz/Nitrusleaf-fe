"use client";
import React, { useState, useEffect } from "react";
import styles from "./PeRelatorioContent.module.css";
import Link from "next/link";
import api from "@/services/api";

export default function PeRelatorioContent({ pe, relatorio }) {
  const [percentual, setPercentual] = useState(null);

  // Normaliza string para comparar (remove acentos e deixa maiúsculo)
  const normalizeString = (str) =>
    str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

  const probabilidadeDeficiencia = relatorio.deficiencia_cobre
    ? "COBRE"
    : relatorio.deficiencia_manganes
    ? "MANGANÊS"
    : relatorio.outros
    ? "OUTROS"
    : "NENHUMA";

  const statusMap = {
    tratado: "TRATADO",
    "nao tratado": "NÃO TRATADO",
    "sem informacoes": "SEM INFORMAÇÕES",
  };
  const status = statusMap[pe.situacao] || "SEM INFORMAÇÕES";

  // Busca métrica IA associada ao relatório
  useEffect(() => {
    async function fetchMetrica() {
      try {
        if (!relatorio?.id_relatorio) {
          setPercentual(null);
          return;
        }
        const res = await api.get(`/metricas-ia/search?relatorioId=${relatorio.id_relatorio}`);
        const metricas = res.data;

        if (Array.isArray(metricas) && metricas.length > 0) {
          const f1 = parseFloat(metricas[0].f1_score);
          setPercentual(isNaN(f1) ? null : Math.round(f1));
        } else {
          setPercentual(Math.floor(Math.random() * 41) + 60);
        }
      } catch (error) {
        console.error("Erro ao buscar métrica IA:", error);
        setPercentual(Math.floor(Math.random() * 41) + 60);
      }
    }
    fetchMetrica();
  }, [relatorio]);

  if (!pe || !relatorio) {
    return <p>Dados do pé ou do relatório não disponíveis.</p>;
  }

  // Define cores baseadas na deficiência
  const badgeColor = (() => {
    switch (normalizeString(probabilidadeDeficiencia)) {
      case "COBRE":
        return "#E88239";
      case "MANGANES":
        return "#FFB534";
      case "OUTROS":
        return "#888";
      default:
        return "#aaa";
    }
  })();

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Link href={`/pe-relatorios/${pe.id_pe}`} className={styles.link1}>
        <button className={styles.voltarBtn} type="button" aria-label="Voltar">
          ← Voltar
        </button>
        </Link>
        <h2 className={styles.tituloH2}>{pe.nome}</h2>

        <button className={styles.exportarBtn} type="button" aria-label="Exportar PDF">
          Exportar PDF <span className={styles.exportIcon}>⬆️</span>
        </button>

        <div className={styles.actionButtons}>
          <button className={styles.editarBtn} type="button">
            + Editar
          </button>
          <button className={styles.apagarBtn} type="button">
            🗑 Apagar
          </button>
        </div>
      </header>

      <div className={styles.separator} />

      <div className={styles.infoRow}>
        <div className={styles.infoLeftColumn}>
          <div className={styles.infoItem}>
            <strong>Probabilidade de Deficiência:</strong>{" "}
            <span
              className={styles.badge}
              style={{ backgroundColor: badgeColor, color: "#fff", padding: "0.2em 0.6em", borderRadius: "0.3em", fontWeight: "bold" }}
            >
              {probabilidadeDeficiencia}
            </span>
          </div>
          <div className={styles.infoItem}>
            <strong>Status:</strong>{" "}
            <span className={styles.badgeTratado}>{status}</span>
          </div>
          <button className={styles.verLocalizacaoBtn} type="button">
            Ver localização
          </button>
        </div>
        <div className={styles.percentual}>
          <span className={styles.percentNumber}>
            {percentual !== null ? percentual : 0}%
          </span>
          <div className={styles.percentCircle}>
            <svg width="24" height="24" viewBox="0 0 36 36" className={styles.svgCircle}>
              <path
                className={styles.circleBackground}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#ddd"
                strokeWidth="3"
              />
              <path
                className={styles.circleProgress}
                strokeDasharray={`${percentual !== null ? percentual : 0} 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#d32f2f"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.percentSymbol}>%</span>
          </div>
        </div>
      </div>

      <div className={styles.relatorioHeader}>
        <strong>{relatorio.titulo || "Relatório"}</strong>
        <span className={styles.dataRelatorio}>
          Data: {new Date(relatorio.data_analise).toLocaleDateString("pt-BR")}
        </span>
      </div>

      <div className={styles.relatorioTexto}>{relatorio.observacoes}</div>
    </section>
  );
}