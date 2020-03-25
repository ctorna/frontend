<template>
  <div class="row gutters-1 price quantity">
    <div class="col-12 mb-2">
      <h4 class="mb-3">Choose your quantity</h4>
      <div class="price-item text-white" style="background-color: #fc4f4f; padding: 15px;">
        <div class="content">
          <div class="d-flex justify-content-between font-weight-bold">
            Quantity
            <span>Price per card</span>
          </div>
        </div>
      </div>
      <div
        class="price-item"
        v-for="(quantity,key) in $store.state.product.productJson.quantities.opts"
        :key="key"
        @click="qtyClick(key)"
      >
        <div class="content">
          <div class="d-flex justify-content-between">
            {{quantity}}
            <span>₹{{qPrices[key].ppc}}</span>
          </div>
          <div>
            <input
              type="radio"
              :id="'quantity'+key"
              name="quantity"
              :value="key"
              v-model="$store.state.product.myProduct.quantity"
            />
            <label :for="'quantity'+key"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import * as types from "../../store/types";
export default {
  data(){
return{
  qPrices:this.$store.state.product.myProduct.qPrices
}
  },
  methods: {
    ...mapActions({
      qtyClick: types.ACTION_BCARDS_MYQUANTITY
    })

  },
  watch:{
    '$store.state.product.myProduct.qPrice'(){
this.qPrices = Object.assign({}, this.$store.state.product.myProduct.qPrices);
//console.log(this.$store.state.product.myProduct.qPrices);
    }
  }
};
</script>