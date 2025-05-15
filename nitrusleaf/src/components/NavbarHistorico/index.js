"use client";

import React,{useState} from "react";
import style from "@/components/NavbarHistorico/NavbarHistorico.module.css";

function NavbarHistorico() {
  const [selected, setSelected] = useState("Propriedade 1");

  return (
    <main className={style.main}>
      <span className={style.span}>Texto de exemplo</span>

      <select
        className={style.selected}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option>Propriedade 1</option>
        <option>Propriedade 2</option>
        <option>Propriedade 3</option>
      </select>
    </main>
  );
}

export default NavbarHistorico;
