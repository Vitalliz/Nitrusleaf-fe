import React from 'react';
import styles from './DashboardCharts.module.css';

export default function DashboardCharts() {
  return (
    <section>
      <div className={styles.titleRow}>
        <h2 className={styles.title}>Análises Gerais</h2>
        <select className={styles.selectPropriedade}>
          <option>Propriedade 1</option>
          <option>Propriedade 2</option>
          <option>Propriedade 3</option>
        </select>
      </div>
      <div className={styles.chartsRow}>
        <div className={styles.card}>
          <h3>Ocorrências totais de deficiências em %</h3>
          <img src="/images/pie-chart.png" alt="Gráfico de pizza" className={styles.chartImg}/>
          <div className={styles.legend}>
            <span style={{color:'#E88239'}}>Cobre</span> | 
            <span style={{color:'#FFB534'}}>Manganês</span> | 
            <span style={{color:'#888'}}>Adversos</span>
          </div>
          <div className={styles.info}>56/87 Pés<br/>Total de pés analisados</div>
          <button className={styles.detailBtn}>Detalhar</button>
        </div>
        <div className={styles.card}>
          <h3>Deficiência por Talhão</h3>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <select className={styles.selectBox}>
              <option>Jan - 2024</option>
              <option>Fev - 2024</option>
              <option>Mar - 2024</option>
            </select>
            <img src="/images/bar-chart.png" alt="Gráfico de barras" className={styles.barChartImg}/>
            <div className={styles.legendBarBottom}>
              <span style={{color:'#E88239'}}>Cobre</span>
              <span style={{color:'#FFB534'}}>Manganês</span>
            </div>
            <button className={styles.detailBtn}>Detalhar</button>
          </div>
        </div>
        <div className={styles.card}></div>
      </div>
    </section>
  );
} 