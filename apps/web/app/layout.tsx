import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import '@/styles/theme.css';
import '@/styles/storefront.css';
import '@/styles/recommendations.css';
import '@/styles/policy.css';
import { Suspense } from 'react';
import NavigationState from '@/components/layout/navigation-state';
import StorefrontMotion from '@/components/layout/storefront-motion';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import StorefrontProvider from '@/features/cart/storefront-provider';
export const metadata: Metadata = { title: 'Toys Hutch | Plush Toys in Pakistan', description: 'Adorable plushies, teddy bears and cozy gifts delivered across Pakistan.' };
export default function RootLayout({ children }: {
    children: ReactNode;
}) {
    return <html lang="en" data-scroll-behavior="smooth"><body><StorefrontProvider><SiteHeader /><Suspense fallback={null}><NavigationState /><StorefrontMotion /></Suspense>{children}<SiteFooter /></StorefrontProvider></body></html>;
}
