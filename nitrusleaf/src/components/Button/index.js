"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Button.module.css";

// Botão reutilizável
function CustomButton({ variant, label, icon, onClick }) {
  return (
    <button
      className={`${styles.button} ${variant === "edit" ? styles.edit : styles.dropdown}`}
      onClick={onClick}
    >
      {icon && variant === "edit" && (
        <Image
          src="/icons/edit.svg"
          alt="ícone"
          width={16}
          height={16}
          className={styles.icon}
        />
      )}
      {label}
    </button>
  );
}

// Dropdown de propriedades
function Dropdown() {
  const [selected, setSelected] = useState("Propriedade 1");
  const [open, setOpen] = useState(false);
  const items = ["Propriedade 1", "Propriedade 2", "Propriedade 3"];

  return (
    <div className={styles.dropdownContainer}>
      <CustomButton
        variant="dropdown"
        label={selected}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <ul className={styles.dropdownList}>
          {items.map((item) => (
            <li
              key={item}
              className={styles.dropdownItem}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export {Dropdown, CustomButton};