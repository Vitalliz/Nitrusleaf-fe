import NavbarHistorico from "../NavbarHistorico";
import styles from "./TesteContent.module.css";
import HistoricoContent2 from "../HistoricoContent2";
import Dados from "../Dados";
import Link from 'next/link';
import HistoricoContent1 from "../HistoricoContent1";

export default function TesteContent() {
  
    return (
      <div className={styles.central}>
        <main className={styles.main}>
        <h1>Oláaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <NavbarHistorico/>
        <Dados/>
        <HistoricoContent1/>
        <ResumoTalhoes dados={dadosResumo} />
        </main>
      </div>
    );
  }''