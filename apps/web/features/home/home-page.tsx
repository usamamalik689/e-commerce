import SaleBanner from './sections/sale-banner';
import TrustBadges from './sections/trust-badges';
import BudgetCategories from './sections/budget-categories';
import ShopCategories from './sections/shop-categories';
import BestSellers from './sections/best-sellers';
import NewArrivals from './sections/new-arrivals';
import GiftingCollections from './sections/gifting-collections';
import SocialGallery from './sections/social-gallery';
import Testimonials from './sections/testimonials';
import Newsletter from './sections/newsletter';
export default function HomePage() {
    return <main id="MainContent" className="content-for-layout focus-none" data-template="index"><SaleBanner />
    <TrustBadges />
    <BudgetCategories />
    <ShopCategories />
    <BestSellers />
    <NewArrivals />
    <GiftingCollections />
    <SocialGallery />
    <Testimonials />
    <Newsletter /></main>;
}
