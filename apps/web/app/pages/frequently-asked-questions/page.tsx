import FaqPage from '@/features/information/faq-page';
import { pageStyles } from '@/data/page-styles';
export const metadata = { title: "FAQs | Toys Hutch" };
export default function Page() { return <><link rel="stylesheet" href={pageStyles.faq}/><FaqPage /></>; }
