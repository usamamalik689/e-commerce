import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, productsBySlug } from '@/data/products';
import { pageStyles } from '@/data/page-styles';
import ProductDetail from '@/features/products/product-detail';
type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const product = productsBySlug[(await params).slug]; return { title: product ? product.title + ' | Toys Hutch' : 'Product not found' }; }
export default async function Page({ params }: Props) { const product = productsBySlug[(await params).slug]; if (!product)
    notFound(); return <><link rel="stylesheet" href={pageStyles.product}/><ProductDetail product={product}/></>; }
