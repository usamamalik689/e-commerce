import { getStorePage, getCatalog } from '@/lib/store-pages';
import homepage from '@/content/homepage.json';
import HomeInteractions from './home-interactions';
import './reference.css';
import './storefront.css';

export default async function Home() {
  const page = await getStorePage('/');
  return <>{page && <link rel="stylesheet" href={page.css} />}<HomeInteractions markup={page?.html || homepage.html} catalog={await getCatalog()} /></>;
}
