'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { categoryMenu } from '@/data/navigation';

function closeNavigation(nav: Element) {
    const header = nav.closest('[data-sep-header]');
    header?.classList.remove('menu-is-open');
    header?.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false');
    nav.querySelectorAll('.sep-header__menu-item--has-dropdown').forEach(item => {
        item.classList.remove('is-open', 'is-expanded');
        item.setAttribute('data-menu-dismissed', '');
        item.querySelector('.sep-header__menu-link')?.setAttribute('aria-expanded', 'false');
    });
}

export default function NavigationState() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const nav = document.querySelector('.sep-header__nav');
        if (!nav) return;
        const items = nav.querySelectorAll<HTMLElement>('.sep-header__menu-item--has-dropdown');
        const reopen = (event: Event) => (event.currentTarget as HTMLElement).removeAttribute('data-menu-dismissed');
        items.forEach(item => {
            item.addEventListener('pointerenter', reopen);
            item.addEventListener('keydown', reopen);
            item.addEventListener('click', reopen);
        });
        const navigate = (event: Event) => {
            const link = (event.target as Element).closest('a');
            if (!link || link.matches('.sep-header__menu-item--has-dropdown > .sep-header__menu-link')) return;
            closeNavigation(nav);
        };
        nav.addEventListener('click', navigate);
        return () => {
            items.forEach(item => {
                item.removeEventListener('pointerenter', reopen);
                item.removeEventListener('keydown', reopen);
                item.removeEventListener('click', reopen);
            });
            nav.removeEventListener('click', navigate);
        };
    }, []);

    useEffect(() => {
        const nav = document.querySelector('.sep-header__nav');
        if (!nav) return;
        closeNavigation(nav);
        const productSlug = pathname.startsWith('/products/') ? pathname.split('/')[2] : null;
        const categoryPage = searchParams.get('view') === 'category' || Boolean(productSlug) || categoryMenu.some(group => group.href.split('?')[0] === pathname);
        nav.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
            const url = new URL(link.href);
            const exact = url.pathname === pathname && Array.from(url.searchParams).every(([key, value]) => searchParams.get(key) === value);
            let active = exact;
            if (link.matches('.sep-header__mega-heading') && url.pathname === pathname) active = true;
            if (link.matches('.sep-header__mega-heading') && productSlug) {
                active = categoryMenu.some(group => group.href === link.getAttribute('href') && group.productSlugs.includes(productSlug));
            }
            if (link.matches('.sep-header__menu-link')) {
                if (link.hasAttribute('data-sep-mega-toggle')) active = categoryPage;
                else if (url.pathname === '/collections/all') active = pathname === '/collections/all' && !searchParams.has('view');
                else if (url.pathname === '/collections') active = pathname.startsWith('/collections') && pathname !== '/collections/all' && !categoryPage && searchParams.get('view') !== 'new-arrivals';
                else if (url.pathname === '/blogs/news') active = pathname.startsWith('/blogs/news');
            }
            link.classList.toggle('is-active', active);
            if (exact && active) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
    }, [pathname, searchParams]);

    return null;
}
