/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ICocktailListItem } from '@/api/cocktails.api.models';
import styles from './List.module.scss';

export default function List({ list }: { list: ICocktailListItem[] }) {
  return (
    <ul className={styles.ul}>
      {list.map((cocktail) => (
        <li className={styles.li} key={cocktail.strDrink}>
          <Link href={`/cocktail/${cocktail.idDrink}/${cocktail.strDrink}`}>
            <div className={styles.img}>
              <img src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} />
            </div>
            <p className={styles.name}>{cocktail.strDrink}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
