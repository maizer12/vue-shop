<template>
	<div class="cart-item-calculator d-flex">
		<button class="cart-item-calculator__btn fw-bold">-</button>
		<div class="cart-item-calculator__amount fw-bold">{{ num }}</div>
		<button class="cart-item-calculator__btn fw-bold">+</button>
	</div>
</template>

<script>
export default {
	props: {
		num: Number,
	},
}
</script>

<style lang="scss" scoped></style>
