<template>
   <div class="row gutters-1 price list">
                        <div class="col-12 mb-2">
                          <h4>Choose your size</h4>
                        </div>
                        <div class="col-12 col-sm-6" v-for="(size,key) in $store.state.product.productJson.sizes.opts" :key="key" @click="sizeClick(key)">
                          <div class="price-item">
                            <figure>
                              <img
                                src="https://chhapai.com/wp-content/uploads/elementor/thumbs/Letterpress_Business_Cards_MockUp_1-o8rmr10td8e46fopts8kk2aand8nf603awrqlnxb3y.jpg"
                              />
                            </figure>
                            <div class="content">
                              <h2>{{$store.state.product.bcardConstants[key].name}}</h2>
                              <span>{{size}}</span>
                              <div class="d-flex align-items-center justify-content-between">
                                <input type="radio" :value="key" v-model="$store.state.product.myProduct.size"/>
                                <label for="size1"></label>
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
  methods:{
      ...mapActions({
                sizeClick: types.ACTION_BCARDS_MYSIZE
                
            })

  }
}
</script>