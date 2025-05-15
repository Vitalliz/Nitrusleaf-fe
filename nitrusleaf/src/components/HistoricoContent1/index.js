"use client";

import React from "react";
import styles from "@/components/HistoricoContent1/HistoricoContent1.module.css";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

type Talhao = {
  nome: string;
  pesAnalisados: number;
  totalPes: number;
  dataCriacao: string;
};

type Props = {
  talhoes: Talhao[];
};

export default function HistoricoContent1({ talhoes }: Props) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Talhões</h2>
        <button className={styles.button} onClick={() => router.push("/talhoes")}>
          <span>Mais detalhes</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <hr className={styles.separator} />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome Talhão</th>
            <th>Pés analisados</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {talhoes.map((talhao, idx) => (
            <tr key={idx}>
              <td>{talhao.nome}</td>
              <td>{`${talhao.pesAnalisados}/${talhao.totalPes}`}</td>
              <td>{talhao.dataCriacao}</td>
              <td className={styles.iconCell}>
                <ChevronRight size={16} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
