<template>
	<main class="home pb-5">
		<section class="filter-sort container d-flex mb-5">
			<filter-panel />
			<sort />
		</section>
		<product-list :loading="loading" :items="products" />
		<pagination :length="Math.ceil(products.length / 6)" />
	</main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductList from '@/components/ProductList'

import FilterPanel from '@/components/FilterPanel.vue'
import Sort from '@/components/Sort.vue'
import Pagination from '@/components/Pagination.vue'
export default {
	components: { ProductList, FilterPanel, Sort, Pagination },
	mounted() {
		this.fetchProducts()
	},
	computed: {
		...mapState({
			products: state => state.products.products,
			loading: state => state.products.isProductsLoading,
		}),
	},
	methods: {
		...mapActions({
			fetchProducts: 'products/fetchProducts',
		}),
	},
}
</script>

<style scoped></style>
