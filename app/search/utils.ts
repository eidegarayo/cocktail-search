import { ICocktailListItem } from "@/src/api/cocktails.api.models";

export function filterListByIngrs (list: ICocktailListItem[], listByIngr: ICocktailListItem[]): ICocktailListItem[] | [] {
  if (list.length < 1) return listByIngr;

  const listByIngrIds = listByIngr.map(item => item.idDrink);

  return list.filter(item => listByIngrIds.includes(item.idDrink));
}
