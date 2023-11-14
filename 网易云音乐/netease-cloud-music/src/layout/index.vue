<template>
	<div class="layout-container">
		<div class="nav">
			<TopNav></TopNav>
		</div>
	</div>
</template>

<script>
import TopNav from "@/components/TopNav";
export default {
	components: {
		TopNav,
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/definition.less";
.layout-container {
	.nav {
		width: 100%;
		height: 70px;
		border-bottom: 1px solid #000;
		box-sizing: border-box;
		background-color: @bg;
	}
}
</style>