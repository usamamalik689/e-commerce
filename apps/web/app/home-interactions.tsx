'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Variant } from '@/lib/store-pages';
import CheckoutPreview from './checkout-preview';
import { parsePrice } from '@/lib/money';

type Item = { id: string; title: string; image: string; price: string; quantity: number };

export default function HomeInteractions({ markup, variants = [], catalog = [], route = '/' }: { markup: string; variants?: Variant[]; catalog?: string[]; route?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<Item[]>([]);
  const [saved, setSaved] = useState<Item[]>([]);
  const [panel, setPanel] = useState<'cart' | 'wishlist' | null>(null);
  const [notice, setNotice] = useState('');
  const [ready, setReady] = useState(false);
  const [stateTarget, setStateTarget] = useState<HTMLElement | null>(null);
  const [checkoutTarget, setCheckoutTarget] = useState<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem('toyshutch-cart') || '[]'));
      setSaved(JSON.parse(localStorage.getItem('toyshutch-wishlist') || '[]'));
    } catch { /* Ignore outdated browser storage. */ }
    setReady(true);
    setStateTarget(document.getElementById('store-state-root'));
    setCheckoutTarget(document.getElementById('store-checkout-root'));
    if (route === '/cart') setPanel('cart');
    if (route === '/pages/wishlist') setPanel('wishlist');
  }, []);
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem('toyshutch-cart', JSON.stringify(cart));
    localStorage.setItem('toyshutch-wishlist', JSON.stringify(saved));
    root.current?.querySelectorAll<HTMLElement>('[data-wishlist-button]').forEach(button => {
      const active = saved.some(item => item.id === button.dataset.productId);
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-saved', active);
    });
    root.current?.querySelectorAll<HTMLElement>('.sep-header__cart-count, .sep-header__wishlist-count').forEach(count => {
      count.textContent = String(count.closest('[data-sep-wl-open]') ? saved.length : cart.reduce((sum, item) => sum + item.quantity, 0));
      count.hidden = false;
    });
  }, [cart, saved, ready]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(''), 3500);
    return () => clearTimeout(timer);
  }, [notice]);
  useEffect(() => {
    if (!panel || stateTarget) return;
    const previous = document.activeElement as HTMLElement | null;
    closeButton.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; previous?.focus(); };
  }, [panel, stateTarget]);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const header = container.querySelector('[data-sep-header]');
    const search = container.querySelector<HTMLElement>('[data-sep-search]');
    const searchInput = container.querySelector<HTMLInputElement>('[data-sep-search-input]');
    const library = document.createElement('div');
    library.innerHTML = catalog.join('');
    const cards = [...(catalog.length ? library : container).querySelectorAll<HTMLElement>('.sep-products__card')];
    const product = (card: Element): Item => {
      const data = card.querySelector<HTMLElement>('[data-wishlist-button]')?.dataset;
      return { id: data?.productId || '', title: data?.productTitle || 'Plush toy', image: data?.productImage || '', price: data?.productPrice || 'Rs.0', quantity: 1 };
    };
    const addItem = (item: Item) => {
      setCart(current => current.some(p => p.id === item.id) ? current.map(p => p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p) : [...current, item]);
      setNotice(`${item.title} added to cart`);
    };
    const pdp = container.querySelector<HTMLFormElement>('[data-sep-form]');
    const addons = container.querySelector<HTMLElement>('[data-sep-addons]');
    let pendingItem: Item | null = null;
    const pdpItem = (): Item => {
      const id = pdp?.querySelector<HTMLInputElement>('[data-sep-variant-id]')?.value || '';
      const variant = variants.find(v => String(v.id) === id) || variants[0];
      const custom = container.querySelector<HTMLInputElement>('[data-sep-text-value]')?.value;
      return { id: `${id}${custom ? ':' + custom : ''}`, title: `${pdp?.dataset.productTitle || 'Plush toy'}${variant ? ' · ' + variant.title : ''}${custom ? ' · ' + custom : ''}`, image: container.querySelector<HTMLImageElement>('[data-sep-slide].is-active img')?.getAttribute('src') || '', price: 'Rs.' + ((variant?.price || 0) / 100).toLocaleString('en-PK'), quantity: Math.max(1, Number(container.querySelector<HTMLInputElement>('[data-sep-qty-input]')?.value) || 1) };
    };
    const showSearch = () => {
      if (search) { search.hidden = false; search.classList.add('is-open'); }
      searchInput?.focus();
    };
    const filter = () => {
      const results = container.querySelector('[data-sep-search-default]');
      if (!results) return;
      const query = searchInput?.value.toLowerCase().trim() || '';
      const matches = cards.filter(card => product(card).title.toLowerCase().includes(query));
      results.innerHTML = matches.length ? matches.map(card => card.outerHTML).join('') : '<p role="status">No plushies found. Try Panda, Teddy or Penguin.</p>';
    };
    const click = (event: MouseEvent) => {
      const target = event.target as Element;
      const galleryPage = target.closest<HTMLElement>('[data-reels-page]');
      if (galleryPage) {
        const list = container.querySelector<HTMLElement>('.sep-reels__splide .splide__list');
        const slide = list?.querySelector<HTMLElement>('.splide__slide');
        if (list && slide) list.scrollTo({ left: Number(galleryPage.dataset.reelsPage) * (slide.offsetWidth + 20), behavior: 'smooth' });
        container.querySelectorAll('[data-reels-page]').forEach(el => { el.classList.toggle('is-active', el === galleryPage); el.setAttribute('aria-current', String(el === galleryPage)); });
      }
      if (target.closest('[data-sep-addons-close]') && addons) { addons.hidden = true; pendingItem = null; }
      if (target.closest('[data-sep-addons-skip], [data-sep-addons-confirm]') && pendingItem) {
        addItem(pendingItem);
        if (target.closest('[data-sep-addons-confirm]')) addons?.querySelectorAll<HTMLElement>('[data-sep-addon]').forEach(addon => {
          if (!addon.querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked) return;
          addItem({ id: addon.dataset.variant || '', title: addon.querySelector('strong')?.textContent || 'Gift add-on', image: addon.querySelector('img')?.getAttribute('src') || '', price: addon.querySelector('.sep-pdp__addon-text > span')?.textContent || 'Rs.0', quantity: 1 });
        });
        pendingItem = null; if (addons) addons.hidden = true; setPanel('cart');
      }
      const thumb = target.closest<HTMLElement>('[data-sep-thumb]');
      if (thumb) {
        container.querySelectorAll<HTMLElement>('[data-sep-slide], [data-sep-thumb]').forEach(el => el.classList.toggle('is-active', (el.dataset.sepSlide ?? el.dataset.sepThumb) === thumb.dataset.sepThumb));
      }
      const quantity = target.closest<HTMLElement>('[data-sep-qty]');
      if (quantity) { const input = container.querySelector<HTMLInputElement>('[data-sep-qty-input]'); if (input) input.value = String(Math.max(1, Number(input.value) + Number(quantity.dataset.sepQty))); }
      const tab = target.closest<HTMLElement>('[data-sep-tab]');
      if (tab) {
        container.querySelectorAll<HTMLElement>('[data-sep-tab]').forEach(el => { const active = el === tab; el.classList.toggle('is-active', active); el.setAttribute('aria-selected', String(active)); });
        container.querySelectorAll<HTMLElement>('[role="tabpanel"]').forEach(el => { el.hidden = el.id !== tab.getAttribute('aria-controls'); el.classList.toggle('is-active', !el.hidden); });
      }
      if (target.closest('[data-sep-buy]')) { if (pdp?.reportValidity()) { addItem(pdpItem()); setPanel('cart'); } }
      if (target.closest('[data-sep-filter-toggle]')) { const filters = container.querySelector<HTMLElement>('[data-sep-filters]'); const open = filters?.classList.toggle('is-open'); target.closest('button')?.setAttribute('aria-expanded', String(open)); filters?.classList.toggle('mobile-open', open); }
      const filterHead = target.closest<HTMLElement>('[data-sep-filter-head]');
      if (filterHead) { const open = filterHead.getAttribute('aria-expanded') !== 'true'; filterHead.setAttribute('aria-expanded', String(open)); const body = filterHead.nextElementSibling as HTMLElement | null; if (body) body.hidden = !open; }
      if (target.closest('[data-menu-toggle]')) {
        const open = header?.classList.toggle('menu-is-open');
        target.closest('button')?.setAttribute('aria-expanded', String(open));
      }
      if (target.closest('[data-sep-search-open]')) showSearch();
      if (target.closest('[data-sep-search-close]') && search) { search.hidden = true; search.classList.remove('is-open'); }
      const term = target.closest<HTMLElement>('[data-sep-search-term]');
      if (term && searchInput) { searchInput.value = term.dataset.sepSearchTerm || ''; filter(); }
      const wishlist = target.closest<HTMLElement>('[data-wishlist-button]');
      if (wishlist) {
        const card = wishlist.closest('.sep-products__card');
        if (card) { const item = product(card); setSaved(current => current.some(p => p.id === item.id) ? current.filter(p => p.id !== item.id) : [...current, item]); }
      }
      if (target.closest('[data-sep-wl-open]')) { event.preventDefault(); setPanel('wishlist'); }
      if (target.closest('#cart-icon-bubble')) { event.preventDefault(); setPanel('cart'); }
      const dropdown = target.closest<HTMLElement>('.sep-header__menu-item--has-dropdown > .sep-header__menu-link');
      if (dropdown) {
        event.preventDefault();
        const open = dropdown.parentElement?.classList.toggle(window.innerWidth < 990 ? 'is-expanded' : 'is-open');
        dropdown.setAttribute('aria-expanded', String(open));
        return;
      }
      const link = target.closest<HTMLAnchorElement>('a');
      if (link && link.getAttribute('href')?.startsWith('/') && !target.closest('#cart-icon-bubble, [data-sep-wl-open]')) {
        header?.classList.remove('menu-is-open');
      }
      const video = target.closest('.sep-reels__media')?.querySelector('video');
      if (video) { video.muted = true; if (video.paused) { void video.play().catch(() => {}); video.closest('.sep-reels__media')?.classList.add('is-video-ready'); } else video.pause(); }
    };
    const submit = (event: SubmitEvent) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const card = form.closest('.sep-products__card');
      if (card) {
        addItem(product(card));
      } else if (form.matches('[data-sep-form]')) {
        if (form.reportValidity()) {
          if (addons) { pendingItem = pdpItem(); addons.hidden = false; addons.querySelector<HTMLButtonElement>('button')?.focus(); }
          else addItem(pdpItem());
        }
      } else if (form.matches('[data-sep-search-form]')) filter();
      else if (form.matches('[data-store-search]')) window.location.assign('/search?q=' + encodeURIComponent(String(new FormData(form).get('q') || '')));
      else if (form.matches('[data-contact-guard]')) {
        if (form.reportValidity()) setNotice('Your message is ready. Contact delivery will be available after the email service is connected.');
      }
      else if (form.querySelector<HTMLInputElement>('input[type="email"]')?.checkValidity()) setNotice('Thank you! Newsletter signup is ready; email service will be connected later.');
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPanel(null);
        if (addons) addons.hidden = true;
        if (search) { search.hidden = true; search.classList.remove('is-open'); }
        header?.classList.remove('menu-is-open');
        header?.querySelectorAll('.is-open, .is-expanded').forEach(item => item.classList.remove('is-open', 'is-expanded'));
      }
    };
    container.querySelector('[data-tsb]')?.classList.add('is-ready', 'is-in');
    container.querySelectorAll<HTMLElement>('[data-toy-reveal], [data-toy-hero-content], [data-toy-hero-breadcrumb], [data-toy-hero-description]').forEach(el => el.classList.add('is-visible', 'is-in', 'is-revealed'));
    const change = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.matches('[data-sep-addon-check]')) { const button = addons?.querySelector<HTMLButtonElement>('[data-sep-addons-confirm]'); if (button) button.disabled = !addons?.querySelector('input[type="checkbox"]:checked'); }
      if (input.matches('[data-sep-option] input')) {
        const options = [...container.querySelectorAll<HTMLInputElement>('[data-sep-option] input:checked')].map(el => el.value);
        const selected = variants.find(v => v.options.every((option, index) => option === options[index]));
        if (selected) {
          const hidden = container.querySelector<HTMLInputElement>('[data-sep-variant-id]'); if (hidden) hidden.value = String(selected.id);
          const now = container.querySelector('[data-sep-price-now]'); if (now) now.textContent = 'Rs.' + (selected.price / 100).toLocaleString('en-PK');
          const was = container.querySelector<HTMLElement>('[data-sep-price-was]'); if (was) { was.textContent = selected.compare_at_price ? 'Rs.' + (selected.compare_at_price / 100).toLocaleString('en-PK') : ''; was.hidden = !selected.compare_at_price; }
          container.querySelectorAll<HTMLButtonElement>('[data-sep-add], [data-sep-buy]').forEach(button => { button.disabled = !selected.available; });
          const stock = container.querySelector('[data-sep-stock-text]'); if (stock) stock.textContent = selected.available ? 'In Stock' : 'Sold Out';
        }
      }
      if (input.matches('[data-sep-text-toggle], [data-sep-text-select], [data-sep-text-custom]')) {
        const toggle = container.querySelector<HTMLInputElement>('[data-sep-text-toggle]');
        const custom = container.querySelector<HTMLElement>('[data-sep-text-custom-wrap]'); if (custom) custom.hidden = !toggle?.checked;
        const value = container.querySelector<HTMLInputElement>('[data-sep-text-value]');
        if (value) value.value = toggle?.checked ? container.querySelector<HTMLInputElement>('[data-sep-text-custom]')?.value || '' : container.querySelector<HTMLSelectElement>('[data-sep-text-select]')?.value || '';
      }
      if (input.closest('[data-sep-filters]') || input.matches('[data-sep-sort]')) {
        const form = container.querySelector<HTMLFormElement>('[data-sep-filters]');
        if (form) {
          if (input.checked && input.type === 'checkbox') form.querySelectorAll<HTMLInputElement>(`input[name="${CSS.escape(input.name)}"]`).forEach(el => { if (el !== input) el.checked = false; });
          const query = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
          const sort = container.querySelector<HTMLSelectElement>('[data-sep-sort]'); if (sort) query.set('sort_by', sort.value);
          window.location.assign(window.location.pathname + '?' + query.toString());
        }
      }
    };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('home-revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    const scrollHeader = () => { header?.classList.toggle('is-scrolled', window.scrollY > 20); header?.classList.toggle('is-past-header', window.scrollY > (header instanceof HTMLElement ? header.offsetHeight : 0) + 20); };
    window.addEventListener('scroll', scrollHeader, { passive: true });
    scrollHeader();
    const quotes = container.querySelector<HTMLElement>('[data-sep-testimonials-track]');
    const carousel = window.setInterval(() => {
      if (!quotes || window.innerWidth > 749 || window.matchMedia('(prefers-reduced-motion: reduce)').matches || quotes.matches(':hover, :focus-within')) return;
      const visible = quotes.getBoundingClientRect();
      if (visible.top > window.innerHeight || visible.bottom < 0) return;
      quotes.scrollTo({ left: quotes.scrollLeft + quotes.clientWidth >= quotes.scrollWidth - 4 ? 0 : quotes.scrollLeft + quotes.clientWidth, behavior: 'smooth' });
    }, 5500);
    container.querySelectorAll('main > section:not(:first-child)').forEach(section => { section.classList.add('home-reveal'); observer.observe(section); });
    container.addEventListener('click', click); container.addEventListener('submit', submit);
    container.addEventListener('change', change); container.addEventListener('input', change);
    searchInput?.addEventListener('input', filter); document.addEventListener('keydown', escape);
    return () => {
      observer.disconnect(); container.removeEventListener('click', click); container.removeEventListener('submit', submit);
      window.clearInterval(carousel); window.removeEventListener('scroll', scrollHeader);
      searchInput?.removeEventListener('input', filter); document.removeEventListener('keydown', escape);
      container.removeEventListener('change', change); container.removeEventListener('input', change);
    };
  }, [catalog, variants]);

  const items = panel === 'wishlist' ? saved : cart;
  const panelContent = panel && <div className={stateTarget ? 'home-panel-inline' : 'home-panel-overlay'} onClick={() => { if (!stateTarget) setPanel(null); }}>
      <section className="home-panel" role={stateTarget ? 'region' : 'dialog'} aria-modal={stateTarget ? undefined : true} aria-label={panel === 'cart' ? 'Shopping cart' : 'Wishlist'} onClick={e => e.stopPropagation()} onKeyDown={e => {
        if (stateTarget) return;
        if (e.key !== 'Tab') return;
        const controls = e.currentTarget.querySelectorAll<HTMLElement>('button, a, input');
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }}>
        <header><h2>{panel === 'cart' ? 'Your Cart' : 'Your Wishlist'}</h2>{!stateTarget && <button ref={closeButton} onClick={() => setPanel(null)} aria-label="Close panel">×</button>}</header>
        {!items.length && <div className="home-empty"><p>{panel === 'cart' ? 'Your cart is empty!' : 'Save your favorite cuddle companions.'}</p><button onClick={() => stateTarget ? window.location.assign('/collections/all') : setPanel(null)}>Continue shopping →</button></div>}
        {items.map(item => <article key={item.id} className="home-cart-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt={item.title} width="88" height="88" />
          <div><h3>{item.title}</h3><p>{item.price}</p>
            {panel === 'cart' ? <div className="home-quantity"><button aria-label={`Decrease ${item.title}`} onClick={() => setCart(c => c.map(p => p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p).filter(p => p.quantity > 0))}>−</button><span>{item.quantity}</span><button aria-label={`Increase ${item.title}`} onClick={() => setCart(c => c.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p))}>+</button></div> : <button onClick={() => { setCart(c => c.some(p => p.id === item.id) ? c.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p) : [...c, item]); setNotice('Added to cart'); }}>Add to Cart</button>}
            <button className="home-remove" onClick={() => panel === 'cart' ? setCart(c => c.filter(p => p.id !== item.id)) : setSaved(c => c.filter(p => p.id !== item.id))}>Remove</button>
          </div>
        </article>)}
        {panel === 'cart' && items.length > 0 && <footer><h3>Estimated total <span>Rs.{cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0).toLocaleString('en-PK')}</span></h3><p>Shipping calculated at checkout.</p><button onClick={() => window.location.assign('/checkout')}>Go to Checkout →</button></footer>}
      </section>
    </div>;
  return <>
    <div ref={root} dangerouslySetInnerHTML={{ __html: markup }} />
    {notice && <div className="home-toast" role="status">{notice}</div>}
    {stateTarget && panelContent ? createPortal(panelContent, stateTarget) : panelContent}
    {checkoutTarget && createPortal(<CheckoutPreview />, checkoutTarget)}
  </>;
}
