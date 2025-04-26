// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ flex: 1 }}>
      <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;