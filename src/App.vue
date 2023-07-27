<template>
	<div class="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/Header'
export default {
	components: { Header },
}
</script>

<style>
.filter-sort {
	align-items: center;
	justify-content: space-between;
}
</style>
