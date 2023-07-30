<template>
	<section class="cart-summary mt-5 d-flex">
		<div class="cart-summary__header">
			<h6 class="cart-summary__sum">
				Total purchase amount: {{ cart.length }}
			</h6>
			<h4 class="cart-summary__price">
				Total purchase price: {{ getSumPrice() }}$
			</h4>
		</div>
		<div class="cart-summary__buttons d-flex">
			<router-link to="/" class="cart-summary__btn btn btn-outline-danger">
				Back to home
			</router-link>
			<button
				v-if="cart.length"
				@click="alertMessage('successfully')"
				class="cart-summary__btn btn btn-success m-0"
			>
				Proceed to payment
			</button>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState({
			cart: state => state.cart.cart,
		}),
	},
	methods: {
		getSumPrice() {
			return this.cart.reduce((p, e) => (p += e.price), 0)
		},
		alertMessage(message) {
			alert(message)
		},
	},
}
</script>

<style scoped>
.cart-summary {
	align-items: flex-end;
	justify-content: space-between;
}
.cart-summary__buttons {
	column-gap: 10px;
}
</style>
