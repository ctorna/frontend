<template>
  <section>
    <template v-once>
      <span v-show="false">{{discard = setProductJson($route.params.id)}}</span>
    </template>
    <div class="breadcrumb-area border-top-3 section-padding-1 breadcrumb-ptb-3">
      <div class="container-fluid">
        <div class="breadcrumb-content breadcrumb-font-inc">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li>Business Cards</li>
            <li class="active">{{getMyProductJson.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product-details-area section-padding-1 pb-90">
      <div class="container-fluid">
        <div class="row gutters-1">
          <div class="col-12 col-lg-5">
            <div class="product-images-wrap d-none d-lg-block">
              <div class="easyzoom-style mb-10" v-for="index in 6" :key="index">
                <div class="easyzoom easyzoom--overlay">
                  <a :href="getImageUrl(index)">
                    <img :src="getImageUrl(index)" alt="">
                  </a>
                </div>
                <span class="product-sale">Sale!</span>
                <a class="easyzoom-pop-up img-popup" :href="getImageUrl(index)">
                  <i class="dlicon ui-1_zoom-in"></i>
                </a>
              </div>
            </div>

            <!-- For Mobile -->

            <div class="product-details-tab d-lg-none">
              <div class="pro-dec-big-img-slider" ref="class_pro_dec_big_img_slider">
                <div class="easyzoom-style" v-for="index in 6" :key="index">
                  <div class="easyzoom easyzoom--overlay">
                    <a :href="getImageUrl(index)">
                      <img :src="getImageUrl(index)">
                    </a>
                  </div>
                  <span class="product-sale">Sale!</span>
                  <a class="easyzoom-pop-up img-popup" :href="getImageUrl(index)" ref="class_img_popup">
                    <i class="dlicon ui-1_zoom-in"></i>
                  </a>
                </div>
              </div>
              <div class="product-dec-slider-2 product-dec-small-style2" ref="class_product_dec_slider_2">
                <div class="product-dec-small active" v-for="index in 6" :key="index">
                  <img :src="getImageUrl(index)">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-7 sidebar-active">
            <div class="row gutters-1">
              <div class="col-12 col-sm-8">
                <div class="product-details-content p-dec-content-edit">
                  <h2 class="uppercase">{{getMyProductJson.name}}</h2>
                  <p
                    class="mb-0 mt-2"
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div class="product-details-ratting-wrap mt-3">
                    <div class="product-details-ratting">
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <a href="#">(3 customer review)</a>
                  </div>
                  <div class="price_calc mt-3">
                    <div class="price-block">
                      <h2 class="title mb-1">Choose paper & quantity</h2>
                      <bcard-paper></bcard-paper>
                      <div class="row gutters-1 price custom-radio custom-radio-block">
                          <bcard-size></bcard-size>
                          <bcard-printing></bcard-printing>
                      </div>
                      <bcard-quantity></bcard-quantity>
                    </div>
                    <div class="price-block">
                      <div class="price">
                        <div id="treatment">
                          <h2 class="title mb-2 mt-3">Choose treatments</h2>
                          <treatment-foiling
                            v-if="$store.state.product.paperTreatments.indexOf('foiling')!==-1"
                          ></treatment-foiling>
                          <treatment-electroplating
                            v-if="$store.state.product.paperTreatments.indexOf('electroplating')!==-1"
                          ></treatment-electroplating>
                          <treatment-letterpress
                            v-if="$store.state.product.paperTreatments.indexOf('letterpress')!==-1"
                          ></treatment-letterpress>
                          <treatment-embossing
                            v-if="$store.state.product.paperTreatments.indexOf('embossing')!==-1"
                          ></treatment-embossing>
                          <treatment-raisespotgloss
                            v-if="$store.state.product.paperTreatments.indexOf('raised_spot_gloss')!==-1"
                          ></treatment-raisespotgloss>
                          <treatment-edgepaint
                            v-if="$store.state.product.paperTreatments.indexOf('edgepaint')!==-1"
                          ></treatment-edgepaint>
                          <treatment-roundcorners
                            v-if="$store.state.product.paperTreatments.indexOf('round_corners')!==-1"
                          ></treatment-roundcorners>
                          <treatment-lasercut
                            v-if="$store.state.product.paperTreatments.indexOf('laser_cut')!==-1"
                          ></treatment-lasercut>
                          <treatment-laserengrave
                            v-if="$store.state.product.paperTreatments.indexOf('laser_engrave')!==-1"
                          ></treatment-laserengrave>
                          <treatment-spotgloss
                            v-if="$store.state.product.paperTreatments.indexOf('spotgloss')!==-1"
                          ></treatment-spotgloss>
                          <treatment-silkscreen
                            v-if="$store.state.product.paperTreatments.indexOf('silk_screen')!==-1"
                          ></treatment-silkscreen>
                          <bcard-addon></bcard-addon>
                          <bcard-design></bcard-design>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    <i class="dlicon emoticons_smile"></i> 100% Happiness Guarantee
                    <span class="quote">
                      If You are not happy with your order contact us and we'll make it right...
                      <router-link to="/clients-happiness-policy">more</router-link>
                    </span>
                  </p>
                  <div class="social-icon-style-3 d-none">
                    <a class="facebook" href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a class="twitter" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a class="linkedin" href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a class="pinterest" href="#">
                      <i class="fa fa-pinterest-p"></i>
                    </a>
                    <a class="google-plus" href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-4 mt-4 mt-sm-0">
                <bcard-summary></bcard-summary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="description-review-area section-padding-7 pb-50">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="description-review-wrapper">
              <div class="description-review-topbar nav">
                <a class="active" data-toggle="tab" href="#des-details1">Description</a>
                <a data-toggle="tab" href="#des-details2">Additional information</a>
                <a data-toggle="tab" href="#des-details3">Reviews (1)</a>
                <a data-toggle="tab" href="#des-details4">How To Order</a>
                <a data-toggle="tab" href="#des-details5">FAQ</a>
              </div>
              <div class="tab-content description-review-bottom">
                <div id="des-details1" class="tab-pane active">
                  <div class="product-description-wrapper">
                    <div v-html="getProductDetail.description">
                    
                    </div>
                  </div>
                </div>
                <div id="des-details2" class="tab-pane">
                  <div class="additional-info" v-html="getProductDetail.additionalInfo">
                    
                  </div>
                </div>
                <div id="des-details3" class="tab-pane">
                  <div class="review-wrapper">
                    <h2>1 review for Sleeve Button Cowl Neck</h2>
                    <div class="single-review">
                      <div class="review-img">
                        <img src="/assets/images/product-details/client-1.jpg" alt />
                      </div>
                      <div class="review-content">
                        <div class="review-top-wrap">
                          <div class="review-name">
                            <h5>
                              <span>John Snow</span> - March 14, 2020
                            </h5>
                          </div>
                          <div class="review-rating">
                            <i class="yellow fa fa-star"></i>
                            <i class="yellow fa fa-star"></i>
                            <i class="yellow fa fa-star"></i>
                            <i class="yellow fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                        <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque</p>
                      </div>
                    </div>
                  </div>
                  <div class="ratting-form-wrapper">
                    <span>Add a Review</span>
                    <p>
                      Your email address will not be published. Required fields are marked
                      <span>*</span>
                    </p>
                    <div class="ratting-form">
                      <form action="#">
                        <div class="row">
                          <div class="col-lg-3 col-md-6">
                            <div class="rating-form-style mb-20">
                              <label>
                                Name
                                <span>*</span>
                              </label>
                              <input type="text" />
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-6">
                            <div class="rating-form-style mb-20">
                              <label>
                                Email
                                <span>*</span>
                              </label>
                              <input type="email" />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="star-box-wrap">
                              <div class="single-ratting-star">
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                              </div>
                              <div class="single-ratting-star">
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                              </div>
                              <div class="single-ratting-star">
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                              </div>
                              <div class="single-ratting-star">
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                              </div>
                              <div class="single-ratting-star">
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa fa-star"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="rating-form-style mb-20">
                              <label>
                                Your review
                                <span>*</span>
                              </label>
                              <textarea name="Your Review"></textarea>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="form-submit">
                              <input type="submit" value="Submit" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="des-details4" class="tab-pane">
                  <div class="pro-dec-brand-wrap">
                    <div class="row">
                      <div class="ml-auto mr-auto col-lg-10">
                        <div class="row align-items-center">
                          <div class="col-lg-4 col-md-6 col-sm-5">
                            <div class="pro-dec-brand-img text-center">
                              <img src="/assets/images/brand-logo/brand-logo-7.png" alt="alt" />
                            </div>
                          </div>
                          <div class="col-lg-8 col-md-6 col-sm-7">
                            <div class="pro-dec-brand-content">
                              <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="des-details5" class="tab-pane">
                  <div class="about-shiping-content" v-html="getProductDetail.faq">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import * as types from "../../store/types";
import BusinessCardQuantity from "./Quantity";
import BusinessCardPaper from "./Paper";
import BusinesCardSize from "./Size.vue";
import BusinesCardPrinting from "./Printing.vue";
import TreatmentElectroplating from "./treatments/Electroplating.vue";
import TreatmentFoiling from "./treatments/Foiling.vue";
import TreatmentLetterpress from "./treatments/Letterpress.vue";
import TreatmentEmbossing from "./treatments/Embossing.vue";
import TreatmentRaisespotgloss from "./treatments/Raisespotgloss.vue";
import TreatmentRoundcorners from "./treatments/Roundcorners.vue";
import TreatmentSpotgloss from "./treatments/Spotgloss.vue";
import TreatmentSilkscreen from "./treatments/Silkscreen.vue";
import TreatmentLasercut from "./treatments/Lasercut.vue";
import TreatmentLaserengrave from "./treatments/Laserengrave.vue";
import TreatmentEdgepaint from "./treatments/Edgepaint.vue";
import BcardAddon from "./AddOns.vue";
import BcardDesign from "./Design.vue";
import BcardSummary from "./Summary.vue";
export default {
  components: {
    bcardPaper: BusinessCardPaper,
    bcardSize: BusinesCardSize,
    bcardPrinting: BusinesCardPrinting,
    bcardQuantity: BusinessCardQuantity,
    treatmentElectroplating: TreatmentElectroplating,
    treatmentFoiling: TreatmentFoiling,
    treatmentLetterpress: TreatmentLetterpress,
    treatmentEmbossing: TreatmentEmbossing,
    TreatmentSilkscreen: TreatmentSilkscreen,
    TreatmentRaisespotgloss: TreatmentRaisespotgloss,
    TreatmentSpotgloss: TreatmentSpotgloss,
    TreatmentRoundcorners,
    TreatmentLasercut,
    TreatmentLaserengrave,
    TreatmentEdgepaint,
    BcardAddon,
    BcardDesign,
    BcardSummary
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      setProductJson: types.ACTION_BCARDS_MYPRODUCTJSON,
      }),
    getImageUrl(index){
      return '/product-images/'+this.getMyProductJson.wp_id+'/'+index+'.jpg';
    }
  },
  computed: {
    ...mapGetters({
      getMyProductJson: types.BCARDS_MYPRODUCTJSON,
      getProductDetail: types.BCARDS_CARD_DETAIL
      
    })
  },
  watch: {
    $route() {
      this.setProductJson(this.$route.params.id);
    }
  },
    mounted: function() {
        console.log("route id is " + this.$route.params.id);
        //this.setProductJson(this.$route.params.id);
        //console.log(this.$store.state.product.productJson);
        //eventBus.$emit('transparentHeaderClass',false);

        console.log(this.$refs);
        jQuery('.pro-dec-big-img-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            fade: false,
            asNavFor: '.product-dec-slider , .product-dec-slider-2',
        });

        jQuery('.product-dec-slider-2').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.pro-dec-big-img-slider',
            dots: false,
            focusOnSelect: true,
            fade: false,
            prevArrow: '<span class="pro-dec-icon pro-dec-prev"><i class="dlicon arrows-1_tail-left"></i></span>',
            nextArrow: '<span class="pro-dec-icon pro-dec-next"><i class="dlicon arrows-1_tail-right"></i></span>',
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        autoplay: true,
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }
};
</script>
