import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { ScanResultProvider } from '@/contexts/ScanResultContext'; // importe o contexto que você criou

export const metadata = {
  title: 'Nitrus Leaf',
  description: 'Plataforma Nitrus Leaf',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/images/Nitrusleaf.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="layout">
        <AuthProvider>
          <ScanResultProvider>
            {children}
          </ScanResultProvider>
        </AuthProvider>
      </body>
    </html>
  );
}