import Link from 'next/link';
import { categoryMenu } from '@/data/navigation';
import { catalogBySlug } from '@/data/catalog';
export default function CategoryMenu() {
    return <>{categoryMenu.map(group => <div className="sep-header__mega-col" key={group.href}><Link className="sep-header__mega-heading" href={group.href}>{group.title}</Link><ul className="sep-header__mega-items">{group.productSlugs.map(slug => catalogBySlug[slug]).filter(Boolean).map(product => <li key={product.slug}><Link className="sep-header__mega-link" href={'/products/' + product.slug}>{product.title}</Link></li>)}</ul></div>)}</>;
}
