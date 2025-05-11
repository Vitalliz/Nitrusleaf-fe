import React from 'react';
import styles from './HomepageContent.module.css';

function HomepageComponent() {
  return (
    <section className={styles["hero"]}>
      <h1>Diagnóstico de deficiência da sua mexerica em um piscar de olhos!</h1>
      <div className={styles["auth-buttons"]}>
        <Link to="/login" className={styles["links"]}>
          <button className={`${styles["auth-button"]} ${styles['login']}`}>Entrar</button>
        </Link>
        <Link to="/register" className={styles["links"]}>
          <button className={`${styles["auth-button"]} ${styles["register"]}`}>Cadastrar-se</button>
        </Link>
        {/* <Link to="/GoogleL" className={styles["links"]}>
          <button className={styles["auth-button-google"]}>Entrar com o Google</button>
        </Link> */}
      </div>
    </section>
  );
}

export default HomepageComponent;
