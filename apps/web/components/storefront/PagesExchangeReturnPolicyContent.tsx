import type { CSSProperties } from "react";
import Link from "next/link";
import { ProductResults } from "@/components/storefront/product-results";

export default function PagesExchangeReturnPolicyContent() { return <>
<main id={"MainContent"} className={"content-for-layout focus-none"} role={"main"} tabIndex={-1} data-template={"page"}>
<section id={"shopify-section-template--23854184431875__main"} className={"shopify-section section"}>
<div className={"page-width main-page--wide section-template--23854184431875__main-padding"}>
<h1 className={"main-page-title page-title h0 scroll-trigger animate--fade-in"}>{"\n    Exchange & Return Policy\n  "}</h1>
<div className={"rte main-page-content scroll-trigger animate--slide-in"}>
<p>{"At Toyshutch, customer satisfaction is our top priority. We aim to provide a smooth and reliable shopping experience with a simple and transparent Exchange & Return Policy."}</p>
<h2>{"Eligibility"}</h2>
<ul>
<li>{"Items purchased from Toyshutch are eligible for exchange within "}<strong>{"7 days"}</strong>{" of delivery."}</li>
<li>{"Items must be unused, unwashed, and in original condition with all tags intact."}</li>
<li>{"Products must be returned in their original packaging."}</li>
<li>{"A valid order confirmation or proof of purchase is required."}</li>
<li>{"Items purchased on sale or discount are not eligible for exchange or return."}</li>
<li>{"For damaged, defective, or incorrect items, customers must provide clear proof (images/videos)."}</li>
</ul>
<h2>{"Exchange Policy"}</h2>
<ul>
<li>{"Exchange requests must be made within "}<strong>{"7 days"}</strong>{" of delivery."}</li>
<li>{"To initiate an exchange, contact us at [your email] with your order number and reason."}</li>
<li>{"All exchange requests are subject to product condition verification."}</li>
<li>{"Toyshutch will arrange a courier pick-up of the item (where applicable)."}</li>
<li>{"Once the item is received and inspected, the replacement product will be dispatched."}</li>
<li>{"The exchange process typically takes 5–7 working days."}</li>
</ul>
<h2>
<span style={{"color": "#2BA8D9"} as CSSProperties}>{"Important Notes:"}</span>
</h2>
<ul>
<li>{"Exchanges are subject to product availability."}</li>
<li>{"If the requested item is out of stock, a store credit voucher of equal value will be issued."}</li>
<li>{"Customers may exchange for:\n    "}<ul>
<li>{"An item of equal value, or"}</li>
<li>{"A higher-value item by paying the difference"}</li>
</ul>
</li>
</ul>
<h2>{"Return Policy"}</h2>
<ul>
<li>{"Returns are only accepted if:"}</li>
<li>{"The item received is damaged or defective, or"}</li>
<li>{"The wrong product was delivered"}</li>
<li>{"Return requests must be submitted within "}<strong>{"7 days"}</strong>{" of delivery."}</li>
<li>{"Customers must provide:"}</li>
<li>{"Order confirmation"}</li>
<li>{"Proof of issue (images/videos)"}</li>
<li>{"The product must be:"}</li>
<li>{"Unused"}</li>
<li>{"In original condition"}</li>
<li>{"With all tags and packaging intact"}</li>
<li>{"After verification, Toyshutch will arrange a return pick-up."}</li>
</ul>
<h2>{"Refund Policy"}</h2>
<p>{"Cash refunds are not offered."}<br />{"Approved returns will be issued as a store credit voucher."}<br />{"Store credits:"}</p>
<ul>
<li>{"Are sent via email"}</li>
<li>{"Can be used for future purchases on Toyshutch"}</li>
<li>{"Are valid for a limited time (e.g., 30 days – customizable)"}</li>
</ul>
<h2>{"Contact us"}</h2>
<p>{"For any exchange or return queries, please contact:"}<br />
<a href={"mailto:info@toyshutch.pk"}>{"info@toyshutch.pk"}</a>
</p>
</div>
</div>
</section>
</main>
</>; }
