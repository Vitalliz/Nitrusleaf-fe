// src/App.js
import React from 'react';
import './Login.css';
import Header from '../../components/Header/index.js';
import LoginComponent from '../../components/LoginContent/index.js'
import Footer from '../../components/Footer/index.js';

function Login() {
  return (
    <div className="App">
      <Header />
      <div style={{ flex: 1 }}>
      <LoginComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Login;