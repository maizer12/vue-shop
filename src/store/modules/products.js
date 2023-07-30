import axios from 'axios'

const productsModule = {
	state: () => ({
		products: [],
		isProductsLoading: false,
		filter: 'All',
		sort: '',
		openPage: 1,
	}),
	getters: {
		sortedProducts: state => {
			if (state.sort) {
				return [...state.products].sort((a, b) => {
					const one = a[state.sort]?.count ? a[state.sort].count : a[state.sort]
					const two = b[state.sort]?.count ? b[state.sort].count : b[state.sort]
					if (typeof one === 'number' && typeof two === 'number') {
						return one - two
					} else if (typeof one === 'string' && typeof two === 'string') {
						return one.localeCompare(two)
					} else {
						return 0
					}
				})
			} else {
				return [...state.products].sort((a, b) => a.id - b.id)
			}
		},
		calculateVisibleProducts: state => {
			const sum = state.openPage * 6
			return { max: sum, min: sum - 6 }
		},
	},
	mutations: {
		setProducts(state, products) {
			state.products = products
		},
		setLoading(state, bool) {
			state.isProductsLoading = bool
		},
		setFilter(state, name) {
			state.filter = name
			state.openPage = 1
			this.dispatch('products/fetchProducts')
			this.commit('products/updateSortedProducts')
		},
		toggleSort(state, value) {
			state.sort = state.sort !== value ? value : ''
			this.commit('products/updateSortedProducts')
		},
		updateSortedProducts(state) {
			state.products = this.getters['products/sortedProducts']
		},
		switchPage(state, num) {
			state.openPage = num
		},
	},
	actions: {
		async fetchProducts({ state, commit }) {
			try {
				commit('setLoading', true)
				const category =
					state.filter !== 'All' ? 'category/' + state.filter.toLowerCase() : ''
				const response = await axios.get(
					`https://fakestoreapi.com/products/${category}`
				)
				commit('setProducts', response.data)
			} catch (e) {
				console.log(e)
				alert('Server error!')
			} finally {
				commit('setLoading', false)
			}
		},
	},
	namespaced: true,
}

export default productsModule
