<template>
	<div class="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/Header'
import { mapState } from 'vuex'
export default {
	components: { Header },
	computed: {
		...mapState({
			cart: state => state.cart.cart,
		}),
	},
	watch: {
		cart(newCart) {
			localStorage.setItem('carts', JSON.stringify(newCart))
		},
	},
}
</script>

<style>
.filter-sort {
	align-items: center;
	justify-content: space-between;
}
</style>
