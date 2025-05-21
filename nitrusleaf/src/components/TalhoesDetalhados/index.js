"use client";
import React, { useState, useEffect, useContext } from 'react';
import styles from './TalhoesDetalhados.module.css';
import { AuthContext } from '@/contexts/AuthContext';  // Usar contexto para propriedade selecionada
import api from '@/services/api';

export default function TalhoesDetalhados() {
  const [openMenu, setOpenMenu] = useState(null);
  const [talhoes, setTalhoes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { selectedProperty } = useContext(AuthContext);

  useEffect(() => {
    if (!selectedProperty) return;

    setLoading(true);
    api.get(`/talhoes?fk_id_propriedade=${selectedProperty.id}`)  // Ajuste sua rota API conforme necessário
      .then(res => {
        setTalhoes(res.data);
      })
      .catch(err => {
        console.error("Erro ao buscar talhões:", err);
        setTalhoes([]);
      })
      .finally(() => setLoading(false));
  }, [selectedProperty]);

  const handleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  if (!selectedProperty) {
    return <p>Por favor, selecione uma propriedade.</p>;
  }

  if (loading) {
    return <p>Carregando talhões...</p>;
  }

  if (talhoes.length === 0) {
    return <p>Nenhum talhão encontrado para a propriedade "{selectedProperty.nome}".</p>;
  }

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
              <th>Diagnósticos</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {talhoes.map((talhao, idx) => (
              <tr key={talhao.id_talhao || idx}>
                <td>{talhao.nome || `Talhão ${idx + 1}`}</td>
                <td>{talhao.pes_analisados || '0/0'}</td> {/* Ajuste conforme dados da API */}
                <td>{talhao.diagnosticos || '-'}</td> {/* Ajuste conforme dados da API */}
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