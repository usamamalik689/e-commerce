import Link from 'next/link';
import type { ArticleSummary } from '@/types/store';
export default function ArticleCard({ article }: {
    article: ArticleSummary;
}) {
    return <article className="sep-blog-card"><Link className="sep-blog-card__media" href={'/blogs/news/' + article.slug}><img src={article.image} alt={article.title} width="800" height="500" loading="lazy" className="sep-blog-card__img"/></Link><time className="sep-blog-card__date" dateTime={article.date}>{new Date(article.date + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time><h3 className="sep-blog-card__title"><Link href={'/blogs/news/' + article.slug}>{article.title}</Link></h3><p className="sep-blog-card__excerpt">{article.excerpt}</p><Link className="sep-blog-card__btn" href={'/blogs/news/' + article.slug}>View Details</Link></article>;
}
