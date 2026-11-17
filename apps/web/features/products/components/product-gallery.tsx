'use client';
import { useState } from 'react';
import type { Product } from '@/types/store';
export default function ProductGallery({ images }: {
    images: Product['gallery'];
}) {
    const [active, setActive] = useState(0);
    return <div className="sep-pdp__gallery"><div className="sep-pdp__stage">{images.map((image, index) => <div key={image.src} className={'sep-pdp__slide' + (index === active ? ' is-active' : '')}><img src={image.src} alt={image.alt} width="1200" height="1200" className="sep-pdp__image" loading={index === 0 ? 'eager' : 'lazy'} sizes="(max-width: 989px) 92vw, 45vw"/></div>)}</div><ul className="sep-pdp__thumbs">{images.map((image, index) => <li key={image.src}><button type="button" className={'sep-pdp__thumb' + (index === active ? ' is-active' : '')} onClick={() => setActive(index)} aria-label={`Show image ${index + 1}`} aria-pressed={active === index}><img src={image.thumbnail} alt="" width="300" height="300" loading="lazy"/></button></li>)}</ul></div>;
}
