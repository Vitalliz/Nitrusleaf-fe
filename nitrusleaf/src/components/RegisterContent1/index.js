import styles from "./RegisterContent1.module.css";
import Link from 'next/link';

export default function RegisterComponent1() {
  return (
    <main className={styles["main-register"]}>
      <div className={styles["box-register"]}>
        <h5 className={styles.h5}>CADASTRO</h5>
        <h1>Crie uma conta</h1>
        <p className={styles["p1-register"]}>Bem vindo ao NitrusLeaf!</p>
        <div className={styles["line"]} />

        <form>
        <div className={styles["form-register"]}>
          {/* Linha 1 */}
          <div className={styles["form1"]}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className={styles["form-input"]}
              required
            />
          </div>

          <div className={styles["form2"]}>
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              className={styles["form-input"]}
              required
            />
          </div>

          {/* Linha 2 */}
          <div className={styles["form3"]}>
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className={styles["form-input"]}
              required
            />
          </div>

          <div className={styles["form4"]}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles["form-input"]}
              required
            />
          </div>

          {/* Linha 3 */}
          <div className={styles["form5"]}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              className={styles["form-input"]}
              required
            />
          </div>
          </div>
            <Link href="/register2">
              <button type="submit" className={styles["auth-button"]}>
                Continuar
              </button>
            </Link>
        </form>

        <p className={styles["plogin"]}>
          Já possui uma conta? <Link href="/">Entrar.</Link>
        </p>
      </div>
    </main>
  );
}
