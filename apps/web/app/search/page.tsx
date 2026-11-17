import SearchPage from '@/features/search/search-page';
import { catalog } from '@/data/catalog';
import { pageStyles } from '@/data/page-styles';
export const metadata = { title: 'Search | Toys Hutch' };
export default async function Page({ searchParams }: {
    searchParams: Promise<{
        q?: string;
    }>;
}) { const { q } = await searchParams; return <><link rel="stylesheet" href={pageStyles.search}/><SearchPage key={q} products={catalog} initialTerm={q || ''}/></>; }
