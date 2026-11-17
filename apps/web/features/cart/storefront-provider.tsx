'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { catalog } from '@/data/catalog';
import { createPortal } from 'react-dom';
import { usePathname, useRouter } from 'next/navigation';
import type { CartItem } from '@/types/store';
import { parsePrice } from '@/lib/money';
type StoreState = {
    addItem: (item: CartItem) => void;
    toggleSaved: (item: CartItem) => void;
    saved: CartItem[];
    openCart: () => void;
};
const StoreContext = createContext<StoreState | null>(null);
export function useStore() { const store = useContext(StoreContext); if (!store)
    throw new Error('StorefrontProvider is required'); return store; }
export default function StorefrontProvider({ children }: {
    children: ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const root = useRef<HTMLDivElement>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [saved, setSaved] = useState<CartItem[]>([]);
    const [ready, setReady] = useState(false);
    const [panel, setPanel] = useState<'cart' | 'wishlist' | null>(null);
    const [notice, setNotice] = useState('');
    const [inlineTarget, setInlineTarget] = useState<HTMLElement | null>(null);
    const closeButton = useRef<HTMLButtonElement>(null);
    useEffect(() => { try {
        setCart(JSON.parse(localStorage.getItem('toyshutch-cart') || '[]'));
        setSaved(JSON.parse(localStorage.getItem('toyshutch-wishlist') || '[]'));
    }
    catch { } setReady(true); }, []);
    useEffect(() => { if (!ready)
        return; localStorage.setItem('toyshutch-cart', JSON.stringify(cart)); localStorage.setItem('toyshutch-wishlist', JSON.stringify(saved)); }, [cart, saved, ready]);
    useEffect(() => { setInlineTarget(document.getElementById('store-state-root')); setPanel(pathname === '/cart' ? 'cart' : pathname === '/pages/wishlist' ? 'wishlist' : null); }, [pathname]);
    useEffect(() => { if (!notice)
        return; const timer = setTimeout(() => setNotice(''), 3500); return () => clearTimeout(timer); }, [notice]);
    useEffect(() => { if (!panel || inlineTarget)
        return; const previous = document.activeElement as HTMLElement | null; closeButton.current?.focus(); document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; previous?.focus(); }; }, [panel, inlineTarget]);
    useEffect(() => { root.current?.querySelectorAll<HTMLElement>('.sep-header__cart-count, .sep-header__wishlist-count').forEach(el => { el.textContent = String(el.closest('[data-sep-wl-open]') ? saved.length : cart.reduce((sum, item) => sum + item.quantity, 0)); el.hidden = false; }); }, [cart, saved, pathname]);
    const addItem = (item: CartItem) => { setCart(current => current.some(p => p.id === item.id) ? current.map(p => p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p) : [...current, item]); setNotice(`${item.title} added to cart`); };
    const toggleSaved = (item: CartItem) => setSaved(current => current.some(p => p.id === item.id) ? current.filter(p => p.id !== item.id) : [...current, item]);
    useEffect(() => {
        const container = root.current;
        if (!container)
            return;
        const header = container.querySelector('[data-sep-header]');
        const search = container.querySelector<HTMLElement>('[data-sep-search]');
        const input = container.querySelector<HTMLInputElement>('[data-sep-search-input]');
        if (search) {
            search.hidden = true;
            search.classList.remove('is-open');
        }
        header?.classList.remove('menu-is-open');
        header?.querySelectorAll('.is-open, .is-expanded').forEach(el => el.classList.remove('is-open', 'is-expanded'));
        const click = (event: MouseEvent) => {
            const target = event.target as Element;
            if (target.closest('[data-sep-search-open]')) {
                if (search) {
                    search.hidden = false;
                    search.classList.add('is-open');
                }
                input?.focus();
            }
            if (target.closest('[data-sep-search-close]') && search) {
                search.hidden = true;
                search.classList.remove('is-open');
            }
            const term = target.closest<HTMLElement>('[data-sep-search-term]');
            if (term && input) {
                input.value = term.dataset.sepSearchTerm || '';
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
            const menu = target.closest<HTMLElement>('[data-menu-toggle]');
            if (menu) {
                const open = header?.classList.toggle('menu-is-open');
                menu.setAttribute('aria-expanded', String(open));
            }
            const dropdown = target.closest<HTMLElement>('.sep-header__menu-item--has-dropdown > .sep-header__menu-link');
            if (dropdown && window.innerWidth < 990) {
                event.preventDefault();
                const open = dropdown.parentElement?.classList.toggle(window.innerWidth < 990 ? 'is-expanded' : 'is-open');
                dropdown.setAttribute('aria-expanded', String(open));
                return;
            }
            if (target.closest('#cart-icon-bubble')) {
                event.preventDefault();
                setPanel('cart');
            }
            if (target.closest('[data-sep-wl-open]')) {
                event.preventDefault();
                setPanel('wishlist');
            }
            if (target.closest('a[href^="/"]'))
                header?.classList.remove('menu-is-open');
            const tab = target.closest<HTMLElement>('[data-sep-tab]');
            if (tab) {
                container.querySelectorAll('[data-sep-tab]').forEach(el => { const active = el === tab; el.classList.toggle('is-active', active); el.setAttribute('aria-selected', String(active)); });
                container.querySelectorAll<HTMLElement>('[role="tabpanel"]').forEach(el => { el.hidden = el.id !== tab.getAttribute('aria-controls'); });
            }
        };
        const submit = (event: SubmitEvent) => { const form = event.target as HTMLFormElement; if (form.matches('[data-react-form]'))
            return; event.preventDefault(); if (form.matches('[data-sep-search-form], [data-store-search]')) {
            router.push('/search?q=' + encodeURIComponent(String(new FormData(form).get('q') || '')));
            if (search) {
                search.hidden = true;
                search.classList.remove('is-open');
            }
        }
        else if (form.matches('[data-contact-guard]')) {
            if (form.reportValidity())
                setNotice('Message preview ready. Nothing has been sent.');
        }
        else if (form.querySelector('input[type="email"]') && form.reportValidity())
            setNotice('Thank you! This is a newsletter signup preview.'); };
        const escape = (event: KeyboardEvent) => { if (event.key !== 'Escape')
            return; setPanel(null); if (search) {
            search.hidden = true;
            search.classList.remove('is-open');
        } header?.classList.remove('menu-is-open'); header?.querySelectorAll('.is-open, .is-expanded').forEach(el => el.classList.remove('is-open', 'is-expanded')); };
        container.querySelector('[data-tsb]')?.classList.add('is-ready', 'is-in');
        container.querySelectorAll('[data-toy-reveal], [data-toy-hero-content], [data-toy-hero-breadcrumb], [data-toy-hero-description]').forEach(el => el.classList.add('is-visible', 'is-in', 'is-revealed'));
        const scroll = () => { header?.classList.toggle('is-scrolled', window.scrollY > 20); header?.classList.toggle('is-past-header', window.scrollY > (header instanceof HTMLElement ? header.offsetHeight : 0) + 20); };
        window.addEventListener('scroll', scroll, { passive: true });
        scroll();
        container.addEventListener('click', click);
        container.addEventListener('submit', submit);
        document.addEventListener('keydown', escape);
        return () => { container.removeEventListener('click', click); container.removeEventListener('submit', submit); document.removeEventListener('keydown', escape); window.removeEventListener('scroll', scroll); };
    }, [pathname, router]);
    const items = panel === 'wishlist' ? saved : cart;
    const content = panel && <div className={inlineTarget ? 'home-panel-inline' : 'home-panel-overlay'} onClick={() => { if (!inlineTarget)
        setPanel(null); }}><section className="home-panel" role={inlineTarget ? 'region' : 'dialog'} aria-modal={inlineTarget ? undefined : true} aria-label={panel === 'cart' ? 'Shopping cart' : 'Wishlist'} onClick={e => e.stopPropagation()} onKeyDown={e => { if (inlineTarget || e.key !== 'Tab')
        return; const controls = e.currentTarget.querySelectorAll<HTMLElement>('button, a, input'); const first = controls[0], last = controls[controls.length - 1]; if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
    }
    else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
    } }}>
    <header><h2>{panel === 'cart' ? 'Your Cart' : 'Your Wishlist'}</h2>{!inlineTarget && <button ref={closeButton} onClick={() => setPanel(null)} aria-label="Close panel">×</button>}</header>
    {!items.length && <div className="home-empty"><p>{panel === 'cart' ? 'Your cart is empty!' : 'Save your favorite cuddle companions.'}</p><button onClick={() => { setPanel(null); if (inlineTarget)
        router.push('/collections/all'); }}>Continue shopping →</button></div>}
    {items.map(item => <article key={item.id} className="home-cart-item"><Link className="home-cart-item__image" href={item.url || `/products/${catalog.find(product => product.id === item.id || product.variants.some(variant => item.id.split(':')[0] === String(variant.id)) || product.title === item.title)?.slug || ''}`} onClick={() => setPanel(null)} aria-label={`View ${item.title}`}><img src={item.image} alt={item.title} width="88" height="88"/></Link><div><h3>{item.title}</h3><p>{item.price}</p>{panel === 'cart' ? <div className="home-quantity"><button aria-label={`Decrease ${item.title}`} onClick={() => setCart(c => c.map(p => p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p).filter(p => p.quantity > 0))}>−</button><span>{item.quantity}</span><button aria-label={`Increase ${item.title}`} onClick={() => setCart(c => c.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p))}>+</button></div> : <button onClick={() => addItem(item)}>Add to Cart</button>}<button className="home-remove" onClick={() => panel === 'cart' ? setCart(c => c.filter(p => p.id !== item.id)) : setSaved(c => c.filter(p => p.id !== item.id))}>Remove</button></div></article>)}
    {panel === 'cart' && items.length > 0 && <footer><h3>Estimated total <span>Rs.{cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0).toLocaleString('en-PK')}</span></h3><p>Shipping calculated at checkout.</p><button onClick={() => { setPanel(null); router.push('/checkout'); }}>Go to Checkout →</button></footer>}
  </section></div>;
    return <StoreContext.Provider value={{ addItem, toggleSaved, saved, openCart: () => setPanel('cart') }}><div ref={root}>{children}</div>{notice && <div className="home-toast" role="status">{notice}</div>}{content && (inlineTarget ? createPortal(content, inlineTarget) : content)}</StoreContext.Provider>;
}
