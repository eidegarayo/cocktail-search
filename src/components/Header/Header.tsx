import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <span className={styles.icon}>&#127865;</span>
        <h1 className={styles.brand}>Cocktail finder</h1>
      </Link>
      <Link href="/search" className={styles.link}><span className={styles.icon}>&#128269;</span></Link>
    </header>
  )
}
