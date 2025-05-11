// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Nitrus Leaf',
  description: 'Plataforma Nitrus Leaf',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        {/* charset e viewport são inseridos automaticamente pelo Next.js */}
        <link rel="icon" href="./Nitrusleaf.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="layout">{children}</body>
    </html>
  )
}
