import Link from 'next/link';
export default function PageHero({ title, description, crumb = title, crumbHref, currentLabel }: {
    title: string;
    description?: string;
    crumb?: string;
    crumbHref?: string;
    currentLabel?: string;
}) {
    return <section className="toy-contact-page toy-contact-hero sep-collection-hero" data-toy-contact-page data-toy-contact-hero><div className="toy-contact-container"><div className="toy-contact-hero__inner" style={{ backgroundColor: '#ffe5bd' }}>
    <div className="toy-contact-hero__media toy-contact-hero__media--left toy-contact-parallax-scene"><div className="toy-contact-parallax-layer" data-depth="0.12"><img src="/toyshutch/2be011f0cff80286.png" width="700" height="725" alt="" className="toy-contact-hero__image"/></div></div>
    <div className="toy-contact-hero__content" data-toy-hero-content><div className="toy-contact-hero__breadcrumb" data-toy-hero-breadcrumb><Link href="/">Home</Link><span aria-hidden="true">&gt;</span>{crumbHref ? <Link href={crumbHref}>{crumb}</Link> : <span aria-current="page">{crumb}</span>}{currentLabel && <><span aria-hidden="true">&gt;</span><span aria-current="page">{currentLabel}</span></>}</div><h1 className="toy-contact-hero__title" data-toy-hero-title style={{ color: '#27aae1' }}>{title}</h1>{description && <div className="toy-contact-hero__description" data-toy-hero-description><p>{description}</p></div>}</div>
    <div className="toy-contact-hero__media toy-contact-hero__media--right toy-contact-parallax-scene"><div className="toy-contact-parallax-layer" data-depth="0.10"><img src="/toyshutch/86623ecc695c8a95.png" width="700" height="724" alt="" className="toy-contact-hero__image"/></div></div>
  </div></div></section>;
}
