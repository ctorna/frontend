import * as types from '../../types';
import businessCardsJson from './category-1.json';
import bcardDetails from './products-detail.json';
import { bcardConstants } from '../../../components/business-cards/mapArray';
const state = {
    businessCardsJson,
    bcardConstants,
    bcardDetails,
    cardDetail: {},
    productJson: {},
    paperTreatments: [],
    printingSides: {},
    /*Current Product */
    myProduct: { id: '', wp_id: '', label: '', paper: '', size: '', side: '', quantity: '', treatments: {}, addons: {}, qPrice: 0, qPrices: {}, tPrice: 0, discard: '' }


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
    [types.BCARDS_MYPPC]: state => {
        return state.myProduct.qPrice.ppc;
    },
    [types.BCARDS_MYPRICE]: state => {
        return state.myProduct.qPrice.price;
    },
    [types.BCARDS_TPRICE]: state => {
        return state.myProduct.tPrice;
    },
    [types.BCARDS_MYPRODUCTJSON]: state => {
        return state.productJson;
    },
    [types.BCARDS_MYPRODUCT]: state => {

        return state.myProduct;
    },
    [types.BCARDS_CARD_DETAIL]: state => {

        return state.cardDetail;
    }



};
/* Mutations */
const mutations = {
    /*............... Default Setup .............*/
    /*1. set product json data */
    [types.MUTATION_BCARDS_MYPRODUCTJSON]: (state, payload) => {
        state.productJson = state.businessCardsJson.products[payload];


    },
    /*set myproduct paper */
    [types.MUTATION_BCARDS_MYPAPER]: (state, payload) => {
        state.myProduct.paper = payload;
    },
    /*set Paper Treatments */
    [types.MUTATION_BCARDS_PAPER_TREATMENTS]: (state, payload) => {
        state.paperTreatments = payload;
        /*reset myproduct treatment with paper*/
        state.myProduct.treatments = {};
    },
    /*set printing side*/
    [types.MUTATION_BCARDS_MYSIDE]: (state, payload) => {
        state.myProduct.side = payload;
    },
    /*set printing size*/
    [types.MUTATION_BCARDS_MYSIZE]: (state, payload) => {
        state.myProduct.size = payload;
    },
    /*set quantity*/
    [types.MUTATION_BCARDS_MYQUANTITY]: (state, payload) => {
        state.myProduct.quantity = payload;
    },


    /*.................Treatments.................*/
    /*called on any treatment selected or deselected */
    [types.MUTATION_BCARDS_MYTREATMENTS]: (state, payload) => {
        if (payload.value.length === 0 && typeof state.myProduct.treatments[payload.name] !== 'undefined')
            delete state.myProduct.treatments[payload.name];
        else
            state.myProduct.treatments[payload.name] = payload.value;
    },

    /*.................Addons.................*/
    /*called on any addon selected or deselected */
    [types.MUTATION_BCARDS_MYADDONS]: (state, payload) => {
        if (payload.value.length === 0 && typeof state.myProduct.addons[payload.name] !== 'undefined')
            delete state.myProduct.addons[payload.name];
        else
            state.myProduct.addons[payload.name] = payload.value;
    },


    /*.................Prices Calculation.................*/
    /*price calculator and set qty prices */
    [types.MUTATION_BCARDS_QTYPRICE]: (state, payload) => {
        let price = 0;
        let paper = state.myProduct.paper;
        let side = 'single';
        let qty = payload;

        /*paper price */
        price = Number(state.businessCardsJson.paper[paper][side][qty]);
        /*treatment Prices calculation */

        for (let treat in state.myProduct.treatments) {

            switch (treat) {
                case 'foiling':
                case 'electroplating':
                case 'letterpress':
                    let colors = [];
                    typeof state.myProduct.treatments[treat].front !== 'undefined' ? colors.push(state.myProduct.treatments[treat].front) : '';
                    typeof state.myProduct.treatments[treat].back !== 'undefined' ? colors.push(state.myProduct.treatments[treat].back) : '';

                    if (colors.length) {
                        for (let color of colors) {

                            price += Number(state.businessCardsJson.treatments[treat][color][qty]);
                        }
                    }
                    break;
                case 'round_corners':
                case 'embossing':
                case 'laser_cut':
                case 'laser_engrave':
                case 'spotgloss':
                case 'raised_spot_gloss':
                case 'silk_screen':
                    let side = state.myProduct.treatments[treat];
                    price += Number(state.businessCardsJson.treatments[treat][side][qty]);
                    break;
                case 'edgepaint':
                    let ecolor = state.myProduct.treatments[treat];
                    price += Number(state.businessCardsJson.treatments[treat][ecolor][qty]);
                    break;

            } //switch
        } //for


        state.myProduct.qPrices[qty] = { price: price, ppc: (price / qty).toFixed(2) };

    },
    [types.MUTATION_BCARDS_MYPRICE]: (state, payload) => {
        if (typeof payload === 'undefined')
            payload = { price: 0, ppc: 0 };
        state.myProduct.qPrice = payload;
        /*addons price calculation */
        let addOnPrice = 0;
        for (let addon in state.myProduct.addons) {
            /* let v = state.myProduct.addons[addon];
            price += Number(state.bcardConstants[v].price); */
            addOnPrice += Number(state.myProduct.addons[addon].price);
        }
        state.myProduct.tPrice = Number(payload.price) + Number(addOnPrice);
    },

    [types.MUTATION_BCARDS_MYPRODUCT]: (state, payload) => {

        state.myProduct.wp_id = payload.wp_id;
        state.myProduct.id = payload.id;
        state.myProduct.label = payload.label;
        state.cardDetail = bcardDetails[payload.wp_id]

    },
    /*used to make state changes reflective*/
    [types.MUTATION_BCARDS_DISCARD]: (state, payload) => {
        state.myProduct.discard = payload;
    }



};

