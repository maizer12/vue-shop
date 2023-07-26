import { createStore } from 'vuex'
import products from './modules/products'

export default createStore({
	state: {
		isAuth: false,
	},
	modules: {
		products,
	},
})
