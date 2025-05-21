'use client';

import React, { useState, useContext } from "react";
import styles from "./LoginContent.module.css";
import Link from 'next/link';
import { AuthContext } from "@/contexts/AuthContext";

export default function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      await handleLogin(email, password);
      // Navegação e estado são gerenciados no handleLogin
    } catch (error) {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <main className={styles["main"]}>
      <div className={styles["title"]}>
        <div>
          <h1 className={styles["h11"]}>Bem-vindo!</h1>
          <h1 className={`${styles["h12"]} ${styles['h11']}`}>Entre na sua conta</h1>
        </div>
        <br />
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles["box"]}
          />

          <br />
          <label>Senha:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles["box"]}
          />

          {error && <p className={styles["error"]}>{error}</p>}
          <br />
          <button type="submit" className={styles["auth-button"]}>Entrar</button>
        </form>
        <div className={styles["sideButtons"]}>
          <div className={styles["p1"]}>
            Não possui uma conta? <Link href="/registerb">Fazer cadastro</Link>
          </div>
        </div>
      </div>
    </main>
  );
}