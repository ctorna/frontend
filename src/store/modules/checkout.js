import * as types from '../types';
const checkoutDefaultSet = () => {
    return {
        customer: {
            wp_customer_id: '',
            billing: { first_name: '', last_name: '', company: '', address_1: '', address_2: '', state: '', city: '', country: '', postcode: '', email: '', phone: '', message: '', gstno: '' },
            shipping: {}
        },
        razorpay: {

        }
    }
};
const state = {
    customer: {
        wp_customer_id: '',
        billing: {},
        shipping: {}
    },
    razorpay: {

    }
};

const getters = {
    /*get customer data*/
    [types.CHECKOUT_CUSTOMER]: state => {
        return state.customer;
    },
    /*get razorpay data */
    [types.CHECKOUT_RAZORPAY]: state => {
        return state.razorpay;
    }
};

const mutations = {
    /*set customer data*/
    [types.MUTATION_CHECKOUT_CUSTOMER]: (state, payload) => {

    },
    /*set razorpay data */
    [types.MUTATION_CHECKOUT_RAZORPAY]: (state, payload) => {

    }
};

const actions = {
    /*add customer data*/
    [types.ACTION_CHECKOUT_CUSTOMER]: (context, payload) => {


    },
    /*invoke razorpay gateway*/
    [types.ACTION_CHECKOUT_RAZORPAY]: (context, payload) => {


    }

};


export default {
    state,
    mutations,
    actions,
    getters,
    checkoutDefaultSet
}