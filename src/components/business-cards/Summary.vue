<template>
<div class="summary">
    <div class="h5">Summary</div>
    <table class="table">
        <tbody>
            <tr>
                <th>Paper</th>
                <td>{{getMyproduct().paper}}</td>
            </tr>
            <tr>
                <th>Size</th>
                <td>{{getMyproduct().size}}</td>
            </tr>
            <tr>
                <th>Printing</th>
                <td>{{getMyproduct().side}}</td>
            </tr>
            <tr v-for="(treat,key) in $store.state.product.myProduct.treatments" :key="key">
                <th>{{key|summaryShow}}</th>
                <template v-if="['foiling','electroplating','letterpress'].indexOf(key)!==-1">
                <td>
                    <table>
                        <tr v-for="(prop,k) in treat" :key="k">
                            <th>{{k|summaryShow}}</th>
                            <td>{{prop|summaryShow}}</td>
                        </tr>
                    </table>
                </td>
                </template>
                <template v-else>
                <td>{{treat}}</td>
                </template>
            </tr>
            <tr v-for="(addon,key) in $store.state.product.myProduct.addons" :key="key">
                <th>{{key|summaryShow}}</th>
                <td>{{addon.name|summaryShow}}<span>₹{{addon.price}}</span></td>
            </tr>
            <tr>
                <th>Per card</th>
                <td>₹{{getMyPPC()}}</td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td>{{getMyproduct().quantity}}</td>
            </tr>
            <tr class="price">
                <th>Total</th>
                <td>₹{{getMyPrice()}}</td>
            </tr>
        </tbody>
    </table>
    <div class="action">
        <a title="Create Design" href="#" class="btn btn-secondary" v-if="false">Create Design</a>
        <a title="Add to cart" href="#" @click.prevent="addProductToCart()" class="btn btn-primary">Add to cart</a>
    </div>
    <p class="mt-3"><i class="dlicon emoticons_smile"></i> 100% Happiness Guarantee. If You are not happy with your order contact us and we'll make it right... <a href="/clients-happiness-policy">more</a></span></p>
</div>
</template>
<script>
import {eventBus} from '../../main';
import { mapGetters, mapActions } from "vuex";
import * as types from "../../store/types";
export default {
  data() {
    return {
      addon: ""
    };
  },
  methods: {
    ...mapGetters({
      getMyproduct: types.BCARDS_MYPRODUCT,
      getMyPrice: types.BCARDS_TPRICE,
      getMyPPC: types.BCARDS_MYPPC
    }),
    ...mapActions({
      getQtyPrice: types.ACTION_BCARDS_MYPRICE,
      addToCart:types.ACTION_CARTS_ADD_PRODUCT
    }),
    getFormattedTreat(treat) {
      switch (treat) {
        case foiling:
        case electroplating:
        case letterpress:
          return ''
          break;
      } //switch
    },
    addProductToCart(){
      this.addToCart(this.getMyproduct()).then(()=>{
      console.log('add to cart button clicked');
      console.log(this.$store.state.cart.cartProducts);
      eventBus.$emit('cartAdded',{});
      });

    }
  },
  filters:{
summaryShow:function(value){
   if (!value) return ''
   value = value.toString();
   value = value.replace(/_([a-z])/g, function (g) { return ' '+ g[1].toUpperCase(); });
    return value.charAt(0).toUpperCase() + value.slice(1)
}
  },
  watch: {
    addon: {
      handler(val) {
        if (this.addon) {
          this.addons({ name: "card_holder", value: "card_holder" });
        } else {
          this.addons({ name: "card_holder", value: "" });
          //delete this.$store.state.product.myProduct.addons.foiling;
        }
      },
      deep: true
    }
  }
};
</script>