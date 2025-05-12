import styles from "./RegisterContent2b.module.css";
import Link from 'next/link';

export default function RegisterComponent2() {
  return (
    <main className={styles["main-register"]}>
      <div className={styles["box-register"]}>
        <h5 className={styles.h5}>CADASTRO</h5>
        <h1>Crie uma conta</h1>
        <p className={styles["p1-register"]}>Insira seus dados</p>
        <div className={styles["line"]} />

        <form className={styles.formo}>
          <div className={styles["form-register"]}>

            {/* Linha 1 */}
            <div className={styles["form1"]}>
              <label htmlFor="nome">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                className={styles["form-input"]}
                required
              />
            </div>

            <div className={styles["form2"]}>
              <label htmlFor="nome">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                className={styles["form-input"]}
                required
              />
            </div>


            {/* Linha 2 */}
            <div className={styles["form3"]}>
              <label htmlFor="logradouro">Logradouro</label>
              <input
                type="text"
                id="logradouro"
                className={styles["form-input"]}
              />
            </div>

            <div className={styles["form4"]}>
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                id="numero"
                className={styles["form-input"]}
              />
            </div>

            {/* Linha 3 */}
            <div className={styles["form5"]}>
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                className={styles["form-input"]}
                required
              />
            </div>

            <div className={styles["form6"]}>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                className={styles["form-input"]}
                required
              />
            </div>
          </div>

          <div>
            <Link href="/register2">
              <button type="submit" className={styles["auth-button"]}>
                Continuar
              </button>
            </Link>
          </div>
        </form>

        <p className={styles["plogin"]}>
          Já possui uma conta? <Link href="/">Entrar.</Link>
        </p>
      </div>
    </main>
  );
}