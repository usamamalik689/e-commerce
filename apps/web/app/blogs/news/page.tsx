import { articles } from '@/data/articles';
import { pageStyles } from '@/data/page-styles';
import ArticleListing from '@/features/blog/article-listing';
import PageHero from '@/components/shared/page-hero';
import Newsletter from '@/components/shared/newsletter';
export const metadata = { title: 'Blogs | Toys Hutch' };
export default function Page() { return <><link rel="stylesheet" href={pageStyles.blog}/><main id="MainContent"><PageHero title="Blogs | Toys Hutch" crumb="Blogs" description="Gift guides, plush care tips, and stories from the softest corner of the internet."/><ArticleListing articles={articles.map(({slug,title,image,date,excerpt})=>({slug,title,image,date,excerpt}))}/><Newsletter /></main></>; }
