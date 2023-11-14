<template>
	<div class="playlist-container">
		<div class="content">
			<div class="head">
				<span class="head-title">{{ title }}</span>
				<button class="choice-type" @click="onHandleShowHidden">
					<span>选择分类</span>
					<Icon type="xiala"></Icon>
				</button>
				<button class="hot">热门</button>
			</div>
		</div>
		<div class="hidden-type" v-if="!hiddenTypes">
			<PlayListType
				:selectedType="title"
				@onHandleChangeType="onHandleChangeType"
			></PlayListType>
		</div>
		<div class="play-list">
			<ul class="list-container">
				<li class="list-item" v-for="item in data" :key="item.id">
					<router-link :to="'/playlist?id=' + item.id" >
						<PlayListCard
						:img="item.coverImgUrl"
						:listened="item.playCount"
						:tipTitle="item.name"
						:id="item.id"
					></PlayListCard>
					</router-link>
					<router-link :to="'/playlist?id='+item.id" class="list-item-link">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
		<Page :total="total" @pageChange="pageChange"></Page>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
import Page from "@/components/Page";
import PlayListCard from "@/components/PlayListCard";
import PlayListType from "./PlayListType";
import { getTopPlayList } from "@/api/topList";
export default {
	data() {
		return {
			title: "全部", //当前歌单种类,
			hiddenTypes: true, //隐藏种类选择
			data: [], //当前获取的数据
			total: 0, //数据总数
		};
	},
	components: {
		Icon,
		PlayListType,
		Page,
		PlayListCard,
	},
	created() {
		this._initData();
	},
	methods: {
		// 处理种类的选择
		onHandleChangeType(data) {
			this.title = data;
			this.hiddenTypes = true;
			this._initData("hot",this.title,35,0)
		},
		// 点击  全部分类
		onHandleShowHidden() {
			this.hiddenTypes = !this.hiddenTypes;
		},
		// 页码改变
		pageChange(page) {
			const offset = (page - 1) * 35;
			this._initData("hot", "全部",  35, offset);
		},
		//获取数据
		async _initData(order, cat, limit, offset) {
			const res = await getTopPlayList(order,cat,limit,offset);
			this.total = res.total;
			this.data = res.playlists;
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.playlist-container {
	width: 980px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid #d3d3d3;
	position: relative;
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
	.hidden-type {
		z-index: 999;
		position: absolute;
		top: 80px;
		left: 0;
	}
	.list-container {
		.list-item {
			display: inline-block;
			width: 140px;
			height: 188px;
			overflow: hidden;
			padding: 0 0 30px 50px;
			line-height: 1.4;
		}
		.list-item-link{
			margin-top: 5px;
			font-size: 12px;
			color: #666;
			display: inline-block;
			width: 140px;
			white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		}
	}
}
</style>