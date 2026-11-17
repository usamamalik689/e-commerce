import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStorePage, getCatalog, getCollectionCatalog, filterCollection, searchPage } from '@/lib/store-pages';
import HomeInteractions from '../home-interactions';
import '../reference.css';
import '../storefront.css';

type Props = { params: Promise<{ slug: string[] }>; searchParams: Promise<Record<string, string | string[] | undefined>> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getStorePage('/' + (await params).slug.join('/'));
  return { title: page?.title || 'Page not found | Toys Hutch' };
}
export default async function StoreRoute({ params, searchParams }: Props) {
  const route = '/' + (await params).slug.join('/');
  const query = await searchParams;
  const capture = new URLSearchParams();
  for (const key of ['view', 'page']) if (typeof query[key] === 'string') capture.set(key, query[key]);
  const page = await getStorePage(route, capture.toString());
  if (!page) notFound();
  const catalog = await getCatalog();
  let html = page.html;
  if (route.startsWith('/collections/') && Object.keys(query).some(key => key.startsWith('filter.') || key === 'sort_by')) html = filterCollection(html, await getCollectionCatalog(route), query);
  if (route === '/search') html = searchPage(html, catalog, typeof query.q === 'string' ? query.q : '');
  return <><link rel="stylesheet" href={page.css} /><HomeInteractions key={route + '?' + capture} markup={html} variants={page.variants} catalog={catalog} route={route} /></>;
}
