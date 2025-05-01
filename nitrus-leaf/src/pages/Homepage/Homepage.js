// src/App.js
import React from 'react';
import './Homepage.css';
import Header from '../../components/Header/Header.js';
import HomepageComponent from '../../components/Homepage/HomepageComponent.js';
import Footer from '../../components/Footer/Footer.js';

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