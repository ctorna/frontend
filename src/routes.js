import Home from './components/Home.vue';
import Bcard from './components/business-cards/Bcard.vue';
import Checkout from './components/Checkout.vue';
import Notebook from './components/pages/Notebook.vue';
import Coasters from './components/pages/Coasters.vue';
import Accessories from './components/pages/Accessory.vue';
import CardHolders from './components/pages/CardHolders.vue';
import Stationary from './components/pages/StationaryBox.vue';
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
import SamplePack from './components/pages/SamplePack.vue';
import StartupCoupons from './components/pages/StartupCoupons.vue';
import Terms from './components/pages/Terms.vue';
import Thanks from './components/pages/ThankYou.vue';
import Treatments from './components/pages/Treatments.vue';
import { store } from './store/store';

export const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    { path: '/notebooks', component: Notebook },
    { path: '/coasters', component: Coasters },
    { path: '/accessories', component: Accessories },
    { path: '/cardholders', component: CardHolders },
    { path: '/stationary', component: Stationary },
    { path: '/faq', component: Faq },
    { path: '/howToOrder', component: HowToOrder },
    { path: '/fileSetup', component: FileSetup },
    { path: '/tracking', component: Tracking },
    { path: '/about', component: About },
    { path: '/bcardsdesign', component: BcardsDesign },
    { path: '/affiliate', component: Affiliate },
    { path: '/cardlogodesign', component: CardLogoDesign },
    { path: '/clients-happiness-policy', component: ClientHappiness },
    { path: '/quote', component: Quote },
    { path: '/contact', component: Contact },
    { path: '/privacy', component: Privacy },
    { path: '/referandearn', component: Refer },
    { path: '/refund', component: Refund },
    { path: '/samplepack', component: SamplePack },
    { path: '/startupcoupons', component: StartupCoupons },
    { path: '/terms', component: Terms },
    { path: '/thanks', name: 'thanks', component: Thanks },
    { path: '/treatments', component: Treatments },
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