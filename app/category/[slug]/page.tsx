import List from '@/components/List/List';
import { getCocktailsByCat } from '@/api/cocktails.api';

export default async function Category({ params }: { params: { slug: string } }) {
  const cocktailsListByCat = await getCocktailsByCat(params.slug);

  return (
    <div>
      <List list={cocktailsListByCat} />
    </div>
  );
}
