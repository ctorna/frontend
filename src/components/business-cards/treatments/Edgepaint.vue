<template>
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#edgepaint">Edgepaint</a>
    </div>
    <div id="edgepaint" class="collapse" data-parent="#treatment">
      <div class="card-body">
        <div class="row">
          <div class="col-12 custom-radio custom-radio-block">
            <div class="radio">
              <label>
                <input type="radio" class="form-check-input" name="edgepaint" value="" v-model="treatment" checked />
                <i class="form-icon"></i> None
              </label>
            </div>
            <div class="radio" v-for="color in $store.state.product.businessCardsJson.treatments.edgepaint.opts.colors"
        :key="color">
              <label>
                <input type="radio" class="form-check-input" name="edgepaint" :value="color"  v-model="treatment"/>
                <i class="form-icon copper"></i> {{color}}
              </label>
            </div>
           </div>
        </div>
      </div>
    </div>
     <!--div class="configurable-size mb-3">
    <span>Edgepaint</span>
    <select class="form-control" v-model="treatment">
      <option value>None</option>
      <option
        :value="color"
        v-for="color in $store.state.product.businessCardsJson.treatments.edgepaint.opts.colors"
        :key="color"
      >{{color}}</option>
    </select>
  </div-->
  </div>

 
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import * as types from "../../../store/types";
export default {
  data() {
    return {
      treatment: ''
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
        if (this.treatment) {
          this.treatments({ name: "edgepaint", value: this.treatment });
        } else {
          this.treatments({ name: "edgepaint", value: "" });
          //delete this.$store.state.product.myProduct.treatments.foiling;
        }
      },
      deep: true
    }
  }
};
</script>