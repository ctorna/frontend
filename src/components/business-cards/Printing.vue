<template>
  <div class="row gutters-1 price list">
                        <div class="col-12 mb-2">
                          <h4>Choose your printing side</h4>
                        </div>
                        <div class="col-12 col-sm-6" v-for="(side,key) in $store.state.product.printingSides" :key="key" @click="setSides(key)">
                          <div class="price-item">
                            <figure>
                              <img
                                src="https://chhapai.com/wp-content/uploads/elementor/thumbs/Letterpress_Business_Cards_MockUp_1-o8rmr10td8e46fopts8kk2aand8nf603awrqlnxb3y.jpg"
                              />
                            </figure>
                            <div class="content">
                              <h2>{{side}}</h2>
                              <div class="d-flex align-items-center justify-content-between">
                                <input type="radio"  :value="key" v-model="$store.state.product.myProduct.side" />
                                <label for="printing1"></label>
                              </div>
                            </div>
                          </div>
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