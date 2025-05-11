// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 NitrusLeaf</p>
      <p>Contato: <a href="mailto:contato@nitrusleaf.net" className={styles["footer-a"]}>contato@nitrusleaf.net</a></p>
    </footer>
  );
}

export default Footer;