import HomePage from '@/features/home/home-page';
import { pageStyles } from '@/data/page-styles';
export const metadata = { title: "Toys Hutch | Plush Toys in Pakistan" };
export default function Page() { return <><link rel="stylesheet" href={pageStyles.home}/><HomePage /></>; }
