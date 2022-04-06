<template>
	<div class="content-container">
		<div class="banner-container">
			<SlideShow :bannerInfo="bannerInfo"></SlideShow>
		</div>
		<div class="main-container">
			<div class="left-songs">
				<div class="content">
					<div class="hot">
						<HotDiscover :data="hotDiscoverData"></HotDiscover>
					</div>
					<div class="personal" v-if="$store.state.login.isLogin">
						<PersonalDiscover
							:data="personalDiscoverData"
						></PersonalDiscover>
					</div>
					<div class="album">
						<NewAlbum :data="newAlbumData"></NewAlbum>
					</div>
					<div class="top-list">
						<TopList :data="topListData.slice(0,3)" :songs="songsData"></TopList>
					</div>
				</div>
			</div>
			<div class="user-artist">
				<User  :singers="topSingerData"></User>
			</div>
		</div>
	</div>
</template>

<script>
import SlideShow from "@/components/SlideShow";
import PlayListCard from "@/components/PlayListCard";
import TypeHead from "@/components/TypeHead";
import HotDiscover from "./HotDiscover";
import NewAlbum from "./NewAlbum";
import User from "./User";
import PersonalDiscover from "./PersonalDiscover";
import TopList from "./TopList";
import { getBanner, getHotDiscover, getPersonalDiscover,getNewAlbum ,getTopList} from "@/api/discover";
import {getPlayListDetail} from '@/api/topList';
import {getTopArtist} from '@/api/artist';
export default {
	components: {
		SlideShow,
		PlayListCard,
		TypeHead,
		HotDiscover,
		PersonalDiscover,
		NewAlbum,
		TopList,
		User
	},
	data() {
		return {
			bannerInfo: [], //头部轮播图
			fixed: "", //下载图片,
			hotDiscoverData: [], //热门推荐数据
			personalDiscoverData: [], //个性化推荐
			newAlbumData:[],//新碟上架数据
			topListData:[],//榜单数据
			songsData:[],//歌曲信息
			topSingerData:[],//热门歌手信息
		};
	},
	created() {
		// 获取轮播图
		getBanner().then((res) => {
			this.bannerInfo = res;
			this.bannerInfo = this.bannerInfo.map((item) => {
				return {
					img: item.imageUrl, //图片地址
					bgColor: item.titleColor, //颜色
					path: item.url, //链接地址
				};
			});
		});
		// 获取热门推荐
		getHotDiscover().then((res) => {
			this.hotDiscoverData = res;
		});
		// 获取个性化推荐
		getPersonalDiscover().then((res) => {
			if (res) {
				this.personalDiscoverData = res;
			} else {
				this.personalDiscoverData = [];
			}
		});
		// 获取新碟发布
		getNewAlbum().then(res=>{
			this.newAlbumData = res;
			if(res) {
				this.newAlbumData = res;
			}
		}),
		// 获取榜单数据
		getTopList().then(res=>{
			this.topListData = res;
			this.getSongsData(this.topListData.slice(0,3)).then(res=>{
				this.songsData = res;
			});
		}),
		getTopArtist(0,15).then(res=>{
			this.topSingerData = res;
		})
	},
	methods:{
		async getSongsData(data) {
			let result = [[],[],[]];
			for(let i = 0; i < data.length;i++) {
				const res = await getPlayListDetail(data[i].id);
				result[i].push(...(res.tracks.slice(0,10)))
			}
			return result;
		}
	}

};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.content-container {
	.banner-container {
		height: 285px;
	}
	.main-container {
		width: 980px;
		min-height: 700px;
		margin: 0 auto;
		background-color: #fff;
		border: 1px solid #d3d3d3;
		border-width: 0 1px;
		.self-clear();
		.left-songs {
			float: left;
			width: 100%;
			margin-right: -250px;
			.content {
				margin-right: 251px;
				padding: 20px 20px 40px;
			}
		}
		.user-artist {
			position: relative;
			float: right;
			width: 250px;
			zoom: 1;
		}
	}
}
</style>