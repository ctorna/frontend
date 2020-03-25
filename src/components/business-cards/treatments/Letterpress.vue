<template>
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#letterpress">Letterpress</a>
    </div>
    <div id="letterpress" class="collapse" data-parent="#treatment">
      <div class="card-body">
        <div class="row">
          <div class="col-6 custom-radio custom-radio-block">
            <label class="d-block">Front Side</label>
            <div class="radio">
              <label>
                <input type="radio" class="form-check-input" name="fsletterpress" v-model="treatment.front" value="" checked />
                <i class="form-icon"></i> None
              </label>
            </div>
            <div class="radio" v-for="color in $store.state.product.businessCardsJson.treatments.letterpress.opts.colors"
            :key="color">
              <label>
                <input type="radio" class="form-check-input" name="fsletterpress" :value="color" v-model="treatment.front"/>
                <i class="form-icon black"></i> {{color}}
              </label>
            </div>
            
          </div>
          <div class="col-6 custom-radio custom-radio-block">
            <label class="d-block">Back Side</label>
            <div class="radio">
              <label>
                <input type="radio" class="form-check-input" name="bsletterpress" value="" v-model="treatment.back" checked />
                <i class="form-icon"></i> None
              </label>
            </div>
            <div class="radio"  v-for="color in $store.state.product.businessCardsJson.treatments.letterpress.opts.colors"
            :key="color">
              <label>
                <input type="radio" class="form-check-input" name="bsletterpress" :value="color"  v-model="treatment.back"/>
                <i class="form-icon black"></i> {{color}}
              </label>
            </div>
            
          </div>
        </div>
      </div>
    </div>
      <!--div class="configurable-size mb-3">
    <span>Letterpress</span>
    <div class="row w-100">
      <div class="col-6 pr-1">
        <label class="mb-0">Front Side</label>
        <select class="form-control">
          <option value>None</option>
          <option
            :value="color"
            v-for="color in $store.state.product.businessCardsJson.treatments.letterpress.opts.colors"
            :key="color"
          >{{color}}</option>
        </select>
      </div>
      <div class="col-6 pl-1">
        <label class="mb-0">Back Side</label>
        <select class="form-control">
          <option value>None</option>
          <option
            :value="color"
            v-for="color in $store.state.product.businessCardsJson.treatments.letterpress.opts.colors"
            :key="color"
          >{{color}}</option>
        </select>
      </div>
    </div>
  </div-->
  </div>


</template>
<script>
import { mapActions, mapGetters } from "vuex";
import * as types from "../../../store/types";
export default {
  data() {
    return {
      treatment: {}
    };
  },
  methods: {
    ...mapGetters({
      getMyproduct: types.BCARDS_MYPRODUCT
    }),
    ...mapActions({
      treatments: types.ACTION_BCARDS_MYTREATMENTS
    })
  },
  watch: {
    treatment: {
      handler(val) {
        if (this.treatment.front || this.treatment.back) {
          this.treatments({ name: "letterpress", value: this.treatment });
        } else {
          this.treatments({ name: "letterpress", value: "" });
          //delete this.$store.state.product.myProduct.treatments.foiling;
        }
      },
      deep: true
    }
  }
};
</script>