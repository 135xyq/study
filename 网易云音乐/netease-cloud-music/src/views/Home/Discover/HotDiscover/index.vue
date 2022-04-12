<template>
	<div class="hot-discover-container">
		<div class="head">
			<TypeHead title="热门推荐" routerPath="PlayList"></TypeHead>
		</div>
		<div class="songs-list">
			<ul class="list-container">
				<li class="list-item" v-for="item in data" :key="item.id">
					<PlayListCard
						:img="item.picUrl"
						:listened="item.playCount"
						:tipTitle="item.name"
						:id="item.id"
						@onHandlePlay = "onHandlePlay"
					></PlayListCard>
					<p class="title">
						<router-link to="">{{ item.name }}</router-link>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import PlayListCard from "@/components/PlayListCard";
import TypeHead from "@/components/TypeHead";
import {getPlayListDetailById} from "@/api/playList"
import {getSongDetail} from "@/api/song"
export default {
	components: {
		PlayListCard,
		TypeHead,
	},
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
	methods:{
		async onHandlePlay(id){
			// 将歌曲添加到播放列表
			const res = await getPlayListDetailById(id);
			let ids = '';
			for(let i = 0;i < res.privileges.length;i++){
				ids += res.privileges[i].id + ','
			}
			if(ids[ids.length-1] === ','){
				ids = ids.slice(0,ids.length-1)
			}
			const result = await getSongDetail(ids);
			result.songs.forEach(item=>{
				this.$store.dispatch('songs/pushPlayList',item)
			})
		}
	}
};
</script>

<style lang="less" scoped>
@import '~@/style/self.less';
.hot-discover-container {
	width: 100%;
	.head{
		width: 100%;
	}
	.list-container {
		margin: 20px 0 0 -42px;
		.self-clear();
		.list-item {
			width: 140px;
			height: 204px;
			padding-left: 42px;
			float: left;
			overflow: hidden;
			padding: 0 0 30px 42px;
			line-height: 1.4;
            cursor: pointer;
			.title {
				display: inline-block;
				max-width: 100%;
				vertical-align: middle;
				font-size: 14px;
				margin-top: 10px;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>