<template>
	<main class="cart container">
		<h2 v-if="!items.length" class="title d-flex">Empty cart!</h2>
		<ul v-else class="cart-list">
			<cart-item :item="item" :key="item.id" v-for="item in items" />
		</ul>
		<cart-summary />
	</main>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { mapState } from 'vuex'
import CartSummary from '@/components/CartSummary.vue'
export default {
	components: { CartItem, CartSummary },
	computed: {
		...mapState({
			items: state => state.cart.cart,
		}),
	},
}
</script>

<style scoped>
.cart-list {
	list-style: none;
	padding: 0;
	min-height: 620px;
	max-height: 620px;
	overflow: auto;
}
.title {
	min-height: 500px;
	justify-content: center;
	align-items: center;
}
</style>
