"use client";
import React, { useEffect, useState } from "react";
import styles from "./ContentListaPes.module.css";
import { ChevronDown, ChevronRight, TextSearch } from "lucide-react";
import axios from "axios";
import Navbar from "../Navbar";


export default function ListaPes() {
    function getStatusColor(cor) {
  switch (cor?.toLowerCase()) {
    case 'Sem Informações':
      return <span className={styles.statusSemInfo}></span>
    case 'Não Tratado':
      return <span className={styles.statusNaoTratado}></span>
    case 'Tratado':
      return <span className={styles.statusTratado}></span>
    default:
      return styles.statusDesconhecido;
  }
}
  const [dropdownAberto, setDropdownAberto] = useState(null);
  const toggleDropdown = (index) => {
    setDropdownAberto(dropdownAberto === index ? null : index);
  };
  const Button = ({
    children,
    className = "",
    variant = "default",
    size = "md",
    ...props
  }) => {
    return (
      <button
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  const Input = ({ className = "", ...props }) => {
    return <input className={`${styles.inputBase} ${className}`} {...props} />;
  };
  const Card = ({ children }) => <div className={styles.card}>{children}</div>;
  const CardContent = ({ children, className = "" }) => (
    <div className={`${styles.cardContent} ${className}`}>{children}</div>
  );
  const DropdownMenu = ({ children }) => (
    <div className={styles.dropdownMenu}>{children}</div>
  );
  const DropdownMenuTrigger = ({ children, onClick }) => (
    <div
      className={styles.dropdownTrigger}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
  const DropdownMenuContent = ({ children, open }) => {
    if (!open) return null;
    return <div className={styles.dropdownContent}>{children}</div>;
  };
  const DropdownMenuItem = ({ children }) => (
    <div className={styles.dropdownItem}>{children}</div>
  );
  const DonutChart = ({ percentage = 25, size = 20, strokeWidth = 4 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg
        className={styles.donut}
        width={size}
        height={size}
        aria-label={`${percentage}%`}
        role="img"
      >
        <circle
          className={styles.donutBackground}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className={styles.donutProgress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={size * 0.4}
          fill="#000000"
          fontWeight="bold"
        >
          %
        </text>
      </svg>
    );
  };

  const [TextSearch, setTextSearch] = useState("");
  const [Data, setData] = useState([]);
  const [DadosFiltrados, setDadosFiltrados] = useState([]);
  useEffect(() => {
    // API TESTE
    // Colocar url da API do Nitrusleaf oficial
    async function getData() {
      const result = await axios.get("http://localhost:3001/talhao");
      setData(result.data)
      setDadosFiltrados(result.data)
    }
    getData();
  }, [])

  function filtrarPe(e) {
    setTextSearch(e.target.value)
  }

  function iconDados() {
    let newData = Data.filter((pe) => pe.nome == TextSearch)
    setDadosFiltrados(newData.length ? newData : Data);
  }


  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div>
          <label className={styles.label}>Pesquisar</label>
          <div className={styles.searchBox}>
            <Input placeholder="Pesquisar registros" value={TextSearch} onChange={e => filtrarPe(e)} className={styles.input} />
            <span className={styles.searchIcon} onClick={iconDados}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6458 20.6667C7.84514 20.6667 5.47508 19.6964 3.53567 17.756C1.59625 15.8156 0.626029 13.4455 0.625001 10.6458C0.623973 7.84617 1.5942 5.47611 3.53567 3.53567C5.47714 1.59522 7.8472 0.625 10.6458 0.625C13.4445 0.625 15.815 1.59522 17.7575 3.53567C19.7 5.47611 20.6698 7.84617 20.6667 10.6458C20.6667 11.7764 20.4868 12.8427 20.1271 13.8448C19.7674 14.8469 19.2792 15.7333 18.6625 16.5042L27.2958 25.1375C27.5785 25.4201 27.7198 25.7799 27.7198 26.2167C27.7198 26.6535 27.5785 27.0132 27.2958 27.2958C27.0132 27.5785 26.6535 27.7198 26.2167 27.7198C25.7799 27.7198 25.4201 27.5785 25.1375 27.2958L16.5042 18.6625C15.7333 19.2792 14.8469 19.7674 13.8448 20.1271C12.8427 20.4868 11.7764 20.6667 10.6458 20.6667ZM10.6458 17.5833C12.5729 17.5833 14.2112 16.9091 15.5607 15.5607C16.9101 14.2122 17.5844 12.5739 17.5833 10.6458C17.5823 8.71772 16.9081 7.07996 15.5607 5.73254C14.2133 4.38513 12.575 3.71039 10.6458 3.70833C8.7167 3.70628 7.07893 4.38101 5.73254 5.73254C4.38615 7.08407 3.71142 8.72183 3.70833 10.6458C3.70525 12.5698 4.37999 14.2081 5.73254 15.5607C7.0851 16.9132 8.72286 17.5874 10.6458 17.5833Z"
                  fill="#747474"
                />
              </svg>
            </span>
          </div>
        </div>
        <Button className={styles.addButton}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 8.49805H8V13.498C8 13.7633 7.89464 14.0176 7.70711 14.2052C7.51957 14.3927 7.26522 14.498 7 14.498C6.73478 14.498 6.48043 14.3927 6.29289 14.2052C6.10536 14.0176 6 13.7633 6 13.498V8.49805H1C0.734784 8.49805 0.48043 8.39269 0.292893 8.20515C0.105357 8.01762 0 7.76326 0 7.49805C0 7.23283 0.105357 6.97848 0.292893 6.79094C0.48043 6.6034 0.734784 6.49805 1 6.49805H6V1.49805C6 1.23283 6.10536 0.978476 6.29289 0.79094C6.48043 0.603403 6.73478 0.498047 7 0.498047C7.26522 0.498047 7.51957 0.603403 7.70711 0.79094C7.89464 0.978476 8 1.23283 8 1.49805V6.49805H13C13.2652 6.49805 13.5196 6.6034 13.7071 6.79094C13.8946 6.97848 14 7.23283 14 7.49805C14 7.76326 13.8946 8.01762 13.7071 8.20515C13.5196 8.39269 13.2652 8.49805 13 8.49805Z"
              fill="white"
            />
          </svg>
          Adicionar Pé
        </Button>
      </div>

      <Card>
        <CardContent className={styles.cardContent}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.th}>Nome Pé</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Data de Criação</th>
                <th className={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              {DadosFiltrados.map((item, idx) => (
                <tr key={idx} className={styles.tr}>
                  <td className={styles.tdNome}>{item.nome}</td>
                  <td className={styles.tdStatus}>
                    <span className={`${styles.statusDot} ${getStatusColor(item.cor)}`}></span>
                    {item.status}
                  </td>
                  <td className={styles.td}>{item.data}</td>

                  <td className={styles.tdAcoes}>
                    <DropdownMenu>
                      <DropdownMenuTrigger onClick={() => toggleDropdown(idx)}>
                        <Button
                          variant="outline"
                          size="sm"
                          className={styles.editarButton}
                        >
                          Editar <ChevronDown size={14} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent open={dropdownAberto === idx}>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Excluir</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                      variant="ghost"
                      size="sm"
                      className={styles.verButton}
                    >
                      Ver
                    </Button>
                    <DonutChart
                      percentage={item.percentual}
                      size={22}
                      strokeWidth={4}
                    />
                    <a href={`./Pe/index.js`} className={styles.acaoRelatorio}>
                      <ChevronRight size={16} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.paginacao}>1-1</div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
