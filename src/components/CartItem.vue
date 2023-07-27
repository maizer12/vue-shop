<template>
	<li class="cart-item d-flex mt-4">
		<div class="cart-item__left d-flex">
			<img :src="item.image" :alt="item.name" class="cart-item__img" />
			<div class="cart-item__text">
				<h5 class="cart-item__name">{{ item.title }}</h5>
				<h6 class="cart-item__price">price: {{ item.price }}$</h6>
			</div>
		</div>
		<button class="btn btn-danger" @click="removeElem(item.id)">Remove</button>
	</li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	props: {
		item: Object,
	},
	methods: {
		...mapMutations({
			removeElem: 'cart/removeCart',
		}),
	},
}
</script>

<style scoped>
.cart-item {
	align-items: center;
	justify-content: space-between;
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
}
.cart-item__img {
	max-width: 150px;
	height: 100px;
	object-fit: contain;
}
.cart-item__left {
	column-gap: 30px;
	max-width: 500px;
	align-items: center;
}
</style>
