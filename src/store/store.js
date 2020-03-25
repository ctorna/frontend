import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/business-cards/product';
import cart from './modules/cart';
import checkout from './modules/checkout';
import order from './modules/order';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        WPSERVER: 'https://chhapai.com/wp-json/chhp/v1',
        menuClicked: false,

    },
    plugins: [createPersistedState({ path: ['cart', 'checkout', 'order'] })],
    getters: {
        getMenuClicked: state => {
            console.log('menu clicked');
            console.log(state.menuClicked);
            if (state.menuClicked)
                return 'block';
            else
                return 'none';
        }
    },
    mutations: {
        mutationMenuClicked: (state, payload) => {
            state.menuClicked = payload;
        },
        setDefaultState: (state, payload) => {
            if (payload.cart)
                Object.assign(state.cart, cart.cartDefaultSet());
            if (payload.checkout)
                Object.assign(state.checkout, checkout.checkoutDefaultSet());
            Object.assign(state.menuClicked, false);
        }
    },
    actions: {
        actionMenuClicked: (context) => {
            console.log(context.state);
            console.log('action Menu Clicked');
            // context.commit('setDefaultState');
            context.commit('mutationMenuClicked', true);
            setTimeout(() => { context.commit('mutationMenuClicked', false); }, 500);
        }

    },
    modules: {
        product,
        cart,
        checkout,
        order
    }

});