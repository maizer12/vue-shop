const localStore = JSON.parse(localStorage.getItem('carts'))
const cartModule = {
	state: () => ({
		cart: localStore?.length ? localStore : [],
	}),
	getters: {},
	mutations: {
		addCart(state, product) {
			state.cart = [...state.cart, product]
		},
		removeCart(state, id) {
			state.cart = state.cart.filter(e => e.id !== id)
		},
	},
	actions: {},
	namespaced: true,
}

export default cartModule
