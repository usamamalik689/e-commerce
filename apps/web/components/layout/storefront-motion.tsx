'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function StorefrontMotion() {
    const pathname = usePathname();
    const search = useSearchParams();
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger, SplitText);
        let disposed = false;
        let context: gsap.Context | undefined;
        const splits: SplitText[] = [];
        const unbind: (() => void)[] = [];
        const animated = new WeakSet<Element>();
        const desktop = window.matchMedia('(min-width: 990px) and (hover: hover)').matches;
        const run = () => {
            if (disposed) return;
            context = gsap.context(() => {
                const reveal = (selector: string, vars: gsap.TweenVars = {}) => {
                    document.querySelectorAll<HTMLElement>(selector).forEach((el, index) => {
                        if (animated.has(el)) return;
                        animated.add(el);
                        if (window.scrollY === 0 && el.getBoundingClientRect().top < window.innerHeight) return;
                        gsap.set(el, { transition: 'none' });
                        gsap.from(el, { opacity: 0, y: 48, duration: .9, ease: 'power3.out', delay: (index % 4) * .12, clearProps: 'transform,opacity,visibility,transition', ...vars, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
                    });
                };
                document.querySelectorAll<HTMLElement>('.sep-products__heading, .sep-everything__heading, .sep-budget__heading, .sep-find__heading, .sep-gift__heading, .sep-reels__heading, .newsletter-cta__heading, .sep-banner__heading').forEach(heading => {
                    const split = SplitText.create(heading, { type: 'words', mask: 'words', wordsClass: 'sep-wi' });
                    splits.push(split);
                    const pop = heading.matches('.sep-budget__heading, .sep-gift__heading, .newsletter-cta__heading');
                    const drop = heading.matches('.sep-find__heading, .sep-reels__heading');
                    gsap.from(split.words, { ...(pop ? { scale: .4, opacity: 0, duration: .8, ease: 'back.out(2.2)' } : { yPercent: drop ? -115 : 115, rotation: drop ? -4 : 4, duration: .85, ease: drop ? 'bounce.out' : 'power4.out' }), stagger: .07, scrollTrigger: { trigger: heading, start: 'top 88%', once: true } });
                });
                reveal('main .sep-products__card', { y: 90, scale: .94, duration: .95 });
                reveal('.sep-products__badge', { scale: 0, rotation: -12, y: 0, duration: .6, ease: 'back.out(2.4)', delay: .5 });
                reveal('.sep-products__description, .sep-products__view-all', { y: 22, duration: .8, delay: .2 });
                reveal('.sep-budget__card', { x: -120, y: 0, rotation: -4, duration: 1 });
                reveal('.sep-find__item', { y: -120, scale: .7, rotation: 10, duration: 1.1, ease: 'bounce.out' });
                reveal('.sep-gift__item', { scale: .2, rotation: -90, y: 0, duration: 1, ease: 'back.out(1.8)' });
                reveal('.sep-everything__item', { scale: .6, y: 40, ease: 'back.out(1.7)' });
                reveal('.sep-filter', { x: -36, y: 0, duration: .7 });
                reveal('.sep-collection__bar, .sep-blog__bar', { y: 24, duration: .7 });
                reveal('.sep-blog-card', { y: 80, scale: .94 });
                reveal('.sep-pdp__gallery', { x: -50, y: 0 });
                reveal('.sep-pdp__info > *, .sep-article__content > *', { y: 30, duration: .8 });
                reveal('.sep-pdp__trust, .sep-pdp__description, .sep-pdp__tabs, .sep-pdp__reviews', { y: 50 });
                reveal('.sep-testimonials__item', { x: 140, y: 0, rotation: 5, duration: 1 });
                reveal('.sep-reels__splide', { x: 90, y: 0, duration: 1.1 });
                reveal('.newsletter-cta__text, .newsletter-cta__form-wrap', { scale: .9, y: 0, duration: .85 });
                reveal('.toyshutch-footer__card', { y: 70, duration: 1 });
                if (desktop) {
                    const progress = document.createElement('div');
                    progress.className = 'sep-progress';
                    progress.setAttribute('aria-hidden', 'true');
                    document.body.appendChild(progress);
                    unbind.push(() => progress.remove());
                    gsap.to(progress, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: .2 } });
                    document.querySelectorAll<HTMLElement>('.sep-banner__btn, .sep-products__view-all, .sep-gift__button, .sep-reels__button').forEach(button => {
                        const x = gsap.quickTo(button, 'x', { duration: .4, ease: 'power3.out' });
                        const y = gsap.quickTo(button, 'y', { duration: .4, ease: 'power3.out' });
                        const move = (event: MouseEvent) => { const rect = button.getBoundingClientRect(); x(gsap.utils.clamp(-3, 3, (event.clientX - rect.left - rect.width / 2) * .05)); y(gsap.utils.clamp(-4, 4, (event.clientY - rect.top - rect.height / 2) * .1)); };
                        const leave = () => { x(0); y(0); };
                        button.addEventListener('mousemove', move);
                        button.addEventListener('mouseleave', leave);
                        unbind.push(() => { button.removeEventListener('mousemove', move); button.removeEventListener('mouseleave', leave); });
                    });
                    gsap.utils.toArray<HTMLElement>('.sep-budget__card-media, .sep-testimonials__avatar').forEach((el, index) => {
                        gsap.to(el, { y: 6, rotation: index % 2 ? -2 : 2, duration: 2.6 + index % 3 * .4, delay: index * .2, ease: 'sine.inOut', repeat: -1, yoyo: true });
                    });
                    gsap.utils.toArray<HTMLElement>('.toy-contact-hero__media').forEach((el, index) => {
                        gsap.to(el, { y: index % 2 ? -36 : 36, ease: 'none', scrollTrigger: { trigger: el.closest('.toy-contact-hero'), start: 'top top', end: 'bottom top', scrub: true } });
                    });
                }
                ScrollTrigger.refresh();
            });
        };
        void document.fonts.ready.then(run);
        const cards = new MutationObserver(records => {
            if (!context || !records.some(record => [...record.addedNodes].some(node => node instanceof Element && node.matches('.sep-products__card, .sep-blog-card')))) return;
            context.add(() => {
                document.querySelectorAll<HTMLElement>('main .sep-products__card, main .sep-blog-card').forEach(card => {
                    if (animated.has(card)) return;
                    animated.add(card);
                    gsap.from(card, { opacity: 0, y: 90, scale: .94, duration: .95, ease: 'power3.out', clearProps: 'transform,opacity', scrollTrigger: { trigger: card, start: 'top 86%', once: true } });
                });
                ScrollTrigger.refresh();
            });
        });
        const main = document.querySelector('main');
        if (main) cards.observe(main, { childList: true, subtree: true });
        return () => { disposed = true; cards.disconnect(); unbind.forEach(cleanup => cleanup()); context?.revert(); splits.forEach(split => split.revert()); };
    }, [pathname, search]);
    return null;
}
