import * as types from '../types';
const orderDefaultSet = () => {
    return {
        orderData: {}

    }
};
const state = {
    orderData: {}

};

const getters = {
    /*get the order response data */
    [types.ORDER_RESPONSE_DATA]: state => {
        console.log('order getter');
        console.log(state.orderData);
        return state.orderData;
    }

};

const mutations = {
    /*set the order response data */
    [types.MUTATION_ORDER_RESPONSE_DATA]: (state, payload) => {
        console.log('order mutation');
        console.log(payload);
        state.orderData = payload;
    }

};




export default {
    state,
    mutations,
    getters,
    orderDefaultSet
}