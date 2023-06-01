import { headers } from 'next/headers';
import {
  ICategory,
  IIngredient,
  ICocktailListItem,
  ICocktail,
} from './cocktails.api.models';

/* http://www.thecocktaildb.com/api.php */

const apiBaseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/';
const categoriesListUrl = `${apiBaseUrl}list.php?c=list`;
const ingredientsListUrl = `${apiBaseUrl}list.php?i=list`;
const cocktailByIdBaseUrl = `${apiBaseUrl}lookup.php?i=`;
const cocktailByNameBaseUrl = `${apiBaseUrl}search.php?s=`;
const listByCatBaseUrl = `${apiBaseUrl}filter.php?c=`;
const listByIngrBaseUrl = `${apiBaseUrl}filter.php?i=`;
const randomCocktailBaseUrl = `${apiBaseUrl}random.php`;

// Similar to `getStaticProps`.
// `force-cache` is the default and can be omitted.

export async function getCategoriesList(): Promise<[string]> {
  const response = await fetch(categoriesListUrl, { cache: 'force-cache' });
  const categoriesList = await response.json();
  const categories = categoriesList.drinks.map((cat: ICategory) => cat.strCategory).sort();
  return categories;
}

export async function getIngredientsList(): Promise<[string]> {
  const response = await fetch(ingredientsListUrl, { cache: 'force-cache' });
  const ingredientsList = await response.json();
  const ingredients = ingredientsList.drinks.map((ingr: IIngredient) => ingr.strIngredient1).sort();
  return ingredients;
}

export async function getCocktailsByCat(cat: string): Promise<ICocktailListItem[] | []> {
  if (!cat) return [];

  const category = cat.replace(' ', '_');
  const response = await fetch(`${listByCatBaseUrl}${category}`);
  const cocktailsListByCat = await response.json();
  return cocktailsListByCat.drinks;
}

export async function getCocktailsByIngrs(ingr: string): Promise<ICocktailListItem[] | []> {
  if (!ingr) return [];

  const ingredients = ingr.replace(' ', '_');
  const response = await fetch(`${listByIngrBaseUrl}${ingredients}`);
  const cocktailsByIngrsDrinks = await response.json();
  return cocktailsByIngrsDrinks.drinks;
}

export async function getCocktailById(cocktailId: string): Promise<ICocktail> {
  const response = await fetch(`${cocktailByIdBaseUrl}${cocktailId}`);
  const cocktailById = await response.json();
  return cocktailById.drinks[0];
}

export async function getCocktailByName(cocktailName: string): Promise<ICocktail> {
  const response = await fetch(`${cocktailByNameBaseUrl}${cocktailName}`);
  const cocktailByName = await response.json();
  return cocktailByName.drinks[0];
}

export async function getRandomCocktail(): Promise<ICocktail> {
  const response = await fetch(`${randomCocktailBaseUrl}`, { cache: 'no-store' });
  const cocktail = await response.json();
  return cocktail.drinks[0];
}
