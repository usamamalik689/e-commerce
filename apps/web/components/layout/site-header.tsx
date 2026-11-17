import { Suspense } from "react";
import NavigationState from "./navigation-state";
import CategoryMenu from "./category-menu";
import { SearchSuggestions } from "@/features/search/search-suggestions";
import { catalog as allItems } from "@/data/catalog";
import type { CSSProperties } from "react";
import Link from "next/link";
export default function SiteHeader() {
    return <>
    <section id={"shopify-section-sections--23854184726787__toyshutch-announcement"} className={"shopify-section shopify-section-group-header-group section-sep-announcement"}>
    <div className={"sep-announcement"} style={{ "--sep-ann-bg": "#f49d37", "--sep-ann-color": "#ffffff" } as CSSProperties}>
    <div className={"sep-announcement__inner"}>
    <p className={"sep-announcement__text"}>{"11.11 Sale Live! Up to 55% OFF + COD Available Across Pakistan. ❤️🧸"}</p>
    <a className={"sep-announcement__phone"} href={"https://wa.me/923338437922"} target={"_blank"} rel={"noopener noreferrer"}>
    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
    <path d={"M3 21l1.65-4.8A8.5 8.5 0 1 1 8 19.4L3 21z"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinejoin={"round"}>
    </path>
    <path d={"M9 8.5c0 3.2 2.8 6 6 6l1-1.5-2-1-1 .8c-.9-.4-1.7-1.2-2.1-2.1l.8-1-1-2L9 8.5z"} fill={"currentColor"}>
    </path>
    </svg>
    <span>{"0333 8437922"}</span>
    </a>
    </div>
    </div>
    </section>
    <section id={"shopify-section-sections--23854184726787__toyshutch-header"} className={"shopify-section shopify-section-group-header-group section-sep-header"}>
    <header id={"SepHeader-sections--23854184726787__toyshutch-header"} className={"sep-header section-sections--23854184726787__toyshutch-header"} data-sep-header={""}>
    <div className={"sep-header__shell"}>
    <div className={"sep-header__layout"}>
    <div className={"sep-header__brand"}>
    <Link className={"sep-header__logo-link"} href={"/"} aria-label={"Toys Hutch home"} prefetch={false}>
    <img src={"/toyshutch/a3cedf226a126a08.png"} alt={"Toys Hutch"} width={"500"} height={"259"} loading={"eager"} className={"sep-header__logo"} sizes={"(max-width: 749px) 160px, 240px"}/>
    </Link>
    </div>
    <Suspense fallback={null}><NavigationState /></Suspense>
    <nav className={"sep-header__nav"} id={"SepHeaderNav-sections--23854184726787__toyshutch-header"} aria-label={"Primary navigation"}>
    <ul className={"sep-header__menu"} role={"list"}>
    <li className={"sep-header__menu-item sep-header__menu-item--has-dropdown sep-header__menu-item--mega"} data-sep-mega={""}>
    <Link className={"sep-header__menu-link"} href={"/collections/all?view=category"} aria-haspopup={"true"} aria-expanded={"false"} data-sep-mega-toggle={""} prefetch={false}>
    <span data-text={"Shop by Category"}>{"Shop by Category"}</span>
    <svg className={"sep-header__menu-chevron"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
    <path d={"M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"} stroke={"#1D1D1D"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    </svg>
    </Link>
    <div className={"sep-header__dropdown sep-header__dropdown--mega"}>
    <div className={"sep-header__mega"}>
    <p className={"sep-header__mega-title"}>{"Shop by Category"}</p>
    <div className={"sep-header__mega-grid"}>
    <CategoryMenu />



    <div className={"sep-header__mega-col sep-header__mega-col--promo"}>
    <Link className={"sep-header__mega-heading"} href={"/collections/all"} prefetch={false}>{"All Products"}</Link>
    <Link className={"sep-header__mega-promo"} href={"/collections/all"} prefetch={false}>
    <img src={"/toyshutch/bbbe3c63c21895ae.png"} alt={""} width={"500"} height={"518"} loading={"lazy"} className={"sep-header__mega-promo-img"} sizes={"180px"}/>
    <span className={"sep-header__mega-promo-text"}>{"Browse All Products"}</span>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </li>
    <li className={"sep-header__menu-item"}>
    <Link className={"sep-header__menu-link"} href={"/collections/all"} prefetch={false}>
    <span data-text={"Shop"}>{"Shop"}</span>
    </Link>
    </li>
    <li className={"sep-header__menu-item"}>
    <Link className={"sep-header__menu-link"} href={"/collections/new-arrivals?view=new-arrivals"} prefetch={false}>
    <span data-text={"New Arrivals"}>{"New Arrivals"}</span>
    </Link>
    </li>
    <li className={"sep-header__menu-item sep-header__menu-item--has-dropdown sep-header__menu-item--anchor"}>
    <Link className={"sep-header__menu-link"} href={"/collections"} prefetch={false}>
    <span data-text={"Collections"}>{"Collections"}</span>
    <svg className={"sep-header__menu-chevron"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
    <path d={"M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"} stroke={"#1D1D1D"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    </svg>
    </Link>
    <div className={"sep-header__dropdown"}>
    <div className={"sep-header__dropdown-grid sep-header__dropdown-grid--list"}>
    <p className={"sep-header__dropdown-title"}>{"Collections"}</p>
    <ul className={"sep-header__submenu sep-header__submenu--two-col"} role={"list"}>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/anniversary-gift-ideas"} prefetch={false}>{"\r\n                            Anniversary Gifts ❤️\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/birthday-gift-for-girls"} prefetch={false}>{"\r\n                            Birthday Gifts 🎂\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/gifts-for-her"} prefetch={false}>{"\r\n                            Gifts for Her 🌸\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/gifts-for-him"} prefetch={false}>{"\r\n                            Gifts for Him 💙\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/newborn-baby-gifts"} prefetch={false}>{"\r\n                            Baby Gifts 👶\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/newborn-baby-gifts"} prefetch={false}>{"\r\n                            Newborn Gifts 🍼\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/valentine-day-gift"} prefetch={false}>{"\r\n                            Valentine's Day Gifts 💝\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/friendship-day-gifts"} prefetch={false}>{"\r\n                            Friendship Gifts 🫶\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/personalized-gifts"} prefetch={false}>{"\r\n                            Personalized Gifts 🌸\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/all?filter.v.price.lte=3000"} prefetch={false}>{"\r\n                            Gift Ideas Under Rs. 3,000\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/all?filter.v.price.lte=5000"} prefetch={false}>{"\r\n                            Gift Ideas Under Rs. 5,000\r"}</Link>
    </li>
    <li>
    <Link className={"sep-header__dropdown-link"} href={"/collections/all?view=best-sellers&sort_by=best-selling"} prefetch={false}>{"\r\n                            Best Gift Ideas in Pakistan\r"}</Link>
    </li>
    </ul>
    </div>
    </div>
    </li>
    <li className={"sep-header__menu-item"}>
    <Link className={"sep-header__menu-link"} href={"/blogs/news"} prefetch={false}>
    <span data-text={"Blogs"}>{"Blogs"}</span>
    </Link>
    </li>
    <li className={"sep-header__menu-item"}>
    <Link className={"sep-header__menu-link"} href={"/pages/contact"} prefetch={false}>
    <span data-text={"Contact"}>{"Contact"}</span>
    </Link>
    </li>
    </ul>
    </nav>
    <div className={"sep-header__actions"}>
    <button className={"sep-header__icon-link sep-header__search-toggle"} type={"button"} aria-label={"Open search"} aria-haspopup={"dialog"} data-sep-search-open={""}>
    <svg width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
    <path d={"M17 17L21 21"} stroke={"#1D1D1D"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    <path d={"M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"} stroke={"#1D1D1D"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    </svg>
    </button>
    <Link className={"sep-header__icon-link"} href={"/pages/wishlist"} aria-label={"Wishlist"} data-sep-wl-open={""} prefetch={false}>
    <svg width={"26"} height={"26"} viewBox={"0 0 26 26"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
    <path d={"M14.7218 21.6317C13.6933 22.4007 12.3069 22.4007 11.2783 21.6317C8.22195 19.3462 2.16675 14.121 2.16675 9.41898C2.16675 6.3111 4.44745 3.79167 7.58341 3.79167C9.20841 3.79167 10.8334 4.33334 13.0001 6.50001C15.1667 4.33334 16.7917 3.79167 18.4167 3.79167C21.5527 3.79167 23.8334 6.3111 23.8334 9.41898C23.8334 10.598 23.4527 11.8099 22.834 13"} stroke={"#1D1D1D"} strokeWidth={"1.625"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    <path d={"M15.1667 17.3333H18.9584M18.9584 17.3333H22.7501M18.9584 17.3333V13.5417M18.9584 17.3333V21.125"} stroke={"#1D1D1D"} strokeWidth={"1.625"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    </svg>
    <span className={"sep-header__wishlist-count"} aria-hidden={"true"} data-wishlist-count={""} hidden={true}>{"0"}</span>
    </Link>
    <Link className={"sep-header__icon-link sep-header__cart-link"} id={"cart-icon-bubble"} href={"/cart"} aria-label={"Cart"} prefetch={false}>
    <svg width={"26"} height={"26"} viewBox={"0 0 26 26"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
    <path d={"M8.6665 17.3333L18.1133 16.5461C21.0692 16.2998 21.7327 15.6542 22.0603 12.7063L22.7498 6.5"} stroke={"#1D1D1D"} strokeWidth={"1.625"} strokeLinecap={"round"}>
    </path>
    <path d={"M6.5 6.5H23.8333"} stroke={"#1D1D1D"} strokeWidth={"1.625"} strokeLinecap={"round"}>
    </path>
    <path d={"M6.49992 23.8333C7.69654 23.8333 8.66658 22.8633 8.66658 21.6667C8.66658 20.47 7.69654 19.5 6.49992 19.5C5.3033 19.5 4.33325 20.47 4.33325 21.6667C4.33325 22.8633 5.3033 23.8333 6.49992 23.8333Z"} stroke={"#1D1D1D"} strokeWidth={"1.625"}>
    </path>
    <path d={"M18.4167 23.8333C19.6133 23.8333 20.5833 22.8633 20.5833 21.6667C20.5833 20.47 19.6133 19.5 18.4167 19.5C17.22 19.5 16.25 20.47 16.25 21.6667C16.25 22.8633 17.22 23.8333 18.4167 23.8333Z"} stroke={"#1D1D1D"} strokeWidth={"1.625"}>
    </path>
    <path d={"M8.6665 21.6667H16.2498"} stroke={"#1D1D1D"} strokeWidth={"1.625"} strokeLinecap={"round"}>
    </path>
    <path d={"M2.1665 2.16667H3.213C4.23641 2.16667 5.12849 2.84331 5.3767 3.80785L8.5999 16.3329C8.76278 16.9659 8.62339 17.6363 8.22043 18.1584L7.18465 19.5"} stroke={"#1D1D1D"} strokeWidth={"1.625"} strokeLinecap={"round"}>
    </path>
    </svg>
    <span className={"sep-header__cart-count"} aria-hidden={"true"} hidden={true}>{"0"}</span>
    </Link>
    <button className={"sep-header__menu-toggle"} type={"button"} aria-expanded={"false"} aria-controls={"SepHeaderNav-sections--23854184726787__toyshutch-header"} aria-label={"Open menu"} data-menu-toggle={""}>
    <span>
    </span>
    <span>
    </span>
    <span>
    </span>
    </button>
    </div>
    </div>
    </div>
    </header>
    <div className={"sep-search-ov"} data-sep-search={""} hidden={true} role={"dialog"} aria-modal={"true"} aria-labelledby={"SepSearchTitle"} data-results-url={"/search"}>
    <div className={"sep-search-ov__backdrop"} data-sep-search-close={""}>
    </div>
    <div className={"sep-search-ov__panel"}>
    <div className={"sep-search-ov__inner"}>
    <div className={"sep-search-ov__head"}>
    <h2 className={"sep-search-ov__title"} id={"SepSearchTitle"}>{"Search Products on ToysHutch"}</h2>
    <button className={"sep-search-ov__close"} type={"button"} aria-label={"Close search"} data-sep-search-close={""}>
    <svg width={"28"} height={"28"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
    <path d={"M6 6l12 12M18 6L6 18"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"}>
    </path>
    </svg>
    </button>
    </div>
    <form className={"sep-search-ov__form"} method={"get"} role={"search"} data-sep-search-form={""}>
    <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} aria-hidden={"true"}>
    <path d={"M17 17L21 21"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    <path d={"M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    </svg>
    <label className={"visually-hidden"} htmlFor={"SepSearchInput"}>{"Search for teddy bears, plush toys..."}</label>
    <input id={"SepSearchInput"} type={"search"} name={"q"} placeholder={"Search for teddy bears, plush toys..."} autoComplete={"off"} data-sep-search-input={""}/>
    <input type={"hidden"} name={"type"} defaultValue={"product"}/>
    </form>
    <div className={"sep-search-ov__popular"}>
    <span className={"sep-search-ov__popular-label"}>{"Popular Searches"}</span>
    <ul className={"sep-search-ov__chips"} role={"list"}>
    <li>
    <button className={"sep-search-ov__chip"} type={"button"} data-sep-search-term={"Teddy Bear"}>{"Teddy Bear"}</button>
    </li>
    <li>
    <button className={"sep-search-ov__chip"} type={"button"} data-sep-search-term={"Plushies"}>{"Plushies"}</button>
    </li>
    <li>
    <button className={"sep-search-ov__chip"} type={"button"} data-sep-search-term={"Birthday"}>{"Birthday"}</button>
    </li>
    <li>
    <button className={"sep-search-ov__chip"} type={"button"} data-sep-search-term={"Anniversary"}>{"Anniversary"}</button>
    </li>
    <li>
    <button className={"sep-search-ov__chip"} type={"button"} data-sep-search-term={"Gifts"}>{"Gifts"}</button>
    </li>
    </ul>
    </div>
    <h3 className={"sep-search-ov__heading"} data-sep-search-heading={""} data-default={"Looking for these?"}>{"Looking for these?"}</h3>
    <div className={"sep-search-ov__results sep-products"} data-sep-search-results={""}>
    <div className={"sep-search-ov__grid"} data-sep-search-default={""}><SearchSuggestions items={allItems}/></div>
    <div className={"sep-search-ov__live"} data-sep-search-live={""} hidden={true}>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className={"sep-wl"} data-sep-wl={""} data-shop-url={"/collections/all"} role={"dialog"} aria-modal={"true"} aria-labelledby={"SepWlTitle"} hidden={true}>
    <div className={"sep-wl__overlay"} data-sep-wl-overlay={""}>
    </div>
    <aside className={"sep-wl__panel"}>
    <div className={"sep-wl__head"}>
    <span className={"sep-wl__head-icon"} aria-hidden={"true"}>
    <svg width={"22"} height={"22"} viewBox={"0 0 26 26"} fill={"none"}>
    <path d={"M14.7218 21.6317C13.6933 22.4007 12.3069 22.4007 11.2783 21.6317C8.22195 19.3462 2.16675 14.121 2.16675 9.41898C2.16675 6.3111 4.44745 3.79167 7.58341 3.79167C9.20841 3.79167 10.8334 4.33334 13.0001 6.50001C15.1667 4.33334 16.7917 3.79167 18.4167 3.79167C21.5527 3.79167 23.8334 6.3111 23.8334 9.41898C23.8334 10.598 23.4527 11.8099 22.834 13"} stroke={"currentColor"} strokeWidth={"1.625"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    <path d={"M15.1667 17.3333H22.7501M18.9584 13.5417V21.125"} stroke={"currentColor"} strokeWidth={"1.625"} strokeLinecap={"round"} strokeLinejoin={"round"}>
    </path>
    </svg>
    </span>
    <h2 className={"sep-wl__title"} id={"SepWlTitle"}>{"Wishlist"}</h2>
    <button className={"sep-wl__close"} type={"button"} aria-label={"Close wishlist"} data-sep-wl-close={""}>{"×"}</button>
    </div>
    <div className={"sep-wl__body"} data-sep-wl-body={""}>
    </div>
    <div className={"sep-wl__foot"} data-sep-wl-foot={""} hidden={true}>
    <button className={"sep-wl__checkout sep-wl__checkout--button"} type={"button"} data-sep-wl-view-cart={""}>{"View Cart ("}<span data-sep-wl-selected-count={""}>{"0"}</span>{")"}</button>
    </div>
    </aside>
    </div>
    </section>
    </>;
}
