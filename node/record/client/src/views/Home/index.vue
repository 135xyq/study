<template>
	<div class="home-container">
		<div class="left-nav">
      		<Nav></Nav>
		</div>
		<div class="right-main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>


import imgUrl from "@/assets/avatar.jpeg";
import Nav from '@/components/Nav'

export default {
	components: {
		Nav,
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.home-container {
	.self-full();
	width: 100%;
	height: 100%;

	.left-nav {
		.self-full();
		width: 200px;
		background: #545c64;
	}
	.right-main {
		position: absolute;
		left: 200px;
		width: calc(100% - 200px);
		height: 100%;
	}
}
</style>
