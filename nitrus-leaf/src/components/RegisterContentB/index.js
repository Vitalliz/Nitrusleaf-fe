import styles from "./RegisterContentB.module.css"
import { Link } from 'react-router-dom'; // 👈 importa Link

export default function RegisterContentB() {
  
    return (
      <main className={styles["main"]}>
        <div className={styles["title"]}>
        <div className={styles["div2"]}>
        <h1>Bem-vindo!</h1>
        <h1 className={styles["h12"]}>Cadastre-se</h1>
        <p className={styles["p1"]}>Escolha uma opção:</p>
        </div>
        </div>
        <Link className={styles["links"]}>
          <button className={styles["botaoEscolha"]}><h1 className={styles["h1botao"]}>Empresa</h1><p className={styles["p1botao"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></button>
        </Link>
        <Link className={styles["links"]}>
          <button className={styles["botaoEscolha"]}><h1 className={styles["h1botao"]}>Pessoal</h1><p className={styles["p1botao"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></button>
        </Link>
        <Link to="/login" className={styles["links1"]}>
          <div className={styles["auth-button"]}>
          <img src="/images/voltar.svg" alt="Voltar" className={styles["imagem"]}/><p className={styles["voltar"]}>Voltar</p>
          </div>
        </Link>
      </main>
    );
  }