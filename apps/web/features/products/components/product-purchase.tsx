'use client';
import { useEffect, useRef, useState } from 'react';
import type { PurchaseProduct, ProductSummary } from '@/types/store';
import { WishlistIcon, BankIcon } from '@/components/shared/icons';
import RatingStars from '@/components/shared/rating-stars';
import { useStore } from '@/features/cart/storefront-provider';
const money = (value: number) => 'Rs.' + value.toLocaleString('en-PK');
export default function ProductPurchase({ product: p, addons }: {
    product: PurchaseProduct;
    addons: ProductSummary[];
}) {
    const store = useStore();
    const first = p.variants.find(v => v.available) || p.variants[0];
    const [options, setOptions] = useState(first?.options || []);
    const [quantity, setQuantity] = useState(1);
    const [text, setText] = useState('');
    const [custom, setCustom] = useState(false);
    const [showAddons, setShowAddons] = useState(false);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
    const close = useRef<HTMLButtonElement>(null);
    const variant = p.variants.find(v => v.options.every((value, i) => value === options[i]));
    const available = !!variant?.available;
    const price = (variant?.price || 0) / 100;
    const compare = (variant?.compare_at_price || 0) / 100;
    const item = { url: `/products/${p.slug}`, id: String(variant?.id || p.id) + (text ? ':' + text : ''), title: p.title + (variant?.title && variant.title !== 'Default Title' ? ' · ' + variant.title : '') + (text ? ' · ' + text : ''), image: p.image, price: money(price), quantity };
    useEffect(() => { if (!showAddons)
        return; close.current?.focus(); const escape = (event: KeyboardEvent) => { if (event.key === 'Escape')
        setShowAddons(false); }; document.addEventListener('keydown', escape); return () => document.removeEventListener('keydown', escape); }, [showAddons]);
    const add = (includeAddons: boolean) => { store.addItem(item); if (includeAddons)
        addons.filter(addon => selectedAddons.includes(addon.slug)).forEach(addon => store.addItem({ id: String(addon.variants[0]?.id || addon.id), title: addon.title, image: addon.image, price: money(addon.price), quantity: 1 })); setShowAddons(false); store.openCart(); };
    return <div className="sep-pdp__info"><div className="sep-pdp__title-row"><h1 className="sep-pdp__title">{p.title}</h1><button className="sep-pdp__wish" type="button" aria-label={`Save ${p.title}`} aria-pressed={store.saved.some(item => item.id === p.id)} onClick={() => store.toggleSaved({ ...item, id: p.id, quantity: 1 })}><WishlistIcon /></button></div>
    <div className="sep-pdp__price"><span className="sep-pdp__price-now">{money(price)}</span>{compare > price && <><s className="sep-pdp__price-was">{money(compare)}</s><span className="sep-pdp__price-off">{Math.round((1 - price / compare) * 100)}% OFF</span></>}</div>
    <p className="sep-pdp__pay-offer"><BankIcon /><span>Pay via Bank Transfer or JazzCash in advance and <strong>save 10%</strong> now!</span></p><div className="sep-pdp__rating"><RatingStars rating={p.rating} className="sep-pdp__stars" size={16} /><span className="sep-pdp__rating-text">{p.rating.toFixed(1)} ({p.reviewCount})</span><span className="sep-pdp__divider"/><span className="sep-pdp__stock">{available ? 'In Stock' : 'Sold Out'}</span></div>
    <form className="sep-pdp__form" data-react-form onSubmit={event => { event.preventDefault(); if (available) {
        if (addons.length)
            setShowAddons(true);
        else
            add(false);
    } }}>
      {p.optionNames.map((name, index) => <fieldset className="sep-pdp__group" key={name}><legend className="sep-pdp__label">{name}</legend><div className="sep-pdp__pills">{[...new Set(p.variants.map(v => v.options[index]))].map(option => <label className="sep-pdp__pill" key={option}><input type="radio" name={`option-${index}`} value={option} checked={options[index] === option} onChange={() => setOptions(current => current.map((value, i) => i === index ? option : value))}/><span>{option}</span></label>)}</div></fieldset>)}
      {p.personalizable && <div className="sep-pdp__group"><label className="sep-pdp__label" htmlFor="personalized-text">Select Customized Text for Toy</label><div className="sep-pdp__select"><select id="personalized-text" value={custom ? '' : text} onChange={e => setText(e.target.value)} disabled={custom}><option value="">Select Text</option>{['Happy Birthday', 'Happy Anniversary', 'I Love You', 'Congratulations'].map(value => <option key={value}>{value}</option>)}</select></div><label><input type="checkbox" checked={custom} onChange={e => { setCustom(e.target.checked); setText(''); }}/> Add custom text</label>{custom && <input type="text" maxLength={80} value={text} onChange={e => setText(e.target.value)} aria-label="Custom text"/>}</div>}
      <div className="sep-pdp__group"><span className="sep-pdp__label">Select Quantity</span><div className="sep-pdp__qty"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(n => Math.max(1, n - 1))}>−</button><input type="number" min="1" inputMode="numeric" aria-label="Quantity" value={quantity} onChange={e => setQuantity(Math.max(1, Math.floor(Number(e.target.value) || 1)))}/><button type="button" aria-label="Increase quantity" onClick={() => setQuantity(n => n + 1)}>+</button></div></div>
      <div className="sep-pdp__actions"><button type="submit" className="sep-pdp__btn sep-pdp__btn--ghost" disabled={!available}>Add to Cart</button><button type="button" className="sep-pdp__btn sep-pdp__btn--solid" disabled={!available} onClick={() => add(false)}>Buy Now</button></div>
    </form>
    {showAddons && <div className="sep-pdp__modal" role="dialog" aria-modal="true" aria-labelledby="gift-addons-title" onClick={() => setShowAddons(false)}><div className="sep-pdp__modal-panel" onClick={e => e.stopPropagation()}><button ref={close} type="button" className="sep-pdp__modal-close" aria-label="Close gift add-ons" onClick={() => setShowAddons(false)}>×</button><h2 className="sep-pdp__modal-title" id="gift-addons-title">Complete your gift with these add-ons</h2><p className="sep-pdp__modal-sub">Popular pairings our customers love — pick any, or skip</p>{addons.map(addon => <label className="sep-pdp__addon" key={addon.slug}><input type="checkbox" checked={selectedAddons.includes(addon.slug)} onChange={e => setSelectedAddons(current => e.target.checked ? [...current, addon.slug] : current.filter(slug => slug !== addon.slug))}/><img src={addon.image} alt="" width="64" height="64"/><span className="sep-pdp__addon-text"><strong>{addon.title}</strong><span>{money(addon.price)}</span></span></label>)}<div className="sep-pdp__modal-actions"><button className="sep-pdp__btn sep-pdp__btn--ghost" onClick={() => add(false)}>Skip</button><button className="sep-pdp__btn sep-pdp__btn--solid" onClick={() => add(true)}>Add &amp; Continue</button></div></div></div>}
  </div>;
}
