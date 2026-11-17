'use client';
import { useState } from 'react';
import type { ArticleSummary } from '@/types/store';
import ArticleCard from './components/article-card';
export default function ArticleListing({ articles }: {
    articles: ArticleSummary[];
}) {
    const [sort, setSort] = useState('newest');
    const [limit, setLimit] = useState(12);
    const sorted = [...articles].sort((a, b) => a.date.localeCompare(b.date) * (sort === 'newest' ? -1 : 1));
    return <section id="sep-blog-template--23854184038659__grid" className="sep-blog"><div className="sep-blog__inner"><div className="sep-blog__bar"><h2 className="sep-blog__title">All Blogs</h2><label className="sep-blog__sort"><span className="visually-hidden">Sort blogs</span><select value={sort} onChange={e => setSort(e.target.value)}><option value="newest">Sort by: Newest</option><option value="oldest">Sort by: Oldest</option></select></label></div><div className="sep-blog__grid">{sorted.slice(0, limit).map(article => <ArticleCard article={article} key={article.slug}/>)}</div>{limit < articles.length && <div className="sep-blog__more"><button className="sep-blog__more-btn" onClick={() => setLimit(n => n + 12)}>Load More</button></div>}</div></section>;
}
