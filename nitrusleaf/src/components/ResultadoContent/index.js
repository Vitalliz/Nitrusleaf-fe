"use client";
import React, { useState } from "react";
import styles from "./ResultadoContent.module.css";

export default function ResultadoContent() {
  const [status, setStatus] = useState("");
  const [talhao, setTalhao] = useState("");
  const [pe, setPe] = useState("");
  const relatorioTexto =
    "Lorem ipsum dolor sit amet consectetur. Lectus in magna aliquam dictum pellentesque tellus rutrum. Diam amet erat id tortor ullamcorper quis suspendisse quis.";

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Resultados do Escaneamento</h2>
      <button className={styles.scanBtn} type="button">
        VER DADOS DO SCAN
      </button>

      <div className={styles.infoColumn}>
        <div className={styles.infoItem}>
          <strong>Probabilidade de Deficiência:</strong>
          <span className={styles.badgeCobre}>COBRE</span>
        </div>

        <div className={styles.infoItem}>
          <strong>Porcentagem:</strong>
          <span className={styles.percentual}>
            92%
            <span className={styles.percentCircle}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 36 36"
                className={styles.svgCircle}
              >
                <path
                  className={styles.circleBackground}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#ddd"
                  strokeWidth="3"
                />
                <path
                  className={styles.circleProgress}
                  strokeDasharray="92 100"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#d32f2f"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className={styles.percentSymbol}>%</span>
            </span>
          </span>
        </div>

        <div className={styles.infoItem}>
          <strong>Status:</strong>
          <select
            className={styles.selectInput}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="tratado">Tratado</option>
            <option value="nao-tratado">Não Tratado</option>
            <option value="sem-informacoes">Sem Informações</option>
          </select>
        </div>
      </div>

      <div className={styles.locationWrapper}>
    <strong className={styles.locationTitle}>Localização:</strong>

      <div className={styles.locationColumn}>
        <div className={styles.locationItem}>
          <strong>Talhão:</strong>
          <select
            className={styles.selectInput}
            value={talhao}
            onChange={(e) => setTalhao(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="talhao1">Talhão 1</option>
            <option value="talhao2">Talhão 2</option>
            <option value="talhao3">Talhão 3</option>
          </select>
        </div>

        <div className={styles.locationItem}>
          <strong>Pé:</strong>
          <select
            className={styles.selectInput}
            value={pe}
            onChange={(e) => setPe(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="pe1">Pé 1</option>
            <option value="pe2">Pé 2</option>
            <option value="pe3">Pé 3</option>
          </select>
        </div>
      </div>
      </div>

      <div className={styles.relatorioSection}>
        <strong>Relatório:</strong>
        <textarea
          className={styles.textarea}
          readOnly
          value={relatorioTexto}
          rows={4}
        />
      </div>
    </section>
  );
}
