'use client'
import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import HistorySummary from '@/components/HistorySummary';
import TalhoesTable from '@/components/TalhoesTable';
import styles from './History.module.css';
import api from '@/services/api';
import { AuthContext } from '@/contexts/AuthContext';
import Select from "react-select";
export default function HistoryPage() {
  const { user, selectedProperty, changeProperty } = useContext(AuthContext);
  const [historyData, setHistoryData] = useState(null);


  const options = user?.propriedades
  ?.filter((prop) => prop.id !== selectedProperty?.id)
  .map((prop) => ({ value: prop.id, label: prop.nome })) || [];

  const selectedOption = selectedProperty
    ? { value: selectedProperty.id, label: selectedProperty.nome }
    : null;
    
  useEffect(() => {
    if (!selectedProperty?.id) {
      setHistoryData(null);
      return;
    }

    async function fetchHistory() {
      try {
        const { data } = await api.get(`/history/${selectedProperty.id}`);
        setHistoryData(data);
      } catch (error) {
        console.error('Erro ao buscar histórico:', error);
        setHistoryData(null);
      }
    }

    fetchHistory();
  }, [selectedProperty]);

  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <div className={styles.titleRow}>
            <h1>Histórico</h1>
            <div style={{ width: 300 }}>
            <Select
              options={options}
              value={selectedOption}
              onChange={(selected) => {
                if (selected) {
                  changeProperty(selected.value);
                }
              }}
              placeholder={selectedProperty ? selectedProperty.nome : "Selecionar Propriedade"}
              isSearchable={false}
              menuPlacement="auto"
            />
          </div>
          </div>

          {historyData ? (
            <>
              <HistorySummary
                talhoesRegistrados={historyData.totals.totalTalhoes}
                totalPes={historyData.totals.totalPes}
                pesDiagnosticados={historyData.totals.pesDiagnosticados}
                pesAnalisados={historyData.totals.pesAnalisados}
              />

              <TalhoesTable talhoes={historyData.talhoes} />
            </>
          ) : (
            <p>Carregando histórico...</p>
          )}
        </main>
      </div>
    </div>
  );
}