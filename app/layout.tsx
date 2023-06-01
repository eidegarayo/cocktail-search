import { montserrat } from '@/styles/fonts';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Main from '@/components/Main/Main';
import '../styles/globals.css';
import styles from './layout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Your cocktail</title>
      </head>
      <body className={`${styles.body} ${montserrat.className}`}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
