"use client";
import React, { useState } from 'react';
import styles from './TalhoesDetalhados.module.css';

export default function TalhoesDetalhados() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.searchGroup}>
          <label className={styles.searchLabel}>Pesquisar</label>
          <div className={styles.searchInputWrapper}>
            <input className={styles.searchInput} placeholder="Pesquisar registros" />
            <span className={styles.searchIcon}>&#128269;</span>
          </div>
        </div>
        <button className={styles.addBtn}>+ Adicionar Talhão</button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome Talhão</th>
              <th>Pés analisados</th>
              <th>Data de Criação</th>
              <th>Diagnósticos</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map((item, idx) => (
              <tr key={idx}>
                <td>{`Talhão ${item}`}</td>
                <td>{item === 1 ? '27/32' : item === 2 ? '13/24' : '12/26'}</td>
                <td>13/05/2025</td>
                <td>{item === 1 ? '12 cobre, 15 manganês' : item === 2 ? '6 cobre, 7 manganês' : '5 cobre, 7 manganês'}</td>
                <td><span className={styles.statusActive}>Ativo</span></td>
                <td className={styles.menuTd}>
                  <div className={styles.menuWrapper}>
                    <button className={styles.editBtn} onClick={() => handleMenu(idx)}>
                      Editar <span className={styles.arrowDown}>▼</span>
                    </button>
                    {openMenu === idx && (
                      <div className={styles.dropdownMenu}>
                        <button className={styles.dropdownItem}>Atualizar informações</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button className={styles.pageButton}>Anterior</button>
        <div className={styles.pageNumbers}>
          <button className={`${styles.pageNumber} ${styles.active}`}>1</button>
          <button className={styles.pageNumber}>2</button>
          <button className={styles.pageNumber}>3</button>
        </div>
        <button className={styles.pageButton}>Próximo</button>
      </div>
    </section>
  );
} 