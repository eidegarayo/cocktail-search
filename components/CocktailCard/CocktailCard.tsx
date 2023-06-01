/* eslint-disable @next/next/no-img-element */
import { ICocktail } from '@/api/cocktails.api.models';
import styles from './CocktailCard.module.scss';

export default function CocktailCard({ cocktail }: { cocktail:ICocktail }) {
  const { strDrink, strInstructions, strDrinkThumb } = cocktail;

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i < 16; i += 1) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  return (
    <article className={styles.article}>

      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <h2>{strDrink}</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.content_section}>
          <h3>Ingredients</h3>
          <ul className={`${styles.list}`}>
            {
            getIngredients().map(({ ingredient, measure }) => (
              <li key={ingredient}>
                <span>{ingredient}</span>
                <span>{measure}</span>
              </li>
            ))
          }
          </ul>
        </div>
        <div className={styles.content_section}>
          <h3>Method</h3>
          <p>{strInstructions}</p>
        </div>
      </div>

    </article>
  );
}
