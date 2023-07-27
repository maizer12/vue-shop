<template>
	<li class="products-item card">
		<img :src="item.image" class="products-item__img card-img-top" alt="card" />
		<div class="card-body d-flex">
			<h5 class="card-title mb-4 fs-5">{{ item.title }}</h5>
			<div class="card-body-footer d-flex">
				<div class="card-body-footer__column">
					<h5 class="card-body-footer__price">price: {{ item.price }}$</h5>
					<div class="rating d-flex">
						<star-rating
							:read-only="true"
							:rating="item.rating.rate"
							:star-size="20"
							:show-rating="false"
						/>
						<p class="rating__text">{{ item.rating.count }}</p>
					</div>
				</div>
				<button
					@click="switchCart(item)"
					:class="['btn btn-success ', isActive(item.id) ? 'btn-danger' : '']"
				>
					{{ isActive(item.id) ? 'Remove Order' : 'Add to Cart' }}
				</button>
			</div>
		</div>
	</li>
</template>

<script>
import StarRating from 'vue-star-rating'
import { mapMutations, mapState } from 'vuex'
export default {
	components: { StarRating },
	props: { item: Object },
	computed: {
		...mapState({
			cart: state => state.cart.cart,
		}),
	},
	methods: {
		...mapMutations({
			addCart: 'cart/addCart',
			removeCart: 'cart/removeCart',
		}),
		switchCart(elem) {
			const checked = this.isActive(elem.id)
			if (checked) {
				this.removeCart(elem.id)
			} else {
				this.addCart(elem)
			}
		},
		isActive(itemId) {
			return this.cart.find(e => e.id === itemId)
		},
	},
}
</script>

<style scoped>
.products-item {
	max-width: 350px;
	width: 100%;
	padding: 10px;
}
.rating {
	align-items: center;
	column-gap: 5px;
}
.rating__text {
	padding: 0;
	margin: 0;
	margin-top: 4px;
	font-weight: 700;
}
.card-body-footer {
	justify-content: space-between;
	align-items: center;
}
.products-item__img {
	object-fit: contain;
	max-height: 200px;
}
.card-body {
	flex-direction: column;
	justify-content: space-between;
}
</style>
