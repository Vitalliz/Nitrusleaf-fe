// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Diagnóstico de deficiência da sua mexerica em um piscar de olhos!</h1>
      <div className="auth-buttons">
       <a href="/Login" className="auth-button"><button>Entrar</button></a>
        <button className="auth-button-register">Cadastrar-se</button>
        <button className="auth-button google">Entrar com o Google</button>
      </div>
    </section>
  );
}

export default Hero;