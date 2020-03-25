import * as types from '../../types';
import businessCardsJson from './category-1.json';
import { bcardConstants } from '../../../components/business-cards/mapArray';
const state = {
    businessCardsJson,
    bcardConstants,
    productJson: {},
    paperTreatments: [],
    printingSides: {},
    /*Current Product */
    myProduct: { paper: '', size: '', side: '', quantity: '', treatments: {}, addons: {}, qPrice: 0, qPrices: {}, tPrice: 0 },



};

const getters = {
    /*General*/
    [types.BCARDS_QUANTITIES]: state => {

    },
    [types.BCARDS_SIZES]: state => {

    },
    [types.BCARDS_SIDES]: state => {

    },
    [types.BCARDS_PAPERS]: state => {

    },
    [types.BCARDS_TREATMENTS]: state => {
        console.log(state.businessCardsJson.treatments);
    },
    [types.BCARDS_CONSTANTS]: state => {

    },
    /*myProduct*/
    [types.BCARDS_MYQUANTITY]: state => {

    },
    [types.BCARDS_MYSIZE]: state => {

    },
    [types.BCARDS_MYSIDE]: state => {

    },
    [types.BCARDS_MYPAPER]: state => {

    },
    [types.BCARDS_MYTREATMENTS]: state => {

    },
    [types.BCARDS_MYPRICE]: state => {

    },
    [types.BCARDS_MYPRODUCTJSON]: state => {

    },
    [types.BCARDS_MYPRODUCT]: state => {
        console.log('BCARDS_MYPRODUCT');
        return state.myProduct;
    }



};
/* Mutations */
const mutations = {
    [types.MUTATION_BCARDS_MYQUANTITY]: (state, payload) => {
        state.myProduct.quantity = payload;
    },
    [types.MUTATION_BCARDS_MYSIZE]: (state, payload) => {
        state.myProduct.size = payload;
    },
    [types.MUTATION_BCARDS_MYSIDE]: (state, payload) => {
        state.myProduct.side = payload;
    },
    [types.MUTATION_BCARDS_MYPAPER]: (state, payload) => {
        state.myProduct.paper = payload;
    },
    [types.MUTATION_BCARDS_MYTREATMENTS]: (state, payload) => {
        if (payload.value.length === 0 && typeof state.myProduct.treatments[payload.name] !== 'undefined')
            delete state.myProduct.treatments[payload.name];
        else
            state.myProduct.treatments[payload.name] = payload.value;
    },
    [types.MUTATION_BCARDS_MYADDONS]: (state, payload) => {
        if (payload.value.length === 0 && typeof state.myProduct.addons[payload.name] !== 'undefined')
            delete state.myProduct.addons[payload.name];
        else
            state.myProduct.addons[payload.name] = payload.value;
    },
    [types.MUTATION_BCARDS_MYPRICE]: (state, payload) => {
        state.myProduct.price = payload;
    },
    [types.MUTATION_BCARDS_MYPRODUCTJSON]: (state, payload) => {
        state.productJson = state.businessCardsJson.products[payload];
        console.log('MUTATION_BCARDS_MYPRODUCTJSON');
        console.log(state.businessCardsJson);
        console.log(state.productJson);
        console.log('---------');
    },
    [types.MUTATION_BCARDS_MYPRODUCT]: (state, payload) => {

    },
    [types.MUTATION_BCARDS_PAPER_TREATMENTS]: (state, payload) => {
        state.paperTreatments = payload;
    },
    [types.MUTATION_BCARDS_QTYPRICE]: (state, payload) => {
        let price = 0;
        let paper = context.state.myProduct.paper;
        let side = 'single';
        let qty = payload;
        console.log(paper + side + qty);
        price = state.businessCardsJson.paper[paper][side][qty];
        state.myProduct.qPrices[qty] = { price: price };
    }
};

