<template>
	<ul class="products-list d-grid container">
		<product-item :key="i" :item="item" v-for="(item, i) in items" />
	</ul>
	<h1 v-if="loading" class="loading">Loading...</h1>
</template>

<script>
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
}
</script>

<style scoped>
.products-list {
	grid-template-columns: 1fr 1fr 1fr;
	row-gap: 40px;
	width: fit-content;
	column-gap: 40px;
}
.loading {
	text-align: center;
}
</style>
