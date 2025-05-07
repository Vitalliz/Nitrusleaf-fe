// src/App.js
import React from 'react';
import Header from '../../components/Header/index.js';
import RegisterComponent from '../../components/RegisterContent/index.js'
import Footer from '../../components/Footer/index.js';

function Login() {
  return (
    <div className="App">
      <Header />
      <div style={{ flex: 1 }}>
      <RegisterComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Login;