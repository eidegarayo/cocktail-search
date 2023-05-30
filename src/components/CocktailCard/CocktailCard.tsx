/* eslint-disable @next/next/no-img-element */
import { ICocktail } from '@/src/api/cocktails.api.models';
import styles from './styles.module.scss';
import { caveat } from '@/styles/fonts';

export default function CocktailCard({ cocktail }: { cocktail:ICocktail }) {
  const { strDrink, strInstructions, strDrinkThumb } = cocktail;

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  }

  return (
    <article className={styles.article}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <h2>{strDrink}</h2>
        <p>{strInstructions}</p>
      </div>

      <ul className={`${styles.list} ${caveat.className}`}>
      {
        getIngredients().map(({ ingredient, measure }) => (
          <li key={ingredient}>
            <span>{ingredient}</span>
            <span>{measure}</span>
          </li>
        ))
      }
      </ul>
    </article>
  )
}
