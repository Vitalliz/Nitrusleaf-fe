// src/components/Header.js
import React from 'react';
import './Header.css';
import NitrusLeafLogo from "../../assets/NitrusLeafLogo.svg"
function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
            <a href="/#">
              <img src={NitrusLeafLogo} className="logoImage" alt="Logo do projeto"/>
            </a>
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