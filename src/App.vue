<template>
	<div class="app">
		<Header />
		<Home />
	</div>
</template>

<script>
import Home from './pages/Home'
import Header from '@/components/Header'
export default {
	components: { Home, Header },
}
</script>

<style>
.filter-sort {
	align-items: center;
	justify-content: space-between;
}
</style>
