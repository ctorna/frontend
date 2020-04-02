<template>
	<div class="col-12 col-sm-6">
		<h4 class="mb-sm-3">Choose your size</h4>
		<div class="radio" v-for="(size,key) in $store.state.product.productJson.sizes.opts" :key="key" @click="sizeClick(key)">
			<label>
				<input type="radio" :value="key" v-model="$store.state.product.myProduct.size"/>
				<i class="form-icon"></i> {{$store.state.product.bcardConstants[key].name}} {{size}}
			</label>
		</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex';
import * as types from '../../store/types';
export default {
	methods:{
		...mapActions({
        	sizeClick: types.ACTION_BCARDS_MYSIZE  
    	})
  	}
}
</script>