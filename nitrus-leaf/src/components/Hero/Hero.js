// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Diagnóstico de deficiência da sua mexerica em um piscar de olhos!</h1>
      <div className="auth-buttons">
       <button className="auth-button"><a href="/Login" className="links">Entrar</a></button>
       <button className="auth-button-register"><a href="/Cadastro" className="links">Cadastrar-se</a></button>
       <button className="auth-button google"><a href="/GoogleL" className="links">Entrar com o Google</a></button>
      </div>
    </section>
  );
}

export default Hero;