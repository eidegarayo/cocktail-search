import { inter } from '@/styles/fonts';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Main from '@/src/components/Main/Main';
import '../styles/globals.css'
import styles from './layout.module.scss';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Buscador de cócteles</title>
      </head>
      <body className={`${styles.body} ${inter.className}`}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  )
}
