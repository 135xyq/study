<template>
	<div class="slide-show-container">
		<!-- 添加模糊背景 -->
		<div
			class="background-container"
			:style="{ background:  bg }"
		></div>
		<!-- 轮播图区域 -->
		<div class="imgs-container">
			<ul class="images">
				<li
					class="image"
					v-for="(item, index) in bannerInfo"
					:key="index"
					v-show="selectIndex === index"
				>
					<img :src="item.img" alt="" class="item-img" />
					<img :src="fixedImg" class="download" />
				</li>
			</ul>
		</div>
		<!-- 左右按钮 -->
		<div class="icons">
			<div @click="onHandlePrevious">
				<Icon type="zuo" class="previous"></Icon>
			</div>
			<div @click="onHandleNext">
				<Icon type="you" class="next"></Icon>
			</div>
		</div>
		<!-- 下标 -->
		<div class="points-container">
			<span
				v-for="item in bannerInfo.length"
				:key="item"
				class="point"
				:class="{ selected: selectIndex === item - 1 }"
				@click="selectIndex = item - 1"
			></span>
		</div>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
import url from "@/assets/PCdownload.jpg";
export default {
	components: {
		Icon,
	},
	props: {
		bannerInfo: {
			type: Array,
			required: true,
		},
		fixedImg: {
			type: String,
			default: url,
		},
	},
	data() {
		return {
			selectIndex: 0, //当前轮播图的下标
			timer: null, //定时器
		};
	},
	created() {
		// 轮播图自动播放
		this.timer = setInterval(() => {
			if (this.selectIndex === this.bannerInfo.length - 1) {
				this.selectIndex = 0;
			} else {
				this.selectIndex++;
			}
		}, 3000);
	},
	beforeDestroy() {
		clearInterval(this.timer);
	},
	computed: {
		// 背景颜色
		bg() {
			if (this.bannerInfo.length) {
				return this.bannerInfo[this.selectIndex].bgColor;
			}else{
                return '#333';
            }
		},
	},
	methods: {
		// 上一个图片
		onHandlePrevious() {
			if (this.selectIndex === 0) {
				this.selectIndex = this.bannerInfo.length - 1;
			} else {
				this.selectIndex--;
			}
		},
		// 下一张图片
		onHandleNext() {
			if (this.selectIndex === this.bannerInfo.length - 1) {
				this.selectIndex = 0;
			} else {
				this.selectIndex++;
			}
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/definition.less";
.slide-show-container {
	width: 100%;
	height: 100%;
	position: relative;
	.background-container {
		width: 100%;
		height: 100%;
		position: absolute;
		background-size: cover;
        opacity: 0.2;
	}

	// filter: blur(10px);
	.imgs-container {
		.images {
			width: 982px;
			height: 100%;
			margin: 0 auto;
			position: relative;
			.image {
				position: absolute;
				.item-img {
					width: 730px;
					height: 284px;
				}
				.download {
					position: absolute;
					top: 0;
					z-index: 20;
					width: 254px;
					height: 284px;
				}
			}
		}
	}
	.icons {
		font-size: 40px;
		font-weight: 300;
		color: #fff;
		width: 37px;
		height: 63px;
		line-height: 63px;
		cursor: pointer;
		.previous {
			position: absolute;
			top: 120px;
			left: calc((100% - 982px) / 2 - 70px);
			&:hover {
				background: rgba(204, 204, 204, 0.329);
			}
		}
		.next {
			position: absolute;
			top: 120px;
			right: calc((100% - 982px) / 2 - 70px);
			&:hover {
				background: #ccc;
			}
		}
	}
	.points-container {
		position: absolute;
		left: 50%;
		transform: translateX(-50% - 60px);
		bottom: 10px;
		.point {
			display: inline-block;
			width: 6px;
			height: 6px;
			background-color: rgb(219, 215, 215);
			border-radius: 50%;
			margin: 0 8px;
			cursor: pointer;
			&.selected {
				background-color: @red;
			}
			&:hover {
				background-color: @red;
			}
		}
	}
}
</style>