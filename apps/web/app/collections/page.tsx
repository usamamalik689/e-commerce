import CollectionDirectory from '@/features/collections/collection-directory';
import { pageStyles } from '@/data/page-styles';
export const metadata = { title: "Collections | Toys Hutch" };
export default function Page() { return <><link rel="stylesheet" href={pageStyles.collections}/><CollectionDirectory /></>; }
