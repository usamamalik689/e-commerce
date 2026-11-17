export type Variant = {
    id: number;
    title: string;
    options: string[];
    price: number;
    compare_at_price: number | null;
    available: boolean;
};
export type RichTextNode = {
    type: 'text' | 'paragraph' | 'heading' | 'list' | 'list-item' | 'strong' | 'emphasis' | 'link' | 'image' | 'break' | 'quote' | 'table' | 'row' | 'cell';
    text?: string;
    children?: RichTextNode[];
    level?: number;
    ordered?: boolean;
    href?: string;
    src?: string;
    alt?: string;
};
export type Product = {
    id: string;
    slug: string;
    title: string;
    image: string;
    hoverImage?: string | null;
    imageAlt: string;
    price: number;
    comparePrice: number;
    available: boolean;
    rating: number;
    reviewCount: number;
    variants: Variant[];
    gallery: {
        src: string;
        alt: string;
        thumbnail: string;
    }[];
    optionNames: string[];
    category: {
        title: string;
        href: string;
    };
    description: RichTextNode[];
    personalizable: boolean;
    reviews: {
        author: string;
        rating: number;
        text: string;
        date: string;
    }[];
    relatedSlugs: string[];
};
export type Collection = {
    slug: string;
    title: string;
    description: string;
    css: string;
    productSlugs: string[];
};
export type Article = {
    slug: string;
    title: string;
    image: string;
    date: string;
    excerpt: string;
    body: RichTextNode[];
};
export type Policy = {
    slug: string;
    title: string;
    body: RichTextNode[];
};
export type CartItem = {
    url?: string;
    id: string;
    title: string;
    image: string;
    price: string;
    quantity: number;
};
export type ProductSummary = Pick<Product, "id" | "slug" | "title" | "image" | "hoverImage" | "imageAlt" | "price" | "comparePrice" | "available" | "rating" | "reviewCount" | "variants">;
export type PurchaseProduct = ProductSummary & Pick<Product, "optionNames" | "personalizable">;

export type ArticleSummary = Omit<Article, "body">;
