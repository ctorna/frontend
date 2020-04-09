import Home from './components/Home.vue';
import Bcard from './components/business-cards/Bcard.vue';
import Checkout from './components/Checkout.vue';
import LoginRegister from './components/pages/LoginRegister.vue';
import MyAccount from './components/pages/MyAccount.vue';
import Notebook from './components/pages/Notebook.vue';
import Coasters from './components/pages/Coasters.vue';
import Accessories from './components/pages/Accessory.vue';
import CardHolders from './components/pages/CardHolders.vue';
import Stationery from './components/pages/StationeryBox.vue';
import Faq from './components/pages/Faq.vue';
import HowToOrder from './components/pages/HowToOrder.vue';
import FileSetup from './components/pages/FileSetup.vue';
import Tracking from './components/pages/OrderTracking.vue';
import About from './components/pages/About.vue';
import BcardsDesign from './components/pages/BcardsDesign.vue';
import Affiliate from './components/pages/Affiliate.vue';
import CardLogoDesign from './components/pages/CardLogoDesign.vue';
import ClientHappiness from './components/pages/ClientHappiness.vue';
import Quote from './components/pages/Quote.vue';
import Contact from './components/pages/Contact.vue';
import Privacy from './components/pages/Privacy.vue';
import Refer from './components/pages/ReferAndEarn.vue';
import Refund from './components/pages/Refund.vue';
import GoodThings from './components/pages/GoodThings.vue';
import Blog from './components/pages/Blog.vue';
import BlogOne from './components/pages/blog/BlogOne.vue';
import BlogTwo from './components/pages/blog/BlogTwo.vue';
import BlogThree from './components/pages/blog/BlogThree.vue';
import BlogFour from './components/pages/blog/BlogFour.vue';
import BlogFive from './components/pages/blog/BlogFive.vue';
import BlogSix from './components/pages/blog/BlogSix.vue';
import SamplePack from './components/pages/SamplePack.vue';
import StartupCoupons from './components/pages/StartupCoupons.vue';
import Terms from './components/pages/Terms.vue';
import Thanks from './components/pages/ThankYou.vue';
import Treatments from './components/pages/Treatments.vue';
import Franchise from './components/pages/Franchise.vue';
import Reseller from './components/pages/Reseller.vue';
import SMM from './components/pages/SMM.vue';
import StationeryDesign from './components/pages/StationeryDesign.vue';
import WebsiteDevelopment from './components/pages/WebsiteDevelopment.vue';
import { store } from './store/store';

export const routes = [
    { path: '/', name: 'home', component: Home},
    { path: '/login-register', component: LoginRegister },
    { path: '/my-account', component: MyAccount },
    { path: '/notebooks', component: Notebook },
    { path: '/coasters', component: Coasters },
    { path: '/accessories', component: Accessories },
    { path: '/business-card-holder', component: CardHolders },
    { path: '/stationery', component: Stationery },
    { path: '/faq', component: Faq },
    { path: '/how-to-order', component: HowToOrder },
    { path: '/file-setup', component: FileSetup },
    { path: '/tracking', component: Tracking },
    { path: '/about-us', component: About },
    { path: '/bcardsdesign', component: BcardsDesign },
    { path: '/affiliate', component: Affiliate },
    { path: '/cardlogodesign', component: CardLogoDesign },
    { path: '/clients-happiness-policy', component: ClientHappiness },
    { path: '/quote', component: Quote },
    { path: '/contact-us', component: Contact },
    { path: '/privacy-policy', component: Privacy },
    { path: '/refer-and-earn', component: Refer },
    { path: '/refund-policy', component: Refund },
    { path: '/good-things', component: GoodThings },
    { path: '/blog', component: Blog },
    { path: '/bespoke-business-cards', component: BlogOne },
    { path: '/why-influencers-should-have-business-cards', component: BlogTwo },
    { path: '/10-tips-for-your-next-business-card-design-part-1', component: BlogThree },
    { path: '/10-tips-for-your-next-business-card-design-part-2', component: BlogFour },
    { path: '/10-tips-for-your-next-business-card-design-part-3', component: BlogFive },
    { path: '/10-tips-for-your-next-business-card-design-part-4', component: BlogSix },
    { path: '/sample-pack', component: SamplePack },
    { path: '/startup-coupons', component: StartupCoupons },
    { path: '/terms-and-conditions', component: Terms },
    { path: '/thanks', name: 'thanks', component: Thanks },
    { path: '/treatments', component: Treatments },
    { path: '/franchise', component: Franchise },
    { path: '/reseller', component: Reseller },
    { path: '/smm', component: SMM },
    { path: '/stationery-design', component: StationeryDesign },
    { path: '/website-development', component: WebsiteDevelopment },
    { path: '/bcard/:id', component: Bcard },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        beforeEnter: (to, from, next) => {
            if (store.state.cart.cartProducts.length)
                next();
            else
                next({ name: 'home' });
        }
    }
];