<template>
	<div class="playlist-container">
		<div class="content">
			<div class="head">
				<span class="head-title">{{ title }}</span>
				<button class="choice-type">
					<span>选择分类</span>
					<Icon type="xiala"></Icon>
				</button>
				<button class="hot">热门</button>
			</div>
		</div>
		<PlayListType selectedType="古风" @onHandleChangeType="onHandleChangeType"></PlayListType>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
import PlayListType from './PlayListType';
export default {
	data() {
		return {
			title: "全部", //当前歌单种类
		};
	},
	components: {
		Icon,
		PlayListType
	},
	methods:{
		onHandleChangeType(data){
			console.log(data)
		}
	}
};
</script>

<style lang="less" scoped>
.playlist-container {
	width: 980px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid #d3d3d3;
	border-width: 0 1px;
	.content {
		padding: 40px;
		.head {
			height: 40px;
			border-bottom: 2px solid #c20c0c;
			.head-title {
				float: left;
				font-size: 24px;
				font-weight: normal;
			}
			.choice-type {
				font-size: 12px;
				font-weight: normal;
				margin: 2px 0 0 12px;
				color: #333;
				padding: 7px 15px;
				cursor: pointer;
				border: none;
				box-shadow: 2px 2px #ccc;
				border-radius: 5px;
				span {
					float: left;
				}
				.icon-container {
					float: left;
					font-weight: bold;
					margin-left: 5px;
				}
			}
			.hot {
				height: 29px;
				background-position: 0 0;
				border-radius: 3px;
				color: #fff;
				float: right;
				background: #c20c0c;
				font-size: 12px;
				border: none;
				cursor: pointer;
				padding: 2px 10px;
			}
		}
	}
}
</style>