const actions = {
    /*............... Default Setup .............*/
    /* 1. called on product load */
    [types.ACTION_BCARDS_MYPRODUCTJSON]: (context, payload) => {
        /*set productjson*/
        context.commit(types.MUTATION_BCARDS_MYPRODUCTJSON, payload);
        context.commit(types.MUTATION_BCARDS_MYPRODUCT, { id: payload, wp_id: context.state.productJson.wp_id, label: context.state.productJson.name })
            /*default selected values init*/
            //paper
        context.dispatch(types.ACTION_BCARDS_MYPAPER, context.state.productJson.papers.selected);
        //set printing sides
        context.dispatch(types.ACTION_BCARDS_PRINTING_SIDES, '');
        //size
        context.dispatch(types.ACTION_BCARDS_MYSIZE, context.state.productJson.sizes.selected);

        context.dispatch(types.ACTION_BCARDS_MYQUANTITY, context.state.productJson.quantities.selected);
        context.dispatch(types.ACTION_BCARDS_QTYPRICES, '');

    },

    /*2. On Paper change reset treatments and prices */
    [types.ACTION_BCARDS_MYPAPER]: (context, payload) => {
        /*set selected paper */
        context.commit(types.MUTATION_BCARDS_MYPAPER, payload);
        /* Set Paper treatments */
        context.commit(types.MUTATION_BCARDS_PAPER_TREATMENTS, context.state.businessCardsJson.paper[payload].treatments);

        /*calculate qty prices */
        context.dispatch(types.ACTION_BCARDS_QTYPRICES, '');

    },
    /*set printing sides */
    [types.ACTION_BCARDS_PRINTING_SIDES]: (context, payload) => {
        if (context.state.productJson.printing == 'Single And Both') {
            context.state.printingSides = { single: 'Single Side', both: 'Both Sides' };
            context.dispatch(types.ACTION_BCARDS_MYSIDE, 'both');
        } else {
            context.state.printingSides = { single: 'Single Side' };
            context.dispatch(types.ACTION_BCARDS_MYSIDE, 'single');
        }
    },
    /*set printing side*/
    [types.ACTION_BCARDS_MYSIDE]: ({ commit }, payload) => {
        commit(types.MUTATION_BCARDS_MYSIDE, payload);
    },
    /*set printing size*/
    [types.ACTION_BCARDS_MYSIZE]: ({ commit }, payload) => {
        commit(types.MUTATION_BCARDS_MYSIZE, payload);
    },
    /*set quantity*/
    [types.ACTION_BCARDS_MYQUANTITY]: (context, payload) => {
        context.commit(types.MUTATION_BCARDS_MYQUANTITY, payload);
        context.dispatch(types.ACTION_BCARDS_MYPRICE, '');
    },

    /*.................Treatments.................*/
    /*called on any treatment selected or deselected */
    [types.ACTION_BCARDS_MYTREATMENTS]: (context, payload) => {
        context.commit(types.MUTATION_BCARDS_MYTREATMENTS, payload);
        /*calculate qty prices */
        context.dispatch(types.ACTION_BCARDS_QTYPRICES, 'console');
    },

    /*.................Addons.................*/
    /*called on any addon selected or deselected */
    [types.ACTION_BCARDS_MYADDONS]: (context, payload) => {
        context.commit(types.MUTATION_BCARDS_MYADDONS, payload);
        /*calculate qty prices */
        context.dispatch(types.ACTION_BCARDS_QTYPRICES, 'console');
    },

    /*.................Prices Calculation.................*/
    /* To be triggered on change of paper,treatment,addons */
    [types.ACTION_BCARDS_QTYPRICES]: (context, payload) => {
        var myQty = context.state.myProduct.quantity;
        var myPrice = 0;
        if (payload == 'console')
            console.log(state.myProduct);
        for (let qty in context.state.productJson.quantities.opts) {

            context.commit(types.MUTATION_BCARDS_QTYPRICE, qty)



        }

        myPrice = context.state.myProduct.qPrices[myQty];
        context.commit(types.MUTATION_BCARDS_MYPRICE, myPrice);

    },

    [types.ACTION_BCARDS_MYPRICE]: (context, payload) => {
        var myQty = context.state.myProduct.quantity;
        var myPrice = context.state.myProduct.qPrices[myQty];
        context.commit(types.MUTATION_BCARDS_MYPRICE, myPrice);

    },
    [types.ACTION_BCARDS_MYPRICEPERCARD]: (context, payload) => {
        let price = 0;
        let paper = context.state.myProduct.paper;
        let side = 'single';
        let qty = payload;
        for (let qty in context.state.productJson.quantities.opts) {
            price = context.state.businessCardsJson.paper[paper][side][qty];

        } //outLoop
        return price;
        //context.commit(types.MUTATION_BCARDS_MYPRICE, price);
    },

    [types.ACTION_BCARDS_MYPRODUCT]: ({ commit }, payload) => {

    },
    /*used to make state changes reflective*/
    [types.ACTION_BCARDS_DISCARD]: ({ commit }, payload) => {
        commit(types.MUTATION_BCARDS_DISCARD, Math.random());
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}