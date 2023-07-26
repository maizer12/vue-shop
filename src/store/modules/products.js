import axios from 'axios'

const postModule = {
	state: () => ({
		products: [],
		isProductsLoading: false,
		filter: 'All',
		sort: '',
	}),
	getters: {},
	mutations: {
		setProducts(state, products) {
			state.products = products
		},
		setLoading(state, bool) {
			state.isProductsLoading = bool
		},
		setFilter(state, name) {
			state.filter = name
			this.dispatch('products/fetchProducts')
			this.commit('products/setSortProducts')
		},
		setClearProducts(state) {
			state.products = []
		},
		setSort(state, value) {
			if (state.sort !== value) {
				state.sort = value
				this.commit('products/setSortProducts')
			} else {
				state.sort = ''
				state.products = [...state.products.sort((a, b) => a.id - b.id)]
			}
		},
		setSortProducts(state) {
			state.products = [
				...state.products.sort((a, b) => {
					const one = a[state.sort]?.count ? a[state.sort].count : a[state.sort]
					const two = b[state.sort]?.count ? b[state.sort].count : b[state.sort]
					if (typeof one === 'number' && typeof two === 'number') {
						return one - two
					} else if (typeof one === 'string' && typeof two === 'string') {
						return one.localeCompare(two)
					} else {
						return 0
					}
				}),
			]
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
				commit('setProducts', [...state.products, ...response.data])
				this.commit('products/setSortProducts')
			} catch (e) {
				console.log(e)
				alert('Error')
			} finally {
				commit('setLoading', false)
			}
		},
	},
	namespaced: true,
}

export default postModule
