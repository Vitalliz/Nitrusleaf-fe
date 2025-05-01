// src/App.js
import React from 'react';
import './Login.css';
import Header from '../../components/Header/Header.js';
import LoginComponent from '../../components/Login/LoginComponent.js'
import Footer from '../../components/Footer/Footer.js';

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