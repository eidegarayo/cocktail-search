import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        API:
        {' '}
        <a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noreferrer">TheCocktailDB</a>
      </div>
      <div>
        Logo image attribution:
        {' '}
        <a href="https://www.pngall.com/cocktail-png/download/55359" target="_blank" rel="noreferrer">Cocktail Drink PNG Free Download</a>
      </div>
    </footer>
  );
}
