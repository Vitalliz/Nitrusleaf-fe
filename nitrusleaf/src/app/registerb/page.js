// src/App.js
import Header from '@/components/Header/index.js';
import styles from './RegisterB.module.css'
import RegisterContentB from '@/components/RegisterContentB/index'
import Footer from '@/components/Footer/index';

function RegisterB() {
  return (
    <>
      <Header />
      <div className={styles.divprincipalregister}>
      <RegisterContentB />
      </div>
      <Footer />
    </>
  );
}

export default RegisterB;