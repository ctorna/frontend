<template>
<div class="row gutters-1 price">
    <div class="col-12 mb-2">
        <h4>Choose your paper</h4>
    </div>
    <div class="col-6 col-sm-4" v-for="paper in $store.state.product.productJson.papers.opts" :key="paper" @click="paperClick(paper)">
        <div class="price-item">
            <figure>
                <img
                src="https://chhapai.com/wp-content/uploads/elementor/thumbs/Letterpress_Business_Cards_MockUp_1-o8rmr10td8e46fopts8kk2aand8nf603awrqlnxb3y.jpg"
                />
            </figure>
            <div class="content">
                <h2>{{paper}}</h2>
                <div class="d-flex align-items-center justify-content-between">
                    <input type="radio" name="paper" :value="paper" v-model="$store.state.product.myProduct.paper"/>
                    <label for="paper1"></label>
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
                paperClick: types.ACTION_BCARDS_MYPAPER
                
            })

  },
  watch:{
    '$store.state.product.myProduct.paper'(){
      console.log(this.$store.state.product.myProduct);
    }
  }
}
</script>