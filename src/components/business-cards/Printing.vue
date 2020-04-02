<template>
    <div class="col-12 col-sm-6">
        <h4 class="mb-sm-3">Choose your printing side</h4>
        <div class="radio" v-for="(side,key) in $store.state.product.printingSides" :key="key" @click="setSides(key)">
            <label>
                <input type="radio"  :value="key" v-model="$store.state.product.myProduct.side" />
                <i class="form-icon"></i> {{side}}
            </label>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import * as types from '../../store/types';
export default {
    data(){
        return {
            bcardConstants:this.$store.state.product.bcardConstants,
            sides:{}
        }
    },
    methods:{
        ...mapActions({
            setSides: types.ACTION_BCARDS_MYSIDE,
        })
    }
}
</script>