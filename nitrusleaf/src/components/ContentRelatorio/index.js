'use client'; 
import { useRouter } from 'next/navigation';
import styles from '@/components/ContentRelatorio/ContentRelatorio.module.css';

export default function Relatorio() {
  const router = useRouter();

  const voltar = () => {
    router.push('/ListaPes'); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.voltar} onClick={voltar}>
          <span>←</span> Voltar
        </button>
        <h1>Pé 2</h1>
        <div className={styles.actions}>
          <button className={styles.editar}>+ Editar</button>
          <button className={styles.apagar} aria-label="Apagar relatório">🗑 Apagar</button>
        </div>
      </div>

      <hr className={styles.divisor} />

      <div className={styles.info}>
        <div className={styles.labels}>
          <p>
            <strong>Probabilidade de Deficiência:</strong>{' '}
            <span className={styles.tagCobre}>COBRE</span>
          </p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={styles.tagStatus}>TRATADO</span>
          </p>
          <button className={styles.verLocal}>Ver localização</button>
        </div>

        <div className={styles.porcentagem}>
          <span>92%</span>
          <div className={styles.grafico}>%</div>
        </div>
      </div>

      <hr className={styles.divisor} />

      <div className={styles.relatorio}>
        <div className={styles.topoRelatorio}>
          <h2>Primeiro relatório</h2>
          <span><strong>Data:</strong> 10/11/2024</span>
        </div>
        <div className={styles.textoRelatorio}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ligula vestibulum quisque morbi lectus.
            Sit diam feugiat tincidunt felis nullam phasellus et felis. Neque faucibus sed eget
            rhoncus diam sed cursus egestas. Congue id tristique vitae quam pharetra. Sapien aenean
            fermentum id turpis sit.
          </p>
        </div>
      </div>
    </div>
  );
}
