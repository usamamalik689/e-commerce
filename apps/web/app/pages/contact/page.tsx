import ContactPage from '@/features/information/contact-page';
import { pageStyles } from '@/data/page-styles';
export const metadata = { title: "Contact | Toys Hutch" };
export default function Page() { return <><link rel="stylesheet" href={pageStyles.contact}/><ContactPage /></>; }
