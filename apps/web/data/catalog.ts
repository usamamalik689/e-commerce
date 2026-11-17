import { products } from './products';
import type { Product, ProductSummary } from '@/types/store';
export function productSummary(product: Product): ProductSummary {
    const { id, slug, title, image, hoverImage, imageAlt, price, comparePrice, available, rating, reviewCount, variants } = product;
    return { id, slug, title, image, hoverImage, imageAlt, price, comparePrice, available, rating, reviewCount, variants };
}
export const catalog = products.map(productSummary);
export const catalogBySlug = Object.fromEntries(catalog.map(product => [product.slug, product]));
