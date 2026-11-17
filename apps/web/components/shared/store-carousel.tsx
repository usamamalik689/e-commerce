'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function StoreCarousel({ kind, label, children }: {
    kind: 'gallery' | 'testimonials';
    label: string;
    children: ReactNode;
}) {
    return kind === 'gallery' ? <GalleryCarousel label={label}>{children}</GalleryCarousel> : <DraggableTestimonials label={label}>{children}</DraggableTestimonials>;
}

function GalleryCarousel({ label, children }: { label: string; children: ReactNode }) {
    const [viewport, api] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps', slidesToScroll: 1 });
    const root = useRef<HTMLDivElement>(null);
    const [pages, setPages] = useState<number[]>([]);
    const [selected, setSelected] = useState(0);
    const [paused, setPaused] = useState(false);
    const [inView, setInView] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(true);
    const [dragging, setDragging] = useState(false);
    const sync = useCallback(() => {
        if (!api) return;
        setPages(api.scrollSnapList());
        setSelected(api.selectedScrollSnap());
    }, [api]);

    useEffect(() => {
        if (!api) return;
        const down = () => setDragging(true);
        const up = () => setDragging(false);
        api.on('select', sync).on('reInit', sync).on('pointerDown', down).on('pointerUp', up);
        // Subscribe before the initial notification so dots stay correct on resize too.
        api.emit('reInit');
        return () => { api.off('select', sync).off('reInit', sync).off('pointerDown', down).off('pointerUp', up); };
    }, [api, sync]);

    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReducedMotion(media.matches);
        media.addEventListener('change', update);
        const observer = new IntersectionObserver(entries => setInView(entries[0].isIntersecting), { threshold: .1 });
        if (root.current) observer.observe(root.current);
        // External preference state is read asynchronously after hydration.
        const frame = requestAnimationFrame(update);
        return () => { cancelAnimationFrame(frame); observer.disconnect(); media.removeEventListener('change', update); };
    }, []);

    useEffect(() => {
        if (!api || paused || dragging || !inView || reducedMotion) return;
        const timer = window.setInterval(() => { if (!document.hidden) api.scrollNext(); }, 3500);
        return () => clearInterval(timer);
    }, [api, paused, dragging, inView, reducedMotion]);

    useEffect(() => {
        if (!root.current) return;
        const videos = [...root.current.querySelectorAll<HTMLVideoElement>('video')];
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
            const video = entry.target as HTMLVideoElement;
            if (!entry.isIntersecting || reducedMotion || document.hidden) { video.pause(); return; }
            const source = video.querySelector('source');
            if (source && !source.getAttribute('src') && source.dataset.src) { source.src = source.dataset.src; video.load(); }
            void video.play().catch(() => { /* The poster remains visible if autoplay is unavailable. */ });
        }), { threshold: .35 });
        const ready = (event: Event) => (event.target as HTMLVideoElement).parentElement?.classList.add('is-video-ready');
        videos.forEach(video => { video.addEventListener('playing', ready); observer.observe(video); });
        const hide = () => { if (document.hidden) videos.forEach(video => video.pause()); else { observer.disconnect(); videos.forEach(video => observer.observe(video)); } };
        document.addEventListener('visibilitychange', hide);
        return () => { observer.disconnect(); document.removeEventListener('visibilitychange', hide); videos.forEach(video => { video.pause(); video.removeEventListener('playing', ready); }); };
    }, [reducedMotion]);

    return <div ref={root} className="sep-reels__splide store-carousel" role="region" aria-roledescription="carousel" aria-label={label}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
        <div ref={viewport} className={'splide__track store-carousel__viewport' + (dragging ? ' is-dragging' : '')} tabIndex={0} aria-label={`${label}: drag or use left and right arrow keys`}
            onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); event.key === 'ArrowRight' ? api?.scrollNext() : api?.scrollPrev(); } }}
            onClick={event => {
                const video = (event.target as Element).closest('.sep-reels__media')?.querySelector('video');
                if (!video) return;
                const source = video.querySelector('source');
                if (source && !source.getAttribute('src') && source.dataset.src) { source.src = source.dataset.src; video.load(); }
                if (video.paused) void video.play().catch(() => {}); else video.pause();
            }}>
            <ul className="splide__list" role="list">{children}</ul>
        </div>
        <div className="sep-reels__pagination" aria-label="Gallery pages">{pages.map((_, index) => <button key={index} className={'sep-reels__page' + (selected === index ? ' is-active' : '')} type="button" aria-label={`Go to carousel page ${index + 1}`} aria-current={selected === index ? 'true' : undefined} onClick={() => api?.scrollTo(index)}/>)}</div>
    </div>;
}

function DraggableTestimonials({ label, children }: { label: string; children: ReactNode }) {
    const gesture = useRef<{ id: number; x: number; scroll: number } | null>(null);
    const [dragging, setDragging] = useState(false);
    return <div className="store-testimonials-carousel" role="region" aria-roledescription="carousel" aria-label={label}>
        <div className={'sep-testimonials__viewport store-reviews-viewport' + (dragging ? ' is-dragging' : '')} tabIndex={0} aria-label={`${label}: drag or use left and right arrow keys`}
            onPointerDown={event => {
                if (event.pointerType !== 'mouse' || event.button !== 0) return;
                event.preventDefault();
                gesture.current = { id: event.pointerId, x: event.clientX, scroll: event.currentTarget.scrollLeft };
                event.currentTarget.setPointerCapture(event.pointerId);
                setDragging(true);
            }}
            onPointerMove={event => {
                if (gesture.current?.id !== event.pointerId) return;
                event.currentTarget.scrollLeft = gesture.current.scroll - (event.clientX - gesture.current.x);
            }}
            onPointerUp={event => { if (gesture.current?.id === event.pointerId) { gesture.current = null; event.currentTarget.releasePointerCapture(event.pointerId); setDragging(false); } }}
            onPointerCancel={() => { gesture.current = null; setDragging(false); }}
            onLostPointerCapture={() => { gesture.current = null; setDragging(false); }}
            onDragStart={event => event.preventDefault()}
            onKeyDown={event => {
                if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
                event.preventDefault();
                event.currentTarget.scrollBy({ left: event.currentTarget.clientWidth * .75 * (event.key === 'ArrowRight' ? 1 : -1), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
            }}>
            <ul className="sep-testimonials__list" role="list">{children}</ul>
        </div>
    </div>;
}
