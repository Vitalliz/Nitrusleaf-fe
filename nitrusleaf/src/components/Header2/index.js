// src/components/Header.js
import React from 'react';
import styles from './Header2.module.css';
import Image from "next/image"
import Link from 'next/link';

function Header2() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <div className={styles["logo"]}>
            <Image src="/images/LeafLogo.svg" className={styles["logoImage"]} alt="Logo do projeto"
            width={70}
            height={70}
            />
        <div className={styles.logop}>
          <Image src="/images/NitrusLeafLogo.svg" className={styles.logoImage2} alt="Logo do projeto"
            width={120}
            height={60}
        />
        <div className={styles.line2} />
        <div className={styles.logoImage3Container}>
          <Image src="/images/Ellipse-16.png" className={styles.logoImage3} alt="Logo do projeto"
            width={40}
            height={40}
          />
        </div>
        </div>

        <div>

        </div>
          {/* <ul>
            <li><a href="#app">Aplicativo</a></li>
            <li><a href="#sobre-nos">Sobre nós</a></li>
          </ul> */}
          </div>
      </nav>
      <div className={styles.line} />
    </header>
  );
}

export default Header2;