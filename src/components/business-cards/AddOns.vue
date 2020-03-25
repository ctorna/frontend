<template>
  <section>
    <h2 class="title mb-2 mt-3">Choose addons</h2>
    <div class="card">
      <div class="card-header">
        <a class="card-link" data-toggle="collapse" href="#accessories">Accessories</a>
      </div>
      <div id="accessories" class="collapse" data-parent="#treatment">
        <div class="card-body">
          <div class="row">
            <div class="col-12 custom-checkbox custom-checkbox-block">
              <div class="checkboxes">
                <label>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="addon"
                    value="card_holder"
                    v-model="addon"
                  />
                  <i class="form-icon"></i> Business Card Holder (₹99.00)
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
      addon: ""
    };
  },
  methods: {
    ...mapGetters({
      getMyproduct: types.BCARDS_MYPRODUCT
    }),
    ...mapActions({
      addons: types.ACTION_BCARDS_MYADDONS
    })
  },
  watch: {
    addon: {
      handler(val) {
        if (this.addon) {
          this.addons({ name: "Accessories", value: this.$store.state.product.bcardConstants.card_holder });
        } else {
          this.addons({ name: "Accessories", value: "" });
          //delete this.$store.state.product.myProduct.addons.foiling;
        }
      },
      deep: true
    }
  }
};
</script>