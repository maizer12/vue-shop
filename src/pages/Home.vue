<template>
	<section class="filter-sort container d-flex mb-5">
		<filter-panel />
		<sort />
	</section>
	<product-list :loading="loading" :items="products" />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductList from '@/components/ProductList'

import FilterPanel from '@/components/FilterPanel.vue'
import Sort from '@/components/Sort.vue'
export default {
	components: { ProductList, FilterPanel, Sort },
	mounted() {
		this.fetchProducts()
		window.addEventListener('scroll', this.handleScroll, { passive: true })
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll, { passive: true })
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
		handleScroll(e) {
			const scrollTop = e.target.documentElement.scrollTop
			const scrollHeight = e.target.documentElement.scrollHeight
			const windowHeight = window.innerHeight
			if (scrollHeight - (scrollTop + windowHeight) < 100 && !this.loading) {
				this.fetchProducts()
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
