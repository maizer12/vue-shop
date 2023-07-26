<template>
	<ul class="products-list d-grid container">
		<li class="products-item card" :key="i" v-for="(item, i) in items">
			<img
				:src="item.image"
				class="products-item__img card-img-top"
				alt="card"
			/>
			<div class="card-body d-flex">
				<h5 class="card-title mb-4 fs-5">{{ item.title }}</h5>

				<div class="card-body-footer d-flex">
					<div class="card-body-footer__column">
						<h5 class="card-body-footer__price">price: {{ item.price }}$</h5>
						<star-rating
							:read-only="true"
							:rating="item.rating.rate"
							:star-size="20"
							:show-rating="false"
						/>
					</div>
					<a href="#" class="btn btn-secondary">Add to Cart</a>
				</div>
			</div>
		</li>
	</ul>
	<h1 v-if="loading" class="loading">Loading...</h1>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
	components: {
		StarRating,
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
.products-item {
	max-width: 350px;
	width: 100%;
	padding: 10px;
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