const actions = {
    [types.ACTION_BCARDS_MYQUANTITY]: ({ commit }, payload) => {
        commit(types.MUTATION_BCARDS_MYQUANTITY, payload);
    },
    [types.ACTION_BCARDS_MYSIZE]: ({ commit }, payload) => {
        commit(types.MUTATION_BCARDS_MYSIZE, payload);
    },
    [types.ACTION_BCARDS_MYSIDE]: ({ commit }, payload) => {
        console.log('sides called');
        commit(types.MUTATION_BCARDS_MYSIDE, payload);
    },
    [types.ACTION_BCARDS_MYPAPER]: (context, payload) => {
        console.log('ACTION_BCARDS_MYPAPER');
        console.log(payload);
        console.log('---------');
        /*set selected paper */
        context.commit(types.MUTATION_BCARDS_MYPAPER, payload);
        /* Set Paper treatments */
        context.commit(types.MUTATION_BCARDS_PAPER_TREATMENTS, context.state.businessCardsJson.paper[payload].treatments);
        /*reset my product treatments */
    },
    [types.ACTION_BCARDS_MYTREATMENTS]: (context, payload) => {
        //if(payload.value.length===0)
        //delete context.state.myProduct.treatments[payload.name];
        //else
        context.commit(types.MUTATION_BCARDS_MYTREATMENTS, payload);
    },
    [types.ACTION_BCARDS_MYADDONS]: (context, payload) => {
        //if(payload.value.length===0)
        //delete context.state.myProduct.treatments[payload.name];
        //else
        console.log('addon called ' + payload);
        context.commit(types.MUTATION_BCARDS_MYADDONS, payload);
    },
    [types.ACTION_BCARDS_QTYPRICES]: (context, payload) => {

        for (let qty in context.state.productJson.quantities.opts) {

            context.commit(types.MUTATION_BCARDS_QTYPRICE, qty)



        }
    },
    [types.ACTION_BCARDS_MYPRICE]: (context, payload) => {
        let price = 0;
        let paper = context.state.myProduct.paper;
        let side = 'single';
        let qty = payload;


        //context.commit(types.MUTATION_BCARDS_MYPRICE, price);
    },
    [types.ACTION_BCARDS_MYPRICEPERCARD]: (context, payload) => {
        let price = 0;
        let paper = context.state.myProduct.paper;
        let side = 'single';
        let qty = payload;
        for (let qty in context.state.productJson.quantities.opts) {
            console.log(paper + side + qty);
            price = context.state.businessCardsJson.paper[paper][side][qty];

        } //outLoop
        return price;
        //context.commit(types.MUTATION_BCARDS_MYPRICE, price);
    },
    [types.ACTION_BCARDS_MYPRODUCTJSON]: (context, payload) => {
        console.log('sdsdsd');
        context.commit(types.MUTATION_BCARDS_MYPRODUCTJSON, payload);
        context.dispatch(types.ACTION_BCARDS_MYPAPER, context.state.productJson.papers.selected);
        context.dispatch(types.ACTION_BCARDS_MYSIZE, context.state.productJson.sizes.selected);
        context.dispatch(types.ACTION_BCARDS_PRINTING_SIDES, '');
        context.dispatch(types.ACTION_BCARDS_MYQUANTITY, context.state.productJson.quantities.selected);
        context.dispatch(types.ACTION_BCARDS_QTYPRICES, '');
        //context.dispatch(types.ACTION_BCARDS_MYSIDE, context.state.productJson.printing.selected);
        //context.commit(types.MUTATION_BCARDS_MYPAPER, context.state.productJson.papers.selected);
    },
    [types.ACTION_BCARDS_MYPRODUCT]: ({ commit }, payload) => {

    },
    [types.ACTION_BCARDS_PRINTING_SIDES]: (context, payload) => {
        if (context.state.productJson.printing == 'Single And Both') {
            context.state.printingSides = { single: 'Single Side', both: 'Both Sides' };
            context.dispatch(types.ACTION_BCARDS_MYSIDE, 'both');
        } else {
            context.state.printingSides = { single: 'Single Side' };
            context.dispatch(types.ACTION_BCARDS_MYSIDE, 'single');
        }
    },

};

export default {
    state,
    mutations,
    actions,
    getters
}