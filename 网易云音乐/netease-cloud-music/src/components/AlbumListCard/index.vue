<template>
	<div
		class="album-list-card-container"
		:style="{ width: width + 'px', height: height + 'px' }"
	>
		<div class="top-img">
			<div class="card" :title="title">
				<router-link :to="path + '?id=' + id">
					<img
						:src="imgUrl"
						alt=""
						:style="{ width: size + 'px', height: size + 'px' }"
					/>
				</router-link>
			</div>
			<div class="button" @click="onHandlePlay">
				<Icon type="bofang"></Icon>
			</div>
		</div>
		<div class="title-container">
			<router-link :to="path + '?id=' + id" class="title">{{ title }}</router-link>
			<router-link :to="artistPath + '?id=' + artistId" class="sub-title">{{
				subTitle
			}}</router-link>
		</div>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	props: {
		width: {
			type: Number,
			required: true,
		},
		height: {
			type: Number,
			required: true,
		},
		imgUrl: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		subTitle: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			default: "/album",
		},
		artistPath: {
			type: String,
			default: "/artist",
		},
		size: {
			type: Number,
			default: 100,
		},
		id:{
			type:Number,
			required:true
		},
		artistId:{
			type:Number,
			required:true,
		}
	},
	components: {
		Icon,
	},
	methods: {
		// 点击播放按钮
		onHandlePlay() {
			this.$emit("onPlayAlbum", this.path);
		},
	},
};
</script>

<style lang="less" scoped>
.album-list-card-container {
	.card {
		position: relative;
		z-index: 999;
		img {
			z-index: 999;
		}
		&::after {
			display: block;
			content: "";
			width: 50%;
			height: 50%;
			border: 22px solid #000;
			border-radius: 50%;
			position: absolute;
			top: calc(50% - 50px);
			right: 3px;
			z-index: -2;
		}
		&::before {
			display: block;
			content: "";
			width: 5%;
			height: 90%;
			border: 1px solid #cccccc57;
			position: absolute;
			top: 2%;
			right: 13px;
			z-index: -1;
		}
	}
	.title-container {
		.title {
			display: block;
			color: #000;
			font-size: 12px;
		}
		.sub-title {
			display: block;
			color: #333;
			font-size: 12px;
			margin-top: 3px;
		}
		.title,
		.sub-title {
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.top-img {
		position: relative;
		.button {
			display: none;
			position: absolute;
			bottom: 10px;
			right: 25px;
			z-index: 9999;
			width: 16px;
			height: 16px;
			border: 2px solid #ccc;
			line-height: 16px;
			text-align: center;
			border-radius: 50%;
			color: #ccc;
			cursor: pointer;
		}
		&:hover {
			.button {
				display: block;
			}
		}
	}
}
</style>