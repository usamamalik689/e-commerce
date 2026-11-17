import type { Policy } from '@/types/store';
import RichText from '@/components/shared/rich-text';
import PageHero from '@/components/shared/page-hero';
import { refundSections } from '@/data/refund-policy';
export default function PolicyPage({ policy }: {
    policy: Policy;
}) {
    if (policy.slug === 'refund-policy') return <main id="MainContent" data-template="page"><PageHero title="Refund Policy" description="Last updated: August 6, 2026"/><section className="toy-privacy-policy"><div className="toy-privacy-policy__container"><div className="toy-privacy-policy__intro rte"><p>At Toys Hutch, we want you and your little ones to be completely happy with every purchase. If you&apos;re not satisfied, we&apos;re here to help.</p></div><div className="toy-privacy-policy__sections">{refundSections.map(section => <article className="toy-privacy-policy__section" key={section.heading}><h2 className="toy-privacy-policy__heading">{section.heading}</h2><div className="toy-privacy-policy__content rte">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></article>)}</div></div></section></main>;
    return <main id="MainContent" data-template="page"><div className="page-width main-page--wide policy-page"><h1 className="main-page-title page-title h0">{policy.title}</h1><div className="rte main-page-content"><RichText nodes={policy.body}/></div></div></main>;
}
