<template>
	<div class="home-container">
		<div
			class="container"
			:style="{ 'background-image': 'url(' + myBaseUrl + data.bg + ')' }"
			v-if="data.bg"
		>
			<div class="chat">
				<p class="chat-item">QQ: {{ data.qq }}</p>
				<p class="chat-item">微信: {{ data.weixin }}</p>
				<p class="chat-item">邮箱: {{ data.email }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { myBaseUrl } from "@/config";
export default {
	data() {
		return {
			myBaseUrl,
		};
	},
	computed: {
		...mapState("about", ["data"]),
	},
};
</script>

<style lang="less" scoped>
.home-container {
	height: 100%;
	width: 100%;
	.container {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}
	.chat {
		width: 200px;
		height: 100px;
		background: #ccc;
		border: 1px solid #000;
		color: #fff;
		font-size: 16px;
		position: absolute;
		top: 0;
		right:0;
		.chat-item {
			margin: 0;
			width: 100%;
			height: 30px;
		}
	}
}
</style>