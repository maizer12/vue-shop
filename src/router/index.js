import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/cart',
		component: Cart,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router
