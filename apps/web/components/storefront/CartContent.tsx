import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";

export default function CartContent() { return <>
<main className={"store-state-page"}>
<h1>{"Your Cart"}</h1>
<p>{"A little happiness, ready to come home."}</p>
<div id={"store-state-root"}>
</div>
</main>
</>; }
