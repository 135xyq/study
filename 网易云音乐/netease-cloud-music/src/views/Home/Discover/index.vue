<template>
	<div class="discover-container">
		<!-- 头部的导航栏 -->
		<TopLink></TopLink>
		<router-view></router-view>
	</div>
</template>

<script>
import TopLink from "@/components/TopLink"
export default {
	components:{
		TopLink,
	}
};
</script>
