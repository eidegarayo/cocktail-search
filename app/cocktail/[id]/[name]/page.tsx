import { getCocktailById } from '@/api/cocktails.api';
import CocktailCard from '@/components/CocktailCard/CocktailCard';
import styles from './page.module.scss';

export default async function Page({ params }: { params: { id: string, name: string } }) {
  const cocktail = await getCocktailById(params.id);

  return (
    <section className={styles.section}>
      <CocktailCard cocktail={cocktail} />
    </section>
  );
}
