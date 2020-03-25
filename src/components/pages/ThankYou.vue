<template>
  <section>
    <div class="faq-area py-4 py-md-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="thankyou">
              <i class="dlicon ui-1_check-circle-07"></i>
              <h2>Thank you for your purchase</h2>
              <p>Your order has been received.</p>
              <p class="font-weight-bold">Order #{{getOrderData.wp_order_id}}</p>
              <p class="return-to-shop">
                <router-link to="/" class="btn">Return to shop</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import * as types from "../../store/types";
import axios from "axios";
export default {
  computed: {
    ...mapGetters({ getOrderData: types.ORDER_RESPONSE_DATA })
  }
};
</script>