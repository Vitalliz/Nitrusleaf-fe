import styles from "./RegisterContentB.module.css"
import Link from 'next/link';
import Image from 'next/image'

export default function RegisterContentB() {
  
    return (
      <main className={styles.main}>
        <div>
        <div className={styles.title}>
        <div className={styles.div2}>
        <h1 className={styles.h11}>Bem-vindo!</h1>
        <h1 className={`${styles.h12} ${styles.h11}`}>Cadastre-se</h1>
        <p className={styles["p1"]}>Escolha uma opção:</p>
        </div>
        </div>
        <Link href="/register1e" className={styles.links}>
          <button className={`${styles.botaoEscolha} ${styles.b1}`}><h1 className={styles.h1botao}>Empresa</h1><p className={styles.p1botao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></button>
        </Link>
        <Link href="/register1p" className={styles.links}>
          <button className={`${styles.botaoEscolha} ${styles.b2}`}><h1 className={styles.h1botao}>Pessoal</h1><p className={styles.p1botao}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></button>
        </Link>
        <Link href="/" className={styles.links1}>
          <div className={styles.auth_button}>
          <Image src="/images/voltar.svg" alt="Voltar" className={styles.imagem} width={17} height={17}/><p className={styles.voltar}>Voltar</p>
          </div>
        </Link>
        </div>
      </main>
    );
  }