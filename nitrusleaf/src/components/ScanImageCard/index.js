"use client";
import React, { useRef } from "react";
import styles from "./ScanImageCard.module.css";
import { useRouter } from "next/navigation";

export default function ScanImageCard() {
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      // Simula envio do arquivo para backend
      // const formData = new FormData();
      // formData.append('file', file);
      // await fetch('/api/upload', { method: 'POST', body: formData });

      // Aqui pode colocar seu código real de upload

      // Após upload, redireciona para página resultado
      router.push("/resultado");
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
      // Aqui pode mostrar mensagem de erro para o usuário
    }
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
