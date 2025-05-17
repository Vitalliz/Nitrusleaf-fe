"use client";

import React from "react";
import styles from "./ContentPe.module.css";
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Trash2, Pencil } from "lucide-react";

const Pe = () => {
  const dados = [
    { descricao: "Primeiro relatório", data: "10/11/2024" },
    { descricao: "Influência Externa", data: "22/12/2024" },
  ];

function Back() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate('/ListaPes');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={`${styles.botao} ${styles.voltar}`} onClick={voltar}>
          <svg width="25" height="15" viewBox="0 0 37 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.6513 10.2624C10.4701 10.2624 9.41728 12.9346 11.0123 14.4224C11.1791 14.5674 11.3129 14.7423 11.4057 14.9365C11.4985 15.1308 11.5484 15.3405 11.5525 15.5532C11.5565 15.7658 11.5145 15.977 11.4292 16.1743C11.3438 16.3715 11.2167 16.5506 11.0554 16.701C10.8942 16.8514 10.7022 16.9699 10.4907 17.0496C10.2793 17.1292 10.0529 17.1684 9.8249 17.1646C9.59692 17.1609 9.3721 17.1143 9.16382 17.0278C8.95555 16.9412 8.76811 16.8164 8.61267 16.6608L1.25522 9.79785C0.6065 9.19274 0.6065 8.1646 1.25522 7.55948L8.61267 0.696547C8.93453 0.416792 9.36023 0.264492 9.8001 0.271731C10.24 0.27897 10.6596 0.445184 10.9707 0.735356C11.2818 1.02553 11.46 1.417 11.4678 1.8273C11.4755 2.2376 11.3122 2.63469 11.0123 2.93492C9.41728 4.42276 10.4701 7.09491 12.6513 7.09491H28.9192C30.8705 7.09491 32.7419 7.81797 34.1217 9.10502C35.5015 10.3921 36.2767 12.1377 36.2767 13.9578C36.2767 15.778 35.5015 17.5236 34.1217 18.8107C32.7419 20.0977 30.8705 20.8208 28.9192 20.8208H24.3916C23.9413 20.8208 23.5094 20.6539 23.191 20.3569C22.8726 20.0599 22.6937 19.6571 22.6937 19.237C22.6937 18.817 22.8726 18.4142 23.191 18.1171C23.5094 17.8201 23.9413 17.6533 24.3916 17.6533H28.9192C29.9699 17.6533 30.9776 17.2639 31.7206 16.5709C32.4635 15.8779 32.8809 14.9379 32.8809 13.9578C32.8809 12.9778 32.4635 12.0378 31.7206 11.3448C30.9776 10.6518 29.9699 10.2624 28.9192 10.2624H12.6513Z" fill="#FBF6EE" />
          </svg>
          Voltar
        </button>
        <h1 className={styles.titulo}>Pé 2</h1>
        <div className={styles.acoes}>
          <button className={`${styles.botao} ${styles.editar}`}> <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8.49805H8V13.498C8 13.7633 7.89464 14.0176 7.70711 14.2052C7.51957 14.3927 7.26522 14.498 7 14.498C6.73478 14.498 6.48043 14.3927 6.29289 14.2052C6.10536 14.0176 6 13.7633 6 13.498V8.49805H1C0.734784 8.49805 0.48043 8.39269 0.292893 8.20515C0.105357 8.01762 0 7.76326 0 7.49805C0 7.23283 0.105357 6.97848 0.292893 6.79094C0.48043 6.6034 0.734784 6.49805 1 6.49805H6V1.49805C6 1.23283 6.10536 0.978476 6.29289 0.79094C6.48043 0.603403 6.73478 0.498047 7 0.498047C7.26522 0.498047 7.51957 0.603403 7.70711 0.79094C7.89464 0.978476 8 1.23283 8 1.49805V6.49805H13C13.2652 6.49805 13.5196 6.6034 13.7071 6.79094C13.8946 6.97848 14 7.23283 14 7.49805C14 7.76326 13.8946 8.01762 13.7071 8.20515C13.5196 8.39269 13.2652 8.49805 13 8.49805Z" fill="white" />
          </svg>
            Editar </button>
          <button className={`${styles.botao} ${styles.apagar}`}> <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 16.5C1 17.6 1.9 18.5 3 18.5H11C12.1 18.5 13 17.6 13 16.5V6.5C13 5.4 12.1 4.5 11 4.5H3C1.9 4.5 1 5.4 1 6.5V16.5ZM13 1.5H10.5L9.79 0.79C9.61 0.61 9.35 0.5 9.09 0.5H4.91C4.65 0.5 4.39 0.61 4.21 0.79L3.5 1.5H1C0.45 1.5 0 1.95 0 2.5C0 3.05 0.45 3.5 1 3.5H13C13.55 3.5 14 3.05 14 2.5C14 1.95 13.55 1.5 13 1.5Z" fill="white" />
          </svg>
            Apagar </button>
        </div>
      </div>
      <h2 className={styles.subtitulo}>Relatórios</h2>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data de Criação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className={styles.descricao}>{item.descricao}</td>
              <td>{item.data}</td>
              <td>
                <div className={styles.acaoRelatorio}>
                  Ver relatório <ChevronRight size={16} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.paginacao}>1-1</div>
    </div>
  );
};}

export{Pe, Back};
