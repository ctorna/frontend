<template>
  <section>
                          <div class="card">
                            <div class="card-header">
                              <a class="card-link" data-toggle="collapse" href="#design">Design</a>
                            </div>
                            <div id="design" class="collapse" data-parent="#treatment">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-12 custom-radio custom-radio-block">
                                    <div class="radio">
                                      <label>
                                        <input
                                          type="radio"
                                          class="form-check-input"  name="design"
                                          value="design_upload"
                                          v-model="addon"
                                          checked
                                        />
                                        <i class="form-icon"></i> Upload or email your own design
                                      </label>
                                    </div>
                                    <div class="radio">
                                      <label>
                                        <input type="radio" class="form-check-input" name="design" value="design_business_card" v-model="addon"/>
                                        <i class="form-icon"></i> Please design my business card (₹999.00)
                                      </label>
                                    </div>
                                    <div class="radio">
                                      <label>
                                        <input type="radio" class="form-check-input" name="design" value="design_logo" v-model="addon"/>
                                        <i class="form-icon"></i> Please design my logo & business card (₹5,999.00)
                                      </label>
                                    </div>
                                    <div class="radio">
                                      <label>
                                        <input type="radio" class="form-check-input" name="design" value="design_template" v-model="addon"/>
                                        <i class="form-icon"></i> I will design using template
                                      </label>
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
export default {
  data() {
    return {
      addon: ''
    };
  },
  methods: {
    ...mapGetters({
      getMyproduct: types.BCARDS_MYPRODUCT
    }),
    ...mapActions({
      addons: types.ACTION_BCARDS_MYADDONS,
      updateMyPrice:types.ACTION_BCARDS_MYPRICE
    })
  },
  watch: {
    addon: {
      handler(val) {
        if (this.addon) {
          this.addons({ name: "design", value: this.$store.state.product.bcardConstants[this.addon] });
        } else {
          this.addons({ name: "design", value: "" });
          //delete this.$store.state.product.myProduct.treatments.foiling;
        }
        //this.updateMyPrice('design'+this.addon);
      },
      deep: true
    }
  },
  mounted(){
    this.addon='design_upload';
  }
};
</script>