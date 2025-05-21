"use client";
import React from "react";
import styles from "./PeRelatoriosContent.module.css";
import Link from 'next/link';

export default function PeRelatoriosContent() {
  const relatorios = [
    { descricao: "Primeiro relatório", data: "10/11/2024" },
    { descricao: "Influência Externa", data: "22/12/2024" },
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Link href='talhao-pes' className={styles.link1}>
        <button className={styles.voltarBtn} type="button" aria-label="Voltar">
          ← Voltar
        </button>
        </Link>
        <h2 className={styles.tituloH2}>Pé 2</h2>
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

      {/* Mini título "Relatórios" com linha laranja */}
      <div className={styles.miniTitleWrapper}>
        <h3 className={styles.miniTitle}>Relatórios</h3>
        <div className={styles.miniTitleLine} />
      </div>

      <table className={styles.table} role="table" aria-label="Tabela de relatórios do pé 2">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data de Criação</th>
            <th aria-label="Ver relatório"></th>
          </tr>
        </thead>
        <tbody>
          {relatorios.map((relatorio, index) => (
            <tr key={index}>
              <td><strong>{relatorio.descricao}</strong></td>
              <td>{relatorio.data}</td>
              <td>
                <button
                  className={styles.verRelatorioBtn}
                  type="button"
                  aria-label={`Ver relatório ${relatorio.descricao}`}
                >
                  Ver relatório →
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footerText}>1-1</div>
    </section>
  );
}