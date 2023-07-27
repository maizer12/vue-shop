import axios from 'axios'

const postModule = {
	state: () => ({
		cart: [],
	}),
	getters: {},
	mutations: {
		addCart(state, product) {
			const check = state.cart.find(e => e.id === product.id)
			if (check) {
				state.cart = state.cart.filter(e => e.id !== product.id)
				return
			}
			state.cart = [...state.cart, product]
		},
	},
	actions: {},
	namespaced: true,
}

export default postModule
