// src/App.js
import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScanImageCard from '@/components/ScanImageCard';
import DashboardCharts from '@/components/DashboardCharts';

export default function Dashboard() {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <div className={styles.contentArea}>
        <Sidebar />
        <main className={styles.mainContent}>
          <h1>Início</h1>
          <ScanImageCard />
          <DashboardCharts />
        </main>
      </div>
      <Footer />
    </div>
  );
}