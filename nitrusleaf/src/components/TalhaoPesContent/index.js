"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './TalhaoPesContent.module.css';
import Image from "next/image";
import Link from 'next/link';
import api from "@/services/api";

export default function TalhaoPesContent() {
  const { id } = useParams(); // Pega o id do talhão da URL
  const [pes, setPes] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    if (!id) return;

    const fetchPes = async () => {
      try {
        const response = await api.get(`/talhoes/${id}/pes`);
        setPes(response.data);
      } catch (error) {
        console.error("Erro ao buscar pés:", error);
      }
    };

    fetchPes();
  }, [id]);

  const handleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const statusColorClass = {
    amarelo: styles.statusYellow,
    roxo: styles.statusPurple,
    cinza: styles.statusGray,
  };

  // Paginação
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(pes.length / itemsPerPage);

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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            {currentItems.map((item, idx) => (
              <tr key={idx}>
                <td><strong>{item.nome}</strong></td>
                <td>
                  <span className={`${styles.statusDot} ${statusColorClass[item.corStatus] || ''}`}></span>
                  {item.status}
                </td>
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
                  <Link href={`/pe-relatorios/${item.id}`} className={styles.link1}>
                    <div className={styles.arrow}>&#8250;</div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        <div className={styles.pageNumbers}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.active : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>
    </section>
  );
}