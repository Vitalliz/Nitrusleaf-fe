"use client";
import React, { useState } from 'react';
import styles from './TalhaoPesContent.module.css';
import Image from "next/image";
import Link from 'next/link';

export default function TalhoesDetalhados() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  // Dados baseados na imagem que você enviou
  const pes = [
    { nome: "Pé 1", status: "Não Tratado", corStatus: "amarelo", data: "10/11/2024" },
    { nome: "Pé 2", status: "Tratado", corStatus: "roxo", data: "10/11/2024" },
    { nome: "Pé 3", status: "Tratado", corStatus: "roxo", data: "15/11/2024" },
    { nome: "Pé 4", status: "Sem informações", corStatus: "cinza", data: "10/11/2024" },
    { nome: "Pé 5", status: "Sem informações", corStatus: "cinza", data: "10/11/2024" },
  ];

  // Mapeando cor para estilo de bolinha colorida
  const statusColorClass = {
    amarelo: styles.statusYellow,
    roxo: styles.statusPurple,
    cinza: styles.statusGray,
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
        <button className={styles.addBtn}>+ Adicionar Pé</button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome Pé</th>
              <th>Status</th>
              <th>Data de Criação</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            {pes.map((item, idx) => (
              <tr key={idx}>
                <td><strong>{item.nome}</strong></td>
                <td>
                  <span className={`${styles.statusDot} ${statusColorClass[item.corStatus]}`}></span>
                  {item.status}
                </td>
                <td>{item.data}</td>
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

<td className={styles.tdver}>
  <Image 
    src="/images/pcg.svg" 
    className={styles.logoImage} 
    alt="Ícone percentual" 
    width={65} 
    height={40} 
  />
  <Link href="/" className={styles.link1}>
    <div className={styles.arrow}>&#8250;</div>
  </Link>
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