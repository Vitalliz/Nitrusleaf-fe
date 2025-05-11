import styles from "./RegisterContent2.module.css";
import Link from 'next/link';


export default function RegisterComponent2() {
  return (
    <main className={styles["main-register"]}>
      <div className={styles["box-register"]}>
        <h5>CADASTRO</h5>
        <h1>Crie uma conta</h1>
        <p className={styles["p1-register"]}>Insira seus dados</p>
        <div className={styles["line"]}/>

        <form className={styles["form-register"]}>
          {/* Linha 1: Nome + Sobrenome */}
          <div className={styles["form-row"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="nome">CPF</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className={styles["form-input"]}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="sobrenome">Logradouro</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                className={styles["form-input"]}
                required
              />
            </div>
          </div>

          {/* Linha 2 em diante: campos sozinhos */}
          <div className={styles["form-group"]}>
            <label htmlFor="telefone">Número</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className={styles["form-input"]}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="email">Bairro</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles["form-input"]}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="senha">Cidade</label>
            <input
              type="password"
              id="senha"
              name="senha"
              className={styles["form-input"]}
              required
            />
          <Link to="/dashboard"><button type="submit" className={styles["auth-button"]}>Continuar</button></Link>
          </div>
        </form>
      </div>
      <p className={styles["plogin"]}>Já possui uma conta?<Link to="/">Entrar.</Link></p>
    </main>
  );
}