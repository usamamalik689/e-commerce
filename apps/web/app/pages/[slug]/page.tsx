import { notFound } from 'next/navigation';
import { policies } from '@/data/policies';
import { pageStyles } from '@/data/page-styles';
import PolicyPage from '@/features/information/policy-page';
type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return policies.map(policy => ({ slug: policy.slug })); }
export async function generateMetadata({ params }: Props) { const { slug } = await params; return { title: policies.find(item => item.slug === slug)?.title || 'Page not found' }; }
export default async function Page({ params }: Props) { const { slug } = await params; const policy = policies.find(item => item.slug === slug); if (!policy)
    notFound(); return <><link rel="stylesheet" href={pageStyles.policy}/><PolicyPage policy={policy}/></>; }
