<template>
	<div class="about">
		<h1>This is an about page</h1>
		<div>
			<button @click="count++">
				{{ count }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
		};
	},
};
</script>

<style lang="less">
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
		h1{
			margin-right: 100px;
		}
	}
}
</style>
