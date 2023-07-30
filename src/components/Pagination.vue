<template>
	<div class="pagination mt-5 container d-flex">
		<button
			:class="'btn btn-dark ' + [!(openPage - 1) ? 'disabled' : '']"
			@click="switchPage((openPage -= 1))"
		>
			Previous
		</button>
		<ul class="pagination__items pagination">
			<li class="page-item" :key="item" v-for="item in length">
				<button
					@click="switchPage(item)"
					:class="'btn ' + [openPage === item ? 'btn-dark' : 'btn-light']"
				>
					{{ item }}
				</button>
			</li>
		</ul>
		<button
			:class="'btn btn-dark ' + [openPage === length ? 'disabled' : '']"
			@click="switchPage((openPage += 1))"
		>
			Next
		</button>
	</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
	props: {
		length: Number,
	},
	computed: {
		...mapState({
			openPage: state => state.products.openPage,
		}),
	},
	methods: {
		...mapMutations({
			switchPage: 'products/switchPage',
		}),
	},
}
</script>

<style scoped>
.pagination {
	justify-content: space-between;
	align-items: center;
}
.pagination__items {
	column-gap: 15px;
	height: fit-content;
	margin: 0;
}
</style>
