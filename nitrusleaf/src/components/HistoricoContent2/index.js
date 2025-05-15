"use client";
import React from "react";
import styles from "./ResumoTalhoes.module.css";

const HistoricoContent2 = ({ dados }) => {
  <TabelaResumoTalhoes
  talhoes={[
    { nome: "Talhão 1", pesAnalisados: 27, totalPes: 32, dataCriacao: "10/11/2024" },
    { nome: "Talhão 2", pesAnalisados: 13, totalPes: 24, dataCriacao: "10/11/2024" },
    { nome: "Talhão 3", pesAnalisados: 12, totalPes: 26, dataCriacao: "10/11/2024" },
  ]}
/>
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.label}>Talhões registrados</p>
        <p className={styles.valor}>{dados.talhoes}</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Total de pés</p>
        <p className={styles.valor}>{dados.totalPes}</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Pés Diagnosticados</p>
        <p className={styles.valor}>{dados.diagnosticados}</p>
      </div>
      <div className={styles.item}>
        <p className={styles.label}>Pés analisados</p>
        <p className={styles.valor}>{dados.analisados}</p>
      </div>
    </div>
  );
};

export default HistoricoContent2;
