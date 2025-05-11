// src/App.js
import React from 'react';
import Header from '../../components/Header/index.js';
import styles from './Dashboard.module.css'
import DashboardContent from '../../components/DashboardContent/index.js'
import Footer from '../../components/Footer/index.js';

function Dashboard() {
  return (
    <div className="App">
      <Header />
      <div className={styles["divprincipal"]}>
      <DashboardContent />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;