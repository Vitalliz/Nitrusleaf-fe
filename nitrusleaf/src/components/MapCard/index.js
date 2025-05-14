"use client";
import React from 'react';
import styles from './MapCard.module.css';
import Link from 'next/link';

export default function MapCard() {
  return (
    <section className={styles.talhoesBox}>
      <div className={styles.headerRow}>
        <h2>Talhões</h2>
        <Link href="/talhoes-detalhes">
          <button className={styles.detailBtn}>
            <span style={{marginRight: 8}}>&#8594;</span> Mais detalhes
          </button>
        </Link>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome Talhão</th>
              <th>Pés analisados</th>
              <th>Data de Criação</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map((item, idx) => (
              <tr key={idx}>
                <td>{`Talhão ${item}`}</td>
                <td>{item === 1 ? '27/32' : item === 2 ? '13/24' : '12/26'}</td>
                <td>13/05/2025</td>
                <td className={styles.arrow}>&#8250;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
} 