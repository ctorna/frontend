<template>
  <!-- checkout start -->
  <div class="checkout-main-area py-4 py-md-5">
    <div class="container">
      <div class="customer-zone mb-30">
        <p class="cart-page-title">
          Have a coupon?
          <a class="checkout-click" href="#">Click here to enter your code</a>
        </p>
        <div class="checkout-login-info">
          <p>If you have a coupon code, please apply it below.</p>
          <form action="#">
            <input type="text" placeholder="Coupon code" />
            <input type="submit" value="Apply Coupon" />
          </form>
        </div>
      </div>
      <div class="checkout-wrap">
        <div class="row">
          <div class="col-lg-7">
            <div class="billing-info-wrap">
              <h3>Billing Details</h3>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-25">
                    <label>
                      First name
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.first_name"/>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="billing-info mb-25">
                    <label>
                      Last name
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.last_name"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-25">
                    <label>
                      GST No. (optional)
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.gstno"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-25">
                    <label>
                      Company name (optional)
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.company"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-select mb-25">
                    <label>
                      Country
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <select class="select-active" v-model="customer.country">
                      <option value="">....</option>
                      <option v-for="(country,key) in countries" :key="key" :value="key">{{country}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-25">
                    <label>
                      Street address
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input
                      class="billing-address"
                      placeholder="House number and street name"
                      type="text"
                    v-model="customer.address_1"/>
                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text" v-model="customer.address_2"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-info mb-25">
                    <label>
                      Town / City
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.city" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="billing-select mb-25">
                    <label>
                      District
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <select class="select-active" v-model="customer.state">
                      <option value="">....</option>
                      <option v-for="(state,key) in states" :key="key" :value="key">{{state}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="billing-info mb-25">
                    <label>
                      Postcode / ZIP (optional)
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.postcode"/>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="billing-info mb-25">
                    <label>
                      Phone
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.phone"/>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="billing-info mb-25">
                    <label>
                      Email Address
                      <abbr class="required" title="required">*</abbr>
                    </label>
                    <input type="text" v-model="customer.email"/>
                  </div>
                </div>
              </div>
              <div class="additional-info-wrap">
                <h3>Additional information</h3>
                <label>Order notes (optional)</label>
                <textarea
                  placeholder="Notes about your order, e.g. special notes for delivery. "
                  name="message" v-model="customer.note"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="your-order-area">
              <h3>Your order</h3>
              <div class="your-order-wrap gray-bg-4">
                <div class="your-order-info-wrap">
                  <div class="your-order-info">
                    <ul>
                      <li>
                        Product
                        <span>Total</span>
                      </li>
                    </ul>
                  </div>
                  <div class="your-order-middle">
                    <ul>
                      <li v-for="(product,key,index) in getCartProducts" :key="index">
                        <template v-if="typeof product.qPrice !=='undefined'">
                          {{product.label}} {{product.quantity}} X ₹{{product.qPrice.ppc}}
                          <span>₹{{product.qPrice.price}}</span>
                        </template>
                        <template v-else>
                          {{product.label}} X 1
                          <span>₹{{product.price}}</span>
                        </template>
                      </li>
                    </ul>
                  </div>

                  <div class="your-order-info order-subtotal">
                    <ul>
                      <li v-for="(price,tax) in getTaxSlabs" :key="tax">
                        
                          {{tax}}% IGST
                          <span>₹{{price}}</span>
                        
                      
                       
                      </li>
                      
                    </ul>
                  </div>
                  <div class="your-order-info order-total">
                    <ul>
                      <li>
                        Total
                        <span>₹{{getCartPrice}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="payment-method">
                  <h5>Payemnt Method</h5>
                  <div class="custom-radio custom-radio-block">
                    <div class="radio">
                      <label>
                        <input type="radio" class="form-check-input" name="payment_mode" checked />
                        <i class="form-icon"></i> Razorpay
                      </label>
                    </div>
                    <!--div class="radio">
                      <label>
                        <input type="radio" class="form-check-input" name="payment_mode" />
                        <i class="form-icon"></i> PayPal
                      </label>
                    </div-->
                  </div>
                </div>
                <div class="condition-wrap">
                  <div class="condition-form mb-25">
                    <input type="checkbox" checked="checked" v-model="termsChecked"/>
                    <span>
                      I have read and agree to the website
                      <a href="terms-conditions.html">terms and conditions</a>
                      <span class="star">*</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="Place-order mt-30">
                <a @click.prevent="placeOrder()" v-if="doPlaceOrder">Place Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- checkout end -->
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import * as types from "../store/types";
import axios from "axios";
export default {
  data() {
    return {
      customer: {
        first_name: "",
        last_name: "",
        company: "",
        address_1: "",
        address_2: "",
        state: "",
        city: "",
        country: "",
        postcode: "",
        email: "",
        phone: "",
        message: "",
        gstno:""
      },
      countries: {},
      defaultCountry: "",
      states: {},
      termsChecked:false,
      errors: []
    };
  },
  computed: {
    ...mapGetters({
      getCartProducts: types.CARTS_PRODUCTS,
      getCartPrice: types.CARTS_PRODUCTS_PRICE,
      getTaxSlabs:types.CARTS_PRODUCTS_PRICE_TAX,
      getOrderResponseData: types.ORDER_RESPONSE_DATA
    }),
    doPlaceOrder() {
      return this.validateForm(0) && this.termsChecked;
    }
  },
  methods: {
    ...mapMutations({
      setOrderResponseData: types.MUTATION_ORDER_RESPONSE_DATA,
      setLoading : 'mutationMenuClicked',
      resetData : 'setDefaultState'
    }),
    placeOrder() {
      /*if cart product validation is passed */

      /*if customer form validation is passed */
      /*make api call to create order at chhapai.com and also razorpay capture payment this will give response and show payment screen*/
      /* console.log({products:this.getCartProducts,orderPrice:this.getCartPrice,customer:this.customer});
return true; */
this.setLoading(true);
      var me = this;
      axios
        .post(`${this.$store.state.WPSERVER}/createorder/`, {
          products: this.getCartProducts,
          orderPrice: this.getCartPrice,
          customer: this.customer
        })
        .then(res => {
          let data = res.data.order;
          this.setOrderResponseData(data);
          let rzrOptions = {
            key: data.key,
            amount: data.amount,
            currency: "INR",
            name: data.name,
            description: data.description,
            image: "https://i.imgur.com/n5tjHFD.png",
            handler: me.successPayment
          };
          this.setLoading(false);
          let r = new Razorpay(rzrOptions);
          r.open();
        });
    },
    successPayment(transaction) {
      let data = this.getOrderResponseData;
      axios
        .post(`${this.$store.state.WPSERVER}/orderpaymentsuccess/`, data)
        .then(res => {
         
          //if (res.data.success) {
            this.resetData({cart:true});
            this.$router.push({ name: "thanks" });
          //}
        });
      console.log(transaction);
    },
    validateForm(validate) {
      if (validate) {
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        var regAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
        var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        this.errors = [];
        if (
          !regName.test(this.customer.first_name) ||
          !regName.test(this.customer.last_name)
        )
          this.errors.push("Not a Valid First or Last Name");
        if (!regAddress.test(this.customer.company))
          this.errors.push("Not a Valid Company Name");
        if (!regAddress.test(this.customer.address_1))
          this.errors.push("Not a Valid Address");
        if (!regEmail.test(this.customer.email))
          this.errors.push("Not a Valid Address");
        if (!regPhone.test(this.customer.phone))
          this.errors.push("Not a Valid Phone Number");
        if (!this.customer.postcode.length < 3)
          this.errors.push("Not a Valid Postcode");
        if (!this.errors.length) {
          return true;
        }
        return false;
      } else {
        return true;
      }
    }
  },
  mounted() {
    console.log("component checkout");
    console.log(this.$store.state.checkout.customer);
    var me = this;
    axios.get(`${this.$store.state.WPSERVER}/getcountries/`).then(res => {
      let data = res.data;
      console.log(data);
      this.countries = data.countries;
      this.states = data.states;
      this.customer.country = data.default;
    });
  }
};
</script>