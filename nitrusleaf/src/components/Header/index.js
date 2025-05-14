// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';
import Image from "next/image"
function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <div className={styles["logo"]}>
            <Image src="/images/NitrusLeafLogo.svg" className={styles["logoImage"]} alt="Logo do projeto"
            width={170}
            height={80}
            />
          {/* <ul>
            <li><a href="#app">Aplicativo</a></li>
            <li><a href="#sobre-nos">Sobre nós</a></li>
          </ul> */}
          </div>
      </nav>
      {/* <div className="line" /> */}
    </header>
  );
}

export default Header;