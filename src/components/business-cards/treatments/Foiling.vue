<template>
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#foiling">Foiling</a>
    </div>
    <div id="foiling" class="collapse" data-parent="#treatment">
      <div class="card-body">
        <div class="row">
          <div class="col-6 custom-radio custom-radio-block">
            <label class="d-block">Front Side</label>
            <div class="radio" >
              <label>
                <input type="radio" value="" class="form-check-input" name="fsfoiling" v-model="treatment.front" checked />
                <i class="form-icon"></i> None
              </label>
            </div>
            <div class="radio" 
            v-for="color in $store.state.product.businessCardsJson.treatments.foiling.opts.colors"
            :key="color">
              <label>
                <input type="radio" class="form-check-input" name="fsfoiling" :value="color" v-model="treatment.front"/>
                <i class="form-icon copper"></i> {{color}}
              </label>
            </div>
           
          </div>
          <div class="col-6 custom-radio custom-radio-block">
            <label class="d-block">Back Side</label>
            <div class="radio">
              <label>
                <input type="radio" class="form-check-input" name="bsfoiling" value="" v-model="treatment.back" checked />
                <i class="form-icon"></i> None
              </label>
            </div>
            <div class="radio" 
            v-for="color in $store.state.product.businessCardsJson.treatments.foiling.opts.colors"
            :key="color" >
              <label>
                <input type="radio" class="form-check-input" name="bsfoiling" :value="color"  v-model="treatment.back"/>
                <i class="form-icon copper"></i> {{color}}
              </label>
            </div>


          </div>
        </div>
      </div>
    </div>
     <!-- old code -->

  <!--div class="configurable-size mb-3">
    <span>Foiling{{getMyproduct()}}</span>
    <div class="row w-100">
      <div class="col-6 pr-1">
        <label class="mb-0">Front Side</label>
        <select class="form-control" v-model="treatment.front">
          <option value>None</option>
          <option
            :value="color"
            v-for="color in $store.state.product.businessCardsJson.treatments.foiling.opts.colors"
            :key="color"
          >{{color}}</option>
        </select>
      </div>
      <div class="col-6 pl-1">
        <label class="mb-0">Back Side</label>
        <select class="form-control" v-model="treatment.back">
          <option value>None</option>
          <option
            :value="color"
            v-for="color in $store.state.product.businessCardsJson.treatments.foiling.opts.colors"
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
          this.treatments({ name: "foiling", value: this.treatment });
        } else {
          this.treatments({ name: "foiling", value: "" });
          //delete this.$store.state.product.myProduct.treatments.foiling;
        }
      },
      deep: true
    }
  }
};
</script>