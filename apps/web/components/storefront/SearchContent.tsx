import { ProductResults } from './product-results';
import { items } from './catalog-all';
import Link from 'next/link';
export default function SearchContent() { return <main className={"store-search-page"}>
<header>
<Link href={"/"}>Home</Link>
<h1>Find your kind of cute</h1>
<p>Discover your next cuddle companion.</p>
<form data-store-search>
<input type={"search"} name={"q"} placeholder={"Search teddy bears, pandas, plushies…"} aria-label={"Search products"} />
<button type={"submit"}>Search</button>
</form>
</header>
<section className={"sep-products"}>
<ProductResults items={items} search />
</section>
</main>; }
