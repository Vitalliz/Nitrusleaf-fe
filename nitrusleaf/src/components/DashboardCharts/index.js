"use client";
import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import { Pie, Bar } from "react-chartjs-2";
import styles from "./DashboardCharts.module.css";
import api from "@/services/api";
import { AuthContext } from "@/contexts/AuthContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function DashboardCharts() {
  const { user, selectedProperty, changeProperty } = useContext(AuthContext);

  const [pieData, setPieData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [monthlyBarData, setMonthlyBarData] = useState(null);

  const options = user?.propriedades
    ?.filter((prop) => prop.id !== selectedProperty?.id)
    .map((prop) => ({ value: prop.id, label: prop.nome })) || [];

  const selectedOption = selectedProperty
    ? { value: selectedProperty.id, label: selectedProperty.nome }
    : null;

  useEffect(() => {
    if (selectedProperty?.id) {
      fetchData(selectedProperty.id);
    }
  }, [selectedProperty]);

  const fetchData = async (propertyId) => {
    try {
      const response = await api.get(`/dashboard/${propertyId}`);
      const pieChartData = response.data.pieChartData || [0, 0, 0];
      const barChartData = response.data.barChartData || { labels: [], cobre: [], manganes: [] };
      const monthlyBarChartData = response.data.monthlyBarChartData || { labels: [], cobre: [], manganes: [] };

      setPieData({
        labels: ["Cobre", "Manganês", "Adversos"],
        datasets: [
          {
            data: pieChartData,
            backgroundColor: ["#E88239", "#FFB534", "#888"],
          },
        ],
      });

      setBarData({
        labels: barChartData.labels,
        datasets: [
          { label: "Cobre", data: barChartData.cobre, backgroundColor: "#E88239" },
          { label: "Manganês", data: barChartData.manganes, backgroundColor: "#FFB534" },
        ],
      });

      setMonthlyBarData({
        labels: monthlyBarChartData.labels,
        datasets: [
          { label: "Cobre", data: monthlyBarChartData.cobre, backgroundColor: "#E88239" },
          { label: "Manganês", data: monthlyBarChartData.manganes, backgroundColor: "#FFB534" },
        ],
      });
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      setPieData(null);
      setBarData(null);
      setMonthlyBarData(null);
    }
  };

  const barOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          stepSize: 1,
          // Mostra apenas valores inteiros
          callback: (value) => Number.isInteger(value) ? value : null,
        },
      },
    },
  };

  if (!user || !Array.isArray(user.propriedades) || user.propriedades.length === 0) {
    return <p>Você não possui propriedades cadastradas.</p>;
  }

  return (
    <section>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>Análises Gerais</h2>
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

      <div className={styles.chartsRow}>
        {/* Pie Chart */}
        <div className={styles.card}>
          <h3>Ocorrências totais de deficiências em %</h3>
          {pieData ? <Pie data={pieData} /> : <p>Carregando...</p>}
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendCobre}`} />
              Cobre
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendManganes}`} />
              Manganês
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendColor} ${styles.legendAdversos}`} />
              Adversos
            </div>
          </div>
          <button className={styles.detailBtn}>Detalhar</button>
        </div>

        {/* Bar Chart por Talhão */}
        <div className={styles.card}>
          <h3>Deficiência por Talhão</h3>
          {barData ? <Bar data={barData} options={barOptions} /> : <p>Carregando...</p>}
          <button className={styles.detailBtn}>Detalhar</button>
        </div>

        {/* Bar Chart Mensal */}
        <div className={styles.card}>
          <h3>Evolução das Deficiências (%)</h3>
          {monthlyBarData ? <Bar data={monthlyBarData} options={barOptions} /> : <p>Carregando...</p>}
          <button className={styles.detailBtn}>Detalhar</button>
        </div>
      </div>
    </section>
  );
}