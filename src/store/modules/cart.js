import * as types from '../types';
const cartDefaultSet = () => {
    return {
        cartProducts: [],
        totalPrice: 0,
        totalProducts: 0,
        taxSlabs: {}
    }
};
const state = {
    cartProducts: [],
    totalPrice: 0,
    totalProducts: 0,
    taxSlabs: {}
};

const getters = {
    /*get all the products in cart */
    [types.CARTS_PRODUCTS]: state => {
        return state.cartProducts;
    },

    [types.CARTS_PRODUCTS_PRICE]: state => {
        return state.totalPrice;
    },

    [types.CARTS_PRODUCTS_PRICE_TAX]: state => {
        return state.taxSlabs;
    },

    [types.CARTS_PRODUCTS_Total]: state => {
        return state.cartProducts.length;
    },

};

const mutations = {
    /*set the product in cart */
    [types.MUTATION_CARTS_ADD_PRODUCT]: (state, payload) => {
        console.log(payload);
        state.cartProducts.push(payload);
    },
    /*set the cart price */
    [types.MUTATION_CARTS_PRODUCTS_PRICE]: (state, payload) => {
        let totalPrice = 0;
        let tax = 12;
        let price = 0;
        let taxPrice = 0;
        state.taxSlabs = {};
        for (let product of state.cartProducts) {
            console.log(product);
            tax = 12;
            taxPrice = 0;
            if (typeof product.qPrice !== 'undefined')
                price = Number(product.qPrice.price);
            else
                price = Number(product.price);
            taxPrice = ((price * tax) / 100).toFixed(2);
            if (typeof state.taxSlabs[tax] === 'undefined')
                state.taxSlabs[tax] = 0;
            state.taxSlabs[tax] += Number(taxPrice);

            totalPrice += Number(price) + Number(taxPrice);
        }
        state.totalPrice = totalPrice;
    },
    /*remove the product from cart */
    [types.MUTATION_CARTS_REMOVE_PRODUCT]: (state, payload) => {
        state.cartProducts.splice(payload, 1);
    }

};

const actions = {
    /*called to add product */
    [types.ACTION_CARTS_ADD_PRODUCT]: (context, payload) => {
        let addOnProducts = payload.addons;
        context.commit(types.MUTATION_CARTS_ADD_PRODUCT, payload);
        for (let addon in payload.addons) {
            if (addon == 'Accessories') {
                context.commit(types.MUTATION_CARTS_ADD_PRODUCT, payload.addons[addon]);
            } else if (addon == 'design' && (payload.addons[addon].name !== 'design_upload' && payload.addons[addon].name !== 'design_template')) {
                context.commit(types.MUTATION_CARTS_ADD_PRODUCT, payload.addons[addon]);
            }

        }
        context.commit(types.MUTATION_CARTS_PRODUCTS_PRICE, '');
        console.log('Cart products');
        console.log(state.cartProducts.length);

    },
    /*called to remove products*/
    [types.ACTION_CARTS_REMOVE_PRODUCT]: (context, payload) => {
        context.commit(types.MUTATION_CARTS_REMOVE_PRODUCT, payload);
        context.commit(types.MUTATION_CARTS_PRODUCTS_PRICE, '');

    }
};


export default {
    state,
    mutations,
    actions,
    getters,
    cartDefaultSet
}