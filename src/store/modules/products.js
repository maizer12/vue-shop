import axios from 'axios'

const productsModule = {
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
			this.commit('products/updateSortedProducts')
		},
		toggleSort(state, value) {
			state.sort = state.sort !== value ? value : ''
			this.commit('products/updateSortedProducts')
		},
		updateSortedProducts(state) {
			if (state.sort) {
				state.products.sort((a, b) => {
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
				state.products.sort((a, b) => a.id - b.id)
			}
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
		async fetchMoreProducts({ state, commit }) {
			try {
				commit('setLoading', true)
				const category =
					state.filter !== 'All' ? 'category/' + state.filter.toLowerCase() : ''
				const response = await axios.get(
					`https://fakestoreapi.com/products/${category}`
				)
				commit('setProducts', [...state.products, ...response.data])
				if (state.sort) {
					this.commit('products/updateSortedProducts')
				}
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
