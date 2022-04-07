<template>
	<div class="top-list-container">
		<div class="left-list-container">
			<div class="title">云音乐特色榜</div>
			<ul class="list-container">
				<li
					class="list-item"
					v-for="item in topListData.slice(0, 4)"
					:key="item.id"
					:class="{ selected: selectedId == item.id }"
                    @click="onHandleChange"
				>
					<router-link :to="'/discover/toplist?id=' + item.id">
						<TopListTopListCard
							:imgUrl="item.imgUrl + '?param=40y40'"
							:title="item.title"
							:description="item.description"
						></TopListTopListCard>
					</router-link>
				</li>
			</ul>
			<div class="title">全球媒体榜</div>
			<ul class="list-container">
				<li
					class="list-item"
					v-for="item in topListData.slice(4)"
					:key="item.id"
					:class="{ selected: selectedId == item.id }"
                    @click="onHandleChange"
				>
					<router-link :to="'/discover/toplist?id=' + item.id">
						<TopListTopListCard
							:imgUrl="item.imgUrl + '?param=40y40'"
							:title="item.title"
							:description="item.description"
						></TopListTopListCard>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="right-list-container">
			<div class="head">
				<TopListDetailCard
					:imgUrl="playData.imgUrl +'?param=150y150'"
					:title="playData.title"
					time="最近更新：04月02日 "
					updateTime="刚刚更新"
					:star="playData.star"
					:share="playData.share"
					:comment="playData.comment"
				></TopListDetailCard>
			</div>
			<div class="table">
				<SongTable :data="playData"></SongTable>
			</div>
		</div>
	</div>
</template>

<script>
import TopListTopListCard from "@/components/TopListTopListCard";
import TopListDetailCard from "@/components/TopListDetailCard";
import SongTable from './SongTable';
import { getTopListDetail, getPlayListDetail } from "@/api/topList";
export default {
	components: {
		TopListTopListCard,
		TopListDetailCard,
		SongTable
	},
	data() {
		return {
			topListData: [], //获取榜单信息
			selectedId: "", //当前选中的列表,
			playData: {}, //歌单详情
		};
	},
	async created() {
		let result = await getTopListDetail();
		this.topListData = result.map((item) => {
			return {
				imgUrl: item.coverImgUrl,
				title: item.name,
				description: item.updateFrequency,
				id: item.id,
			};
		});
		this.selectedId = this.topListData[0].id;
        this.playData = await this.getSongs(this.selectedId);
		this.selectedId = this.$route.query.id;
		this.playData = await this.getSongs(this.selectedId);
	},
	watch: {
		$route: function (val, oldVal) {
			this.selectedId = val.query.id;
		},
	},
	methods: {
		async getSongs(id) {
			let res = await getPlayListDetail(this.selectedId);
			return {
                title:res.name, //歌单标题
				star: res.subscribedCount,//收藏数
				share: res.shareCount,//分享数
				comment: res.commentCount,//评论数
				songs: res.tracks,//歌曲数组
                updateTime:res.updateTime,//最近更新时间
                lastUpdate:res.trackUpdateTime,//上一次更新时间
                imgUrl:res.coverImgUrl,//图片地址
				playCount:res.playCount,//播放量
			};
		},
        // 点击切换歌单
        async onHandleChange(){
            this.selectedId = this.$route.query.id;
            this.playData = await this.getSongs(this.selectedId);
        }
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.top-list-container {
	width: 980px;
	margin: 0 auto;
	.self-clear();
	.left-list-container {
		float: left;
		width: 240px;
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
		background-color: #fffcfc69;
		box-sizing: border-box;
		.title {
			margin-top: 40px;
			padding: 0 10px 12px 15px;
			font-size: 14px;
			color: #000;
			font-family: simsun, \5b8b\4f53;
			font-weight: 600;
		}
		.list-container {
			.link {
				display: block;
			}
			.list-item {
				position: relative;
				zoom: 1;
				height: 42px;
				padding: 10px 0 10px 20px;
				&:hover {
					background: #e6e6e662;
				}
				&.selected {
					background: #e6e6e6;
				}
			}
		}
	}
	.right-list-container {
		float: left;
		background-color: #fff;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		box-sizing: border-box;
		width: 740px;
		.head {
			padding: 40px;
		}
		.table{
			padding:0 30px 40px 40px;
		}

	}
}
</style>