import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collections } from '@/data/collections';
import CollectionDetail from '@/features/collections/collection-detail';
type Props = {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; return { title: (collections.find(item => item.slug === slug)?.title || 'Collection') + ' | Toys Hutch' }; }
export default async function Page({ params, searchParams }: Props) {
    const { slug } = await params;
    const collection = collections.find(item => item.slug === slug);
    if (!collection)
        notFound();
    const values = await searchParams;
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(values))
        if (typeof value === 'string')
            query.set(key, value);
    return <><link rel="stylesheet" href={collection.css}/><CollectionDetail key={slug + "?" + query.toString()} collection={collection} query={query.toString()}/></>;
}
