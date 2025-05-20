// src/components/DashboardCharts/index.js
"use client";
import React, { useEffect, useState, useContext } from "react";
import { Pie, Bar } from "react-chartjs-2";
import styles from "./DashboardCharts.module.css";
import api from "@/services/api";
import { AuthContext } from "@/contexts/AuthContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function DashboardCharts() {
  const { user, selectedProperty, changeProperty } = useContext(AuthContext);
  const [pieData, setPieData] = useState(null);
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    if (selectedProperty) {
      fetchData(selectedProperty.id_propriedade);
    }
  }, [selectedProperty]);

  const fetchData = async (propertyId) => {
    try {
      const response = await api.get(`/api/dashboard/${propertyId}`);
      const { pieChartData, barChartData } = response.data;

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
          {
            label: "Cobre",
            data: barChartData.cobre,
            backgroundColor: "#E88239",
          },
          {
            label: "Manganês",
            data: barChartData.manganes,
            backgroundColor: "#FFB534",
          },
        ],
      });
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  return (
    <section>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>Análises Gerais</h2>
        <select 
          className={styles.selectPropriedade} 
          onChange={(e) => changeProperty(e.target.value)} 
          value={selectedProperty?.id_propriedade || ""}
        >
          <option value="" disabled>Selecionar Propriedade</option>
          {Array.isArray(user?.propriedades) && user.propriedades.map((prop) => (
  <option key={prop.id_propriedade} value={prop.id_propriedade}>
    {prop.nome}
  </option>
))}

        </select>
      </div>
      <div className={styles.chartsRow}>
        <div className={styles.card}>
          <h3>Ocorrências totais de deficiências em %</h3>
          {pieData ? <Pie data={pieData} /> : <p>Carregando...</p>}
        </div>

        <div className={styles.card}>
          <h3>Deficiência por Talhão</h3>
          {barData ? <Bar data={barData} /> : <p>Carregando...</p>}
        </div>
      </div>
    </section>
  );
}