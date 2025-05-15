import React from "react";
import styles from "@/components/Dados/Dados.module.css";


function Dados() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.item}>
            <span className={styles.label}>Talhões registrados</span>
            <span className={styles.value}>3</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Total de pés</span>
            <span className={styles.value}>82</span>
          </div>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.row}>
          <div className={styles.item}>
            <span className={styles.label}>Pés Diagnosticados</span>
            <span className={styles.value}>42</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Pés analisados</span>
            <span className={styles.value}>52</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dados;