"use client";
import React, { useRef, useContext } from "react";
import styles from "./ScanImageCard.module.css";
import { useRouter } from "next/navigation";
import { ScanResultContext } from "@/contexts/ScanResultContext";

export default function ScanImageCard() {
  const fileInputRef = useRef(null);
  const router = useRouter();
  const { setScanResult } = useContext(ScanResultContext);

  const gerarResultadoAleatorio = () => {
    const tipos = ["COBRE", "MANGANÊS", "OUTROS"];
    const escolhido = tipos[Math.floor(Math.random() * tipos.length)];
    let perc = null;
    if (escolhido === "COBRE" || escolhido === "MANGANÊS") {
      perc = Math.floor(Math.random() * 41) + 60; // 60% a 100%
    }
    return { tipo: escolhido, percentual: perc };
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Simula processamento IA e gera resultado
    setTimeout(() => {
      const resultado = gerarResultadoAleatorio();
      setScanResult({
        probabilidadeDeficiencia: resultado.tipo,
        percentual: resultado.percentual,
        relatorioTexto: `Relatório gerado automaticamente com base na imagem enviada. Deficiência detectada: ${resultado.tipo}${resultado.percentual ? ` com ${resultado.percentual}%` : ""}.`,
        status: "tratado",
      });
      router.push("/resultado");
    }, 2000);
  };

  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={handleButtonClick}>
        + Escanear Imagem
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <span className={styles.note}>*Certifique-se que a folha esteja visível</span>
    </div>
  );
}