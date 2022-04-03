<template>
	<div class="top-list-detail-card-container">
		<div class="img">
			<img :src="imgUrl" alt="" />
		</div>
		<div class="right-info">
			<h2 class="title">{{ title }}</h2>
			<div class="update">
				<div class="time">
					<Icon type="shijian"></Icon>
				</div>
				<span class="date">{{ time }}</span>
				<span>({{ updateTime }})</span>
			</div>
			<ul class="detail">
				<li class="item">
					<Icon type="bofang"></Icon>
					<span class="text">播放</span>
				</li>
				<li class="item">
					<Icon type="shoucang"></Icon>
					<span class="text">({{ star }})</span>
				</li>
				<li class="item">
					<Icon type="fenxiang"></Icon>
					<span class="text">({{ share }})</span>
				</li>
				<li class="item">
					<Icon type="xiazai1"></Icon>
					<span class="text">播放</span>
				</li>
				<li class="item">
					<Icon type="pinglun"></Icon>
					<span class="text">({{ comment }})</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	props: [
		"imgUrl",
		"title",
		"time",
		"updateTime",
		"star",
		"share",
		"comment",
	],
	components: {
		Icon,
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.top-list-detail-card-container {
	width: 660px;
	height: 158px;
	.self-clear();
	.img {
		height: 150px;
		width: 150px;
		border: 1px solid #ccc;
		padding: 3px;
		float: left;
		img {
			width: 150px;
			height: 150px;
		}
	}
	.right-info {
		margin-left: 30px;
		float: left;
		.title {
			line-height: 24px;
			font-size: 20px;
			font-weight: normal;
		}
		.update {
			margin: 0 0 20px;
			line-height: 35px;
			font-size: 12px;
			color: #666;
			.self-clear();
			.time {
				float: left;
			}
			.date {
				float: left;
				margin-right: 15px;
			}
		}
		.detail {
			margin-bottom: 25px;
			margin-right: -10px;
			.self-clear();
			.item {
				float: left;
				border: 1px solid #ccc;
				padding: 2px 10px;
				margin: 0 5px;
				border-radius: 5px;
				background-color: #ffffffe0;
				box-shadow: 1px 2px #000;
				cursor: pointer;
				.icon-container {
					float: left;
				}
				.text {
					float: left;
					margin-left: 5px;
					font-size: 12px;

					line-height: 22px;
				}
			}
		}
	}
}
</style>