// src/App.js
import React from 'react';
import './Homepage.css';
import Header from '../../components/Header/index.js';
import HomepageComponent from '../../components/HomepageContent/index.js';
import Footer from '../../components/Footer/index.js';

function Homepage() {
  return (
    <div className="App">
      <Header />
      <div style={{ flex: 1 }}>
      <HomepageComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;