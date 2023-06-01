import { getRandomCocktail } from '@/api/cocktails.api';
import CocktailCard from '@/components/CocktailCard/CocktailCard';
import styles from './page.module.scss';

export default async function Page() {
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const cocktail = await getRandomCocktail();

  return (
    <section className={styles.section}>
      <CocktailCard cocktail={cocktail} />
    </section>
  );
}
