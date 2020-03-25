<template>
    <div class="card">
    <div class="card-header">
      <a class="card-link" data-toggle="collapse" href="#lasercut">Lasercut</a>
    </div>
    <div id="lasercut" class="collapse" data-parent="#treatment">
      <div class="card-body">
        <div class="row">
          <div class="col-12 custom-checkbox custom-checkbox-block">
            <div class="checkboxes">
              <label>
                <input type="checkbox" class="form-check-input" name="lasercut" value="single" v-model="treatment"/>
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
        if (this.treatment) {
          this.treatments({ name: "laser_cut", value: 'single' });
        } else {
          this.treatments({ name: "laser_cut", value: "" });
          //delete this.$store.state.product.myProduct.treatments.foiling;
        }
      },
      deep: true
    }
  }
};
</script>