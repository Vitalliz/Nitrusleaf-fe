'use client'

import Header from '@/components/Header'
import LoginContent from '@/components/LoginContent/index'
import styles from './page.module.css'
import Footer from '@/components/Footer'

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className={styles.divprincipallogin}>
      <LoginContent />
      </div>
      <Footer />
    </>
  )
}
