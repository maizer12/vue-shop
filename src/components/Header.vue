<template>
	<header class="navbar navbar-expand-lg bg-body-tertiary mb-5">
		<div class="container">
			<a href="/" class="logo">
				<h4 class="logo__icon">Logo</h4>
			</a>
			<nav class="menu">
				<a
					href="#"
					class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
					>Home</a
				>
				<a
					href="#"
					class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
					>Cart</a
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
</style>
