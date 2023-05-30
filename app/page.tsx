import { getRandomCocktail } from '@/src/api/cocktails.api';
import CocktailCard from '@/src/components/CocktailCard/CocktailCard';
import styles from './page.module.scss';

export default async function Page() {
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const cocktail = await getRandomCocktail();

  return (
    <section className={styles.section}>
      <CocktailCard cocktail={cocktail} />
    </section>
  )
}
