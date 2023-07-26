<template>
	<div class="btn-group">
		<button
			class="btn btn-dark dropdown-toggle"
			type="button"
			data-bs-toggle="dropdown"
			data-bs-auto-close="true"
			aria-expanded="false"
		>
			Sort by{{ sort && ': ' + sort }}
		</button>
		<ul class="dropdown-menu">
			<li
				:class="['dropdown-item ' + (sort === item.value && 'active')]"
				:key="item.name"
				@click="setSort(item.value)"
				v-for="item in items"
			>
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { sortItems } from '@/_config'
import { mapMutations, mapState } from 'vuex'
export default {
	data() {
		return {
			items: sortItems,
		}
	},
	computed: {
		...mapState({
			sort: state => state.products.sort,
		}),
	},
	methods: {
		...mapMutations({
			setSort: 'products/setSort',
		}),
	},
}
</script>

<style scoped>
.dropdown-item {
	cursor: pointer;
}
.dropdown-item.active {
	background-color: black;
}
</style>
