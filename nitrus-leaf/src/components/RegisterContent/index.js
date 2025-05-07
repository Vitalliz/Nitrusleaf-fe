import styles from "./RegisterContent.module.css"

export default function RegisterComponent() {
  
    return (
      <main>
        <div className={styles["title"]}>
        <div>
        <h1>Bem-vindo!</h1>
        <h1 className={styles["h12"]}>Cadastre-se</h1>
        </div>
        <p>Escolha uma opção:</p>
        </div>
      </main>
    );
  }