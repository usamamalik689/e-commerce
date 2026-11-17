import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { pageStyles } from '@/data/page-styles';
import ArticleDetail from '@/features/blog/article-detail';
type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: Props) { const { slug } = await params; return { title: articles.find(item => item.slug === slug)?.title || 'Article not found' }; }
export default async function Page({ params }: Props) { const { slug } = await params; const article = articles.find(item => item.slug === slug); if (!article)
    notFound(); return <><link rel="stylesheet" href={pageStyles.article}/><ArticleDetail article={article}/></>; }
