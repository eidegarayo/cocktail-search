'use client';

import { useEffect, useState } from 'react';
import {
  getCategoriesList, getIngredientsList, getCocktailsByCat, getCocktailsByIngrs,
} from '@/api/cocktails.api';
import Select from '@/components/Select/Select';
import List from '@/components/List/List';
import { ICocktailListItem } from '@/api/cocktails.api.models';
import { filterListByIngrs } from './utils';
import styles from './page.module.scss';

export default function Search() {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [ingrList, setIngrList] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('');
  const [ingredient, setIngredient] = useState<string>('');
  const [list, setList] = useState<ICocktailListItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategoriesList();
      const ingredients = await getIngredientsList();
      setCategoryList(categories);
      setIngrList(ingredients);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!category) return;

    const fecthData = async () => {
      const cocktailsListByCat = await getCocktailsByCat(category);
      setList(cocktailsListByCat || []);
      setIngredient('');
    };
    fecthData();
  }, [category]);

  useEffect(() => {
    if (!ingredient) return;

    const fetchData = async () => {
      const listByIngr = await getCocktailsByIngrs(ingredient);
      const cocktailsList = filterListByIngrs(list, listByIngr);
      setList(cocktailsList);

      if (cocktailsList.length === 0) {
        setIngredient('');
        setCategory('');
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredient]);

  return (
    <section>
      <div className={styles.search}>
        <Select options={categoryList} setOption={setCategory} selectedOption={category} label="Category" />
        <Select options={ingrList} setOption={setIngredient} selectedOption={ingredient} label="Ingredient" />
      </div>

      {
        list ? <List list={list} /> : null
      }
    </section>
  );
}
