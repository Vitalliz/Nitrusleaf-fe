// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';
import Image from "next/image"
function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <div className={styles["logo"]}>
            <a href="/#">
              <Image src="/images/NitrusLeafLogo.svg" className={styles["logoImage"]} alt="Logo do projeto"
              width={170}
              height={80}
              />
            </a>
          {/* <ul>
            <li><a href="#app">Aplicativo</a></li>
            <li><a href="#sobre-nos">Sobre nós</a></li>
          </ul> */}
          </div>
        <div className={styles.avatarBox}>
          <Image src="/images/avatar-user.png" alt="Avatar" width={48} height={48} className={styles.avatar}/>
        </div>
      </nav>
      {/* <div className="line" /> */}
    </header>
  );
}

export default Header;