<template>
	<div class="home-container">
		<div class="container" v-if="data.bg && !hidden">
			<div
				class="banner-img"
				:style="{
					'background-image': 'url(' + myBaseUrl + data.banner + ')',
				}"
			></div>
			<div class="banner-text">
				{{ data.bannerText }}
			</div>
			<div class="button" @click="onHandelToPage">
				<p class="title">进入谢永强的个人主页</p>
				<Icon type="arrowDown"></Icon>
			</div>
		</div>
		<div class="page" v-if="showPage">
			<div
				class="bg-img"
				:style="{
					'background-image': 'url(' + myBaseUrl + data.bg + ')',
				}"
			></div>
			<div class="page-content">
				<div class="page-header">个人介绍
					<a :href="myBaseUrl + data.resume" class="resume" target="_blank">简历</a>
				</div>
				<div class="page-main">
					{{ data.selfDescription }}
				</div>
				<div class="chat-main">
					<p class="chat-item"><span class="chat-item-title">QQ: </span>{{ data.qq }}</p>
					<p class="chat-item"><span class="chat-item-title">微信:</span> {{ data.weixin }}</p>
					<p class="chat-item"><span class="chat-item-title">邮箱:</span> {{ data.email }}</p>
				</div>
			</div>
		</div>
		<div class="chat-content"></div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { myBaseUrl } from "@/config";
import Icon from "@/components/Icon";
export default {
	data() {
		return {
			myBaseUrl,
			hidden: false, //进入主页显示
			showPage: false, //主页是否显示
		};
	},
	computed: {
		...mapState("about", ["data"]),
	},
	components: {
		Icon,
	},
	methods: {
		// 显示其他页面
		onHandelToPage() {
			this.hidden = true;
			this.showPage = true;
		},
	},
};
</script>

<style lang="less" scoped>
.home-container {
	height: 100%;
	width: 100%;
	position: relative;
	.container {
		width: 100%;
		height: 100%;
		.banner-img {
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			position: relative;
			opacity: 0.4;
		}
	}
	.button {
		color: rgb(30, 21, 21);
		font-size: 20px;
		position: absolute;
		bottom: 50px;
		left: 40%;
		cursor: pointer;
		.icon-container {
			position: absolute;
			left: 40%;
			font-size: 30px;
		}
		&:hover {
			color: rgb(111, 111, 111);
			animation: top 2s;
		}
		@keyframes top {
			0% {
				transform: translateY(-20px);
			}
			100% {
				transform: translateY(20px);
			}
		}
	}
	.banner-text {
		background-image: -webkit-linear-gradient(
			left,
			blue,
			#66ffff 10%,
			#cc00ff 20%,
			#cc00cc 30%,
			#ccccff 40%,
			#00ffff 50%,
			#ccccff 60%,
			#cc00cc 70%,
			#cc00ff 80%,
			#66ffff 90%,
			blue 100%
		);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-background-size: 200% 100%;
		-webkit-animation: masked-animation 4s linear infinite;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 30px;
	}
	.page {
		width: 100%;
		height: 100%;
		position: relative;
		.bg-img {
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-size: cover;
			position: relative;
			opacity: 0.4;
		}
		.page-content {
			width: 400px;
			height: 300px;
			border: 1px solid #ccc;
			position: absolute;
			left: calc(50% - 200px);
			top: calc(50% - 240px);
			.resume{
				position: absolute;
				right: 20px;
			}
			.page-header {
				height: 40px;
				width: 100%;
				text-align: center;
				color: #fff;
				line-height: 40px;
				border-bottom: 1px solid #000;
				background: linear-gradient(
					to bottom,
					#1831307a,
					#23422385,
					#296f5973
				);
			}
			.page-main {
				height: 260px;
			}
			.chat-main {
				height: 120px;
				width: 100%;
				.chat-item {
					height: 40px;
					line-height: 40px;
					border: 1px solid #ccc;
					border-top: none;
					box-sizing: border-box;
				}
				.chat-item-title{
					display: inline-block;
					width: 40px;
					padding: 0 20px;
					border-right: 1px solid #ccc;
					margin-right: 10px;
				}
			}
		}
	}
}
</style>