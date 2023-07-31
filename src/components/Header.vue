<template>
	<header class="navbar navbar-expand-lg bg-body-tertiary mb-5">
		<div class="container">
			<router-link to="/" class="logo">
				<h4 class="logo__icon">Top-Shop</h4>
			</router-link>
			<nav class="menu">
				<router-link
					class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
					to="/"
				>
					Home</router-link
				>
				<router-link
					to="/cart"
					class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
					>Cart</router-link
				>
			</nav>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
	text-decoration: none;
	color: black;
	transition: 0.6s;
}
.logo:hover {
	color: rgb(153, 153, 153);
}
.menu {
	display: flex;
	column-gap: 25px;
}
.router-link-exact-active {
	font-weight: 700;
}
</style>
