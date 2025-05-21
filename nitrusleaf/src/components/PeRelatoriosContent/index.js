"use client";
import React from 'react';
import Link from 'next/link';
import styles from './PeRelatoriosContent.module.css';

export default function PeRelatoriosContent({ relatorios, peId, talhaoId }) {
  if (!relatorios || relatorios.length === 0) {
    return <p>Nenhum relatório encontrado para este pé.</p>;
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Link href={`/talhao-pes/${talhaoId}`}>
          <button className={styles.voltarBtn} type="button" aria-label="Voltar">
            ← Voltar
          </button>
        </Link>
        <h2 className={styles.tituloH2}>Relatórios do Pé</h2>
        <div className={styles.actionButtons}>
          {/* Você pode adicionar botões editar/apagar geral aqui */}
        </div>
      </header>

      <div className={styles.separator} />

      <div className={styles.miniTitleWrapper}>
        <h3 className={styles.miniTitle}>Relatórios</h3>
        <div className={styles.miniTitleLine} />
      </div>

      <table className={styles.table} role="table" aria-label="Tabela de relatórios">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data de Criação</th>
            <th aria-label="Ver relatório"></th>
          </tr>
        </thead>
        <tbody>
          {relatorios.map((relatorio) => (
            <tr key={relatorio.id_relatorio}>
              <td><strong>{relatorio.observacoes || 'Sem descrição'}</strong></td>
              <td>{new Date(relatorio.data_analise).toLocaleDateString('pt-BR')}</td>
              <td>
                <Link href={`/pe-relatorios/${peId}/relatorio/${relatorio.id_relatorio}`}>
                  <button
                    className={styles.verRelatorioBtn}
                    type="button"
                    aria-label={`Ver relatório ${relatorio.id_relatorio}`}
                  >
                    Ver relatório →
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footerText}>{`Total de relatórios: ${relatorios.length}`}</div>
    </section>
  );
}