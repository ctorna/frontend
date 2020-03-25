<template>
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#roundcorners">Roundcorners</a>
    </div>
    <div id="roundcorners" class="collapse" data-parent="#treatment">
      <div class="card-body">
        <div class="row">
          <div class="col-12 custom-checkbox custom-checkbox-block">
           
            <div class="checkboxes">
              <label>
                <input type="checkbox" class="form-check-input" id="roundcorners" value="single" v-model="treatment"/>
                <i class="form-icon"></i> Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        console.log(val);
        if (this.treatment) {
          this.treatments({ name: "round_corners", value: 'single' });
        } else {
          this.treatments({ name: "round_corners", value: "" });
          //delete this.$store.state.product.myProduct.treatments.foiling;
        }
      },
      deep: true
    }
  }
};
</script>