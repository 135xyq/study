<template>
	<div class="play-list-container" v-if="close">
		<div class="top-title">
			<h4 class="play-title">
				播放列表
				<span play-list-count>({{ playListData.length }})</span>
			</h4>
			<div class="clear-all">
				<Icon type="shanchu"></Icon>
				<p class="clear-all-text">清除</p>
			</div>
			<p class="top-song-title">{{songName}}</p>
			<span class="close" @click="onHandleClose">&times;</span>
		</div>
		<div class="main-container">
			<div class="left-list">
				<ul class="list-container">
					<li
						class="list-item"
						:class="{ selected: currentPlayId == item.id }"
						v-for="item in playListData"
						:key="item.id"
						@click="onHandleChange(item.id)"
					>
						<div class="which-one col"></div>
						<div class="list-item-name col">{{ item.al.name }}</div>
						<div class="icons col">
							<div class="star icon">
								<Icon type="shoucang"></Icon>
							</div>
							<div class="share icon">
								<Icon type="fenxiang"></Icon>
							</div>
							<div class="download icon">
								<Icon type="xiazai1"></Icon>
							</div>
							<div class="delete icon">
								<Icon type="shanchu"></Icon>
							</div>
						</div>
						<div class="list-item-singer col">
							<span v-for="singer in item.ar" :key="singer.id">{{
								singer.name
							}}</span>
						</div>
						<div class="list-item-time col">
							{{ formateSongsTime(item.dt) }}
						</div>
					</li>
				</ul>
			</div>
			<div class="right-lrc">
				<Lrc :currentTime = "currentTime"></Lrc>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
import Lrc from "@/components/Lrc";
import { formateSongsTime } from "@/utils/formateSongTime";
export default {
	components: {
		Icon,
		Lrc,
	},
	props: ["close", "currentPlayId","currentTime"],
	data() {
		return {
			playListData: [], //播放列表歌曲
		};
	},
	created() {
		this.playListData = this.$store.state.songs.playList;
		if (this.$store.state.songs.songUrl.length > 0) {
			this.currentPlayId = this.$store.state.songs.songUrl[0].id;
		}
	},
	methods: {
		formateSongsTime,
		// 关闭列表
		onHandleClose() {
			this.$emit("onHandleClose", this.close);
		},
		// 切换到指定歌曲
		onHandleChange(id) {
			this.$emit("onHandleChange", id);
		},
	},
	computed:{
		songName(){
			// 当前播放的歌曲名称
			return this.$store.state.songs.songDetail?this.$store.state.songs.songDetail.name:''
		}
	}
};
</script>

<style lang="less" scoped>
.play-list-container {
	width: 986px;
	height: 301px;
	font-size: 12px;
	color: #e2e2e2;
	background: #2b2929ed;
	border-radius: 5px;
	.top-title {
		height: 41px;
		padding: 0 5px;
		border-bottom: 1px solid #000;
		.play-title {
			position: absolute;
			top: 0px;
			left: 20px;
			height: 39px;
			line-height: 39px;
			font-size: 14px;
			color: #e2e2e2;
		}
		.clear-all {
			position: absolute;
			left: 490px;
			top: 12px;
			height: 15px;
			line-height: 15px;
			cursor: pointer;
			font-size: 16px;
			.clear-all-text {
				font-size: 12px;
				position: absolute;
				top: 0px;
				left: 20px;
				width: 30px;
			}
		}
		.top-song-title {
			position: absolute;
			left: 595px;
			top: 0;
			width: 346px;
			text-align: center;
			height: 39px;
			line-height: 39px;
			color: #fff;
			font-size: 14px;
		}
		.close {
			position: absolute;
			top: 6px;
			right: 8px;
			width: 30px;
			height: 30px;
			overflow: hidden;
			font-size: 20px;
			cursor: pointer;
			background-position: -195px 9px;
		}
	}
	.main-container {
		position: absolute;
		left: 0;
		top: 41px;
		width: 976px;
		height: 260px;
		overflow: hidden;
		.left-list {
			position: absolute;
			left: 2px;
			top: 0;
			z-index: 4;
			height: 260px;
			width: 553px;
			overflow-x: hidden;
			overflow-y: auto;
			.list-container {
				overflow: hidden;
				color: #ccc;
				.list-item {
					word-wrap: break-word;
					word-break: break-word;
					text-overflow: ellipsis;
					float: left;
					width: 100%;
					.col {
						float: left;
						padding-left: 10px;
						height: 28px;
						line-height: 28px;
						overflow: hidden;
						cursor: pointer;
					}
					.icons {
						display: none;
						width: 120px;
						margin-left: -130px;
						.icon {
							float: left;
							margin: 0 5px;
							font-size: 16px;
						}
					}
					.which-one {
						width: 10px;
					}
					.list-item-name {
						width: 376px;
					}
					.list-item-singer {
						width: 70px;
					}
					.lits-item-time {
						width: 35px;
						color: #666;
					}
					&:hover {
						background: #000;
						.icons {
							display: block;
						}
					}
					&.selected {
						background: #000;
						.which-one {
							position: relative;
							background: #000;
							&::after {
								content: "";
								display: block;
								position: absolute;
								width: 0;
								height: 0;
								border: 8px solid transparent;
								border-left: 8px solid red;
								top: 6px;
								left: 10px;
							}
						}
					}
				}
			}
		}
		.right-lrc {
			position: absolute;
			right: 0px;
			top: 0;
			z-index: 4;
			// margin: 21px 0 20px 0;
			height: 100%;
			width: 394px;
			overflow: hidden;
			background-color: #434343de;
		}
	}
}
</style>