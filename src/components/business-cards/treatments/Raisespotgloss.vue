<template>
  <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#raisespotgloss">Raisespotgloss</a>
    </div>
    <div id="raisespotgloss" class="collapse" data-parent="#treatment">
      <div class="card-body">
        <div class="row">
          <div class="col-12 custom-radio custom-radio-block">
            <div class="radio">
              <label>
                <input type="radio" class="form-check-input" name="raisespotgloss" value="" v-model="treatment" checked />
                <i class="form-icon"></i> None
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" class="form-check-input" name="raisespotgloss" value="single" v-model="treatment"/>
                <i class="form-icon"></i> Single Side
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" class="form-check-input" name="raisespotgloss" value="both" v-model="treatment"/>
                <i class="form-icon"></i> Both Side
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
        if (this.treatment || this.treatment) {
          this.treatments({ name: "raised_spot_gloss", value: this.treatment });
        } else {
          this.treatments({ name: "raised_spot_gloss", value: "" });
          //delete this.$store.state.product.myProduct.treatments.foiling;
        }
      },
      deep: true
    }
  }
};
</script>