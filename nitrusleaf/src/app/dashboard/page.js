// src/App.js
import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import ScanImageCard from '@/components/ScanImageCard';
import DashboardCharts from '@/components/DashboardCharts';

export default function Dashboard() {
  return (
    <div className={styles.pageLayout}>
      <Header2 />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <h1>Início</h1>
          <ScanImageCard />
          <DashboardCharts />
        </main>
      </div>
    </div>
  );
}