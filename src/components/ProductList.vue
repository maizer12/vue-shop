<template>
	<ul class="products-list d-grid container">
		<template :key="item.id" v-for="(item, i) in items">
			<product-item
				v-if="i + 1 <= visibleProducts.max && i + 1 > visibleProducts.min"
				:item="item"
			/>
		</template>
	</ul>
	<h1 v-if="loading" class="loading">Loading...</h1>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem.vue'

export default {
	components: {
		ProductItem,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
		loading: {
			type: Boolean,
			required: true,
		},
	},
	mounted() {
		console.log(this.visibleProducts)
	},
	watch: {
		visibleProducts(newProducts) {
			console.log(newProducts)
		},
	},
	computed: {
		...mapGetters({
			visibleProducts: 'products/calculateVisibleProducts',
		}),
	},
}
</script>

<style scoped>
.products-list {
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	row-gap: 40px;
	width: fit-content;
	column-gap: 40px;
}
.loading {
	text-align: center;
}
</style>
