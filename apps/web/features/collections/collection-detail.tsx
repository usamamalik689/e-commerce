import type { Collection } from '@/types/store';
import { catalogBySlug as productsBySlug } from '@/data/catalog';
import PageHero from '@/components/shared/page-hero';
import Newsletter from '@/components/shared/newsletter';
import CollectionListing from './components/collection-listing';
export default function CollectionDetail({ collection, query }: {
    collection: Collection;
    query: string;
}) {
    const products = collection.productSlugs.map(slug => productsBySlug[slug]).filter(Boolean);
    const category = new URLSearchParams(query).get('view') === 'category';
    const label = ({ 'teddy-bears': 'Teddy Bears', plushies: 'Plushies', 'stuffed-animals': 'Stuffed Animals', 'panda-stuff-toy': 'Your Favorite Pandas', all: 'All Products' } as Record<string, string>)[collection.slug] || collection.title;
    return <main id="MainContent" className="content-for-layout" data-template="collection"><PageHero title={collection.title} description={collection.description} crumb={category ? 'Shop by Category' : 'Collections'} crumbHref={category ? '/collections/all?view=category' : '/collections'} currentLabel={label}/><CollectionListing collection={collection} products={products} initialQuery={query}/><Newsletter /></main>;
}
