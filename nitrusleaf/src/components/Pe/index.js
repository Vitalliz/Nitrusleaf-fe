"use client";

import React from "react";
import styles from "./Pe.module.css";
import { ChevronRight, ArrowLeft, Trash2, Pencil } from "lucide-react";

const Pe = () => {
  const dados = [
    { descricao: "Primeiro relatório", data: "10/11/2024" },
    { descricao: "Influência Externa", data: "22/12/2024" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={`${styles.botao} ${styles.voltar}`}> <ArrowLeft size={18} /> Voltar </button>
        <h1 className={styles.titulo}>Pé 2</h1>
        <div className={styles.acoes}>
          <button className={`${styles.botao} ${styles.editar}`}> <Pencil size={18} /> Editar </button>
          <button className={`${styles.botao} ${styles.apagar}`}> <Trash2 size={18} /> Apagar </button>
        </div>
      </div>

      <hr className={styles.divisor} />

      <h2 className={styles.subtitulo}>Relatórios</h2>

      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data de Criação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className={styles.descricao}>{item.descricao}</td>
              <td>{item.data}</td>
              <td>
                <div className={styles.acaoRelatorio}>
                  Ver relatório <ChevronRight size={16} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.paginacao}>1-1</div>
    </div>
  );
};

export default Pe;
