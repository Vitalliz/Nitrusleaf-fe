import React from 'react';
import styles from './MapContent.module.css';

export default function MapContent() {
  return (
    <section className={styles.summaryBox}>
      <div className={styles.summaryGrid}>
      <div className={styles.titleRow}>
            <select className={styles.selectPropriedade}>
              <option>Mapa Imagem de Satélite</option>
              <option>Propriedade 2</option>
              <option>Propriedade 3</option>
            </select>
          </div>
      </div>
      <div className={styles.line} />
      <div className={styles.container}>
      <div className={styles.mapContent}>
        {/* Mapa do Google ou imagem */}
        <iframe
          className={styles.mapFrame}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1233087014013!2d-47.85917012369797!3d-24.643246361001667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dedd2e0f9705d5%3A0x1dcfb2466a02b8f!2sRod.%20Ivo%20Zanella%2C%20Pariquera-A%C3%A7u%20-%20SP%2C%2011930-000!5e0!3m2!1spt-BR!2sbr!4v1715620000000!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          title="Mapa Fazenda Rocha"
        ></iframe>

        {/* Informações ao lado */}
        <div className={styles.infoPanel}>
          <h3>Mapa de Satélite</h3>
          <p><strong>Região:</strong> Vale do Ribeira</p>
          <p><strong>Endereço:</strong> Rod. Ivo Zanella, Pariquera-Açu - SP</p>
          <p><strong>CEP:</strong> 11930-000</p>

          <div className={styles.dateBlock}>
            <label htmlFor="mapDate"><strong>Data</strong></label>
            <select id="mapDate" className={styles.dateSelect}>
              <option value="2024-05-25">25 de Maio de 2024 (25/05/2024)</option>
              <option value="2024-05-24">24 de Maio de 2024 (24/05/2024)</option>
              {/* Outras datas... */}
            </select>
          </div>

          <button className={styles.expandBtn} disabled>
            Expandir ⤢
          </button>
        </div>
      </div>
    </div>
    </section>
  );
} 