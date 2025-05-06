import React, { useState } from "react";
import "./LoginComponent.css";
import { Link } from 'react-router-dom'; // 👈 importa Link

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    // Simula login (substituir por API real)
    if (email === "admin@example.com" && password === "123456") {
      alert("Login bem-sucedido!");
    } else {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <main>
      <div className="title">
        <h1>Bem-vindo!</h1>
        <h1 className="h12">Entre na sua conta</h1>
      
        <br/>
        <form onSubmit={handleSubmit} className="login-form">

          <label>Email:</label>
          <br/>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="box"/>

          <br/>
          <label>Senha:</label>
          <br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="box"/>

          {error && <p className="error">{error}</p>}
          <br/>
          <button type="submit" className="auth-button">Entrar</button>
        </form>
        <Link to="/GoogleL" className="links">
          <button className="auth-button-google">Entrar com o Google</button>
        </Link>
        <div className="sideButtons">
        <Link to="/senha" className="">
          <p>Esqueci a senha</p>
        </Link>
        <p className="p1">Não possui uma conta?<Link>Fazer cadastro</Link></p>
        </div>
        </div>
    </main>
  );
}