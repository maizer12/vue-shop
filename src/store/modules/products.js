import axios from 'axios'

const postModule = {
	state: () => ({
		products: [],
		isProductsLoading: false,
		filter: 'All',
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
		},
		setClearProducts(state) {
			state.products = []
		},
	},
	actions: {
		async fetchProducts({ state, commit }) {
			try {
				commit('setLoading', true)
				const category =
					state.filter !== 'All' ? 'category/' + state.filter.toLowerCase() : ''
				const response = await axios.get(
					`https://fakestoreapi.com/products/${category}`,
					{
						params: {},
					}
				)
				commit('setProducts', [...state.products, ...response.data])
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
