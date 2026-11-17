import Link from 'next/link';
import type { Article } from '@/types/store';
import { articles } from '@/data/articles';
import RichText from '@/components/shared/rich-text';
import Newsletter from '@/components/shared/newsletter';
import ArticleCard from './components/article-card';
export default function ArticleDetail({ article }: {
    article: Article;
}) {
    return <main id="MainContent" data-template="article"><article id="sep-article-template--23854184005891__main" className="sep-article"><div className="sep-article__banner"><img className="sep-article__banner-img" src={article.image} alt={article.title} width="1600" height="800"/></div><div className="sep-article__inner"><nav className="sep-article__crumbs"><Link href="/">Home</Link> &gt; <Link href="/blogs/news">Blogs</Link> &gt; {article.title}</nav><h1 className="sep-article__title">{article.title}</h1><time className="sep-article__meta" dateTime={article.date}>{article.date}</time><div className="sep-article__content rte"><RichText nodes={article.body}/></div><div className="sep-article__related"><h2 className="sep-article__related-title">You May Also Like</h2><div className="sep-article__related-grid">{articles.filter(item => item.slug !== article.slug).slice(0, 3).map(item => <ArticleCard article={item} key={item.slug}/>)}</div></div></div></article><Newsletter /></main>;
}
