import AboutPage from '@/features/information/about-page';
import { pageStyles } from '@/data/page-styles';
export const metadata = { title: "About Us | Toys Hutch" };
export default function Page() { return <><link rel="stylesheet" href={pageStyles.about}/><AboutPage /></>; }
