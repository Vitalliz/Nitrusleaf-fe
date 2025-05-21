"use client";
import React from "react";
import styles from "./TalhoesTable.module.css";
import Link from "next/link";

export default function TalhoesTable({ talhoes }) {
  if (!talhoes || talhoes.length === 0) {
    return <p>Nenhum talhão encontrado para esta propriedade.</p>;
  }

  return (
    <section className={styles.talhoesBox}>
      <div className={styles.headerRow}>
        <h2>Talhões</h2>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome Talhão</th>
              <th>Pés analisados</th>
              {/* Removida a coluna Data de Criação */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {talhoes.map((talhao) => (
              <tr key={talhao.id_talhao}>
                <td>{talhao.nome}</td>
                <td>{talhao.pes_analisados} / {talhao.total_pes}</td>
                {/* Removido o <td> com data */}
                <td className={styles.arrow}>
                  <Link href={`/talhao-pes/${talhao.id_talhao}`} className={styles.link1}>
                    <div className={styles.link1}>&#8250;</div>
                  </Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
