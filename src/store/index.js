import { createStore } from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
export default createStore({
	state: {
		isAuth: false,
	},
	modules: {
		products,
		cart,
	},
})
