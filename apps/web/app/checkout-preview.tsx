'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { parsePrice } from '@/lib/money';
type CartItem = { id: string; title: string; image: string; price: string; quantity: number };

export default function CheckoutPreview() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [message, setMessage] = useState('');
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem('toyshutch-cart') || '[]')); } catch {} }, []);
  const total = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
  return <div className="store-checkout">
    <form onSubmit={event => { event.preventDefault(); event.stopPropagation(); setMessage('This is a checkout preview. No order or payment has been submitted.'); }}>
      <Link href="/cart">← Back to cart</Link><h2>Contact</h2>
      <label>Email or mobile phone number<input required name="contact" autoComplete="email" placeholder="Email or mobile phone number" /></label>
      <h2>Delivery</h2><label>Country / Region<select name="country" defaultValue="Pakistan"><option>Pakistan</option></select></label>
      <div className="store-field-pair"><label>First name<input required name="firstName" autoComplete="given-name" /></label><label>Last name<input required name="lastName" autoComplete="family-name" /></label></div>
      <label>Address<input required name="address" autoComplete="street-address" placeholder="House number and street" /></label>
      <label>Apartment, suite, etc. (optional)<input name="apartment" autoComplete="address-line2" /></label>
      <div className="store-field-pair"><label>City<input required name="city" autoComplete="address-level2" /></label><label>Postal code<input name="postalCode" autoComplete="postal-code" /></label></div>
      <label>Phone<input required type="tel" name="phone" autoComplete="tel" placeholder="03XX XXXXXXX" /></label>
      <h2>Payment</h2><div className="store-payment"><label><input type="radio" name="payment" defaultChecked /> Cash on Delivery (COD)</label><p>Pay when your cuddle companion arrives.</p></div>
      <p className="store-checkout-note">Checkout preview — orders and payments are not connected yet.</p>
      <button type="submit" disabled={!items.length}>Preview order · Rs.{total.toLocaleString('en-PK')}</button>
      {message && <p role="status">{message}</p>}
    </form>
    <aside><h2>Order summary</h2>{!items.length && <p>Your cart is empty. <Link href="/collections/all">Find your kind of cute →</Link></p>}
      {items.map(item => <article className="home-cart-item" key={item.id}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title} width="72" height="72" /><div><h3>{item.title}</h3><p>{item.quantity} × {item.price}</p></div>
      </article>)}
      <p className="store-checkout-total">Subtotal <strong>Rs.{total.toLocaleString('en-PK')}</strong></p><p>Shipping calculated when ordering is enabled.</p>
      <p className="store-checkout-total">Total <strong>Rs.{total.toLocaleString('en-PK')}</strong></p>
    </aside>
  </div>;
}
