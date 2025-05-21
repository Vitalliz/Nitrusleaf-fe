"use client";
import React from "react";
import styles from "./PeRelatorioContent.module.css";
import Link from "next/link";

export default function PeRelatorioContent({ pe, relatorio }) {
  if (!pe || !relatorio) {
    return <p>Dados do pé ou do relatório não disponíveis.</p>;
  }

  // Exemplo de mapeamento para probabilidade (ajuste conforme seus dados)
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

  const percentual = relatorio.percentual || 0; // Ajuste para receber real

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Link href="/talhao-pes" className={styles.link1}>
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

      {/* Linha com probabilidade, status, botão localização e percentual */}
      <div className={styles.infoRow}>
        <div className={styles.infoLeftColumn}>
          <div className={styles.infoItem}>
            <strong>Probabilidade de Deficiência:</strong>{" "}
            <span className={styles.badgeCobre}>{probabilidadeDeficiencia}</span>
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
          <span className={styles.percentNumber}>{percentual}%</span>
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
                strokeDasharray={`${(percentual / 100) * 100} 100`}
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

      {/* Header do relatório */}
      <div className={styles.relatorioHeader}>
        <strong>{relatorio.titulo || "Relatório"}</strong>
        <span className={styles.dataRelatorio}>
          Data: {new Date(relatorio.data_analise).toLocaleDateString("pt-BR")}
        </span>
      </div>

      {/* Texto do relatório */}
      <div className={styles.relatorioTexto}>{relatorio.observacoes}</div>
    </section>
  );
}