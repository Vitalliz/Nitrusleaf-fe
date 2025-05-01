import React from 'react';
import { Link } from 'react-router-dom'; // 👈 importa Link
import './HomepageComponent.css';

function HomepageComponent() {
  return (
    <section className="hero">
      <h1>Diagnóstico de deficiência da sua mexerica em um piscar de olhos!</h1>
      <div className="auth-buttons">
        <Link to="/login" className="links">
          <button className="auth-button">Entrar</button>
        </Link>
        <Link to="/Cadastro" className="links">
          <button className="auth-button-register">Cadastrar-se</button>
        </Link>
        <Link to="/GoogleL" className="links">
          <button className="auth-button google">Entrar com o Google</button>
        </Link>
      </div>
    </section>
  );
}

export default HomepageComponent;
