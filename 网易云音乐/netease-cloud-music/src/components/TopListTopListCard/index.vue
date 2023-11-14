<template>
	<div class="top-list-top-list-card-container">
		<div class="img">
			<img :src="imgUrl" alt="" />
		</div>
		<div class="text">
			<p class="title">{{ title }}</p>
			<p class="description">{{ description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imgUrl: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
	},
};
</script>

<style lang="less" scoped>
.top-list-top-list-card-container {
	height: 40px;
	overflow: hidden;
	.img {
		float: left;
	}
	.text {
		padding-left: 10px;
		float: left;
		font-size: 10px;
		margin-top: 2px;
		.description {
			color: #999;
			margin-top: 5px;
		}
	}
}
</style>