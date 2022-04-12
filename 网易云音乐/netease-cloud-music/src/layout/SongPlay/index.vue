<template>
	<div class="song-play-container">
		<div class="song-play-content">
			<div class="play-buttons">
				<div
					class="previous-song"
					title="上一首"
					@click="onHandlePreviousSong"
				>
					<Icon type="shangyishou"></Icon>
				</div>
				<div class="play-song" title="播放/暂停" @click="onHandlePlay">
					<Icon type="bofang" v-if="!isPlay"></Icon>
					<Icon type="zanting" v-if="isPlay"></Icon>
				</div>
				<div class="next-song" @click="onHandleNextSong">
					<Icon type="xiayishou" title="下一首"></Icon>
				</div>
			</div>
			<div class="song-img">
				<router-link
					:to="'/song' + songDetail.songs[0].id"
					v-if="songDetail"
				>
					<img
						:src="songDetail.songs[0].al.picUrl + '?param=34y34'"
						alt=""
					/>
				</router-link>
				<router-link to="/song" v-if="!songDetail">
					<img
						src="http://s4.music.126.net/style/web2/img/default/default_album.jpg"
						alt=""
					/>
				</router-link>
			</div>
			<div class="process-container">
				<div class="song-user" v-if="songDetail">
					<router-link
						:to="'/song?id=' + songDetail.songs[0].al.id"
						:title="songDetail.songs[0].al.name"
						class="singer"
						>{{ songDetail.songs[0].al.name }}</router-link
					>
					<router-link
						:to="'/artist?id=' + item.id"
						v-for="item in songDetail.songs[0].ar"
						:key="item.id"
						:title="item.name"
						>{{ item.name }}</router-link
					>
				</div>
				<div class="song-user" v-if="!songDetail">
					<router-link to="/"></router-link>
					<router-link to="/"></router-link>
				</div>
				<div class="process">
					<div class="process-content"></div>
					<div
						class="play-process"
						ref="process"
						:style="{ width: processWidth }"
					>
						<span
							class="process-round"
							@mouseup="onHandleMouseUp"
							@mousedown="onHandleMouseDown"
							@drag="onHandleDrag"
							@dragend="onHandleDragEnd"
							@dragstart="onHandleDragStart"
							draggable="true"
						></span>
					</div>
					<div class="song-time" v-if="songDetail">
						<span class="status-time">{{ songCurrentTime }}</span>
						<span class="total-time"> / {{ songTime }}</span>
					</div>
					<div class="song-time" v-if="!songDetail">
						<span class="status-time">00:00</span>
						<span class="total-time"> / 00:00</span>
					</div>
				</div>
			</div>
			<div class="share-button">
				<div class="song-lyric icon" title="画中画歌词">
					<Icon type="huazhonghua"></Icon>
				</div>
				<div class="song-star icon" title="收藏">
					<Icon type="shoucang"></Icon>
				</div>
				<div class="song-share icon" title="分享">
					<Icon type="fenxiang"></Icon>
				</div>
			</div>
			<div class="play-info">
				<div
					class="song-aloud icon"
					@click="isShowAloud = !isShowAloud"
				>
					<Icon type="shengyin"></Icon>
					<div class="aloud-container" v-if="isShowAloud">
						<div class="aloud-all">
							<div
								class="status-aloud"
								:style="{ height: currentAloud }"
							></div>
							<span
								class="aloud-round"
								:style="{ bottom: currentAloud }"
								ref="aloud"
								@drag="onHandleAloudDrag"
							></span>
						</div>
					</div>
				</div>
				<div class="play-type icon">
					<Icon type="xunhuanbofang"></Icon>
				</div>
				<div
					class="play-list icon"
					title="播放列表"
					@click="onHandleShowPlayList"
				>
					<Icon type="bofangliebiao"></Icon>
					<span class="lits-number">{{ playList.length }}</span>
				</div>
				<div class="play-list-content">
					<PlayList
						@onHandleClose="onHandleClose"
						@onHandleChange="onHandleChange"
						@onHandleClearAllPlayList="onHandleClearAllPlayList"
						:close="close"
						:currentPlayId="id"
						:currentTime="currentTime * 1000"
					></PlayList>
				</div>
			</div>
		</div>
		<audio
			v-if="songDetail"
			:src="songUrl"
			ref="audio"
			@ended="onHandlePlayEnd"
			@timeupdate="timeupdate"
		></audio>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
import { formateSongsTime } from "@/utils/formateSongTime";
import PlayList from "./PlayList";
export default {
	components: {
		Icon,
		PlayList,
	},
	data() {
		return {
			isPlay: false, //是否播放
			id: "", //ID
			songDetail: null, //歌曲详细信息
			songUrl: "", //歌曲播放链接
			currentTime: "", //当前时间
			songCurrentTime: "", //当前时间的格式化
			totalTime: null, //歌曲总时长,
			currentLength: "", //小圆点应该走的长度
			isDrag: false, //是否正在拖拽
			aloud: "", //音量
			currentAloud: "60%", //当前音量
			isShowAloud: false,
			playList: [], //播放列表
			close: false, //关闭显示
		};
	},
	methods: {
		// 播放/暂停
		onHandlePlay() {
			if (!this.songDetail) {
				return; //没有歌曲直接返回
			}
			if (this.isPlay) {
				// 正在播放
				this.$refs.audio.pause(); //暂停
				this.isPlay = false;
			} else {
				this.$refs.audio.play(); //播放
				this.isPlay = true;
			}
		},
		// 当前播放时间
		timeupdate(e) {
			if (this.$refs.audio) {
				this.currentTime = this.$refs.audio.currentTime;
			}
			this.upDateCurrenTime();
		},
		// 按下进度条的按钮
		onHandleMouseDown(e) {
			// 进度条不再移动
			// const width = this.$refs.process.clientWidth
			// const length = this.$refs.audio.currentTime;
			// this.currentTime = length;
			this.isDrag = true;
			// console.log(e.target.offsetY)
			// this.currentLength = (e.screenX - 462) / 466 * this.totalTime / 1000
			// console.log(this.currentLength)
			// this.$refs.process.style.width = width + 'px';
		},
		// 离开进度条按钮
		onHandleMouseUp() {
			// console.log(1)
			this.isDrag = false;
		},
		upDateCurrenTime() {
			// 更新当前的播放时间
			if (this.isDrag) {
				// 正在拖拽不更新
				return;
			} else {
				this.currentLength = this.$refs.audio.currentTime;
			}
		},
		// 进度条拖拽
		onHandleDrag(e) {
			if (!this.songDetail) {
				return; //没有歌曲直接返回
			}
			this.isDrag = true;
			const left = this.$refs.process.getBoundingClientRect().left;
			const length = ((e.clientX - left) / 466) * this.totalTime;
			if (length < 0 || length > this.totalTime) {
				return;
			} else {
				this.currentLength = length / 1000;
			}
		},
		// 进度条拖拽结束
		onHandleDragEnd() {
			if (!this.songDetail) {
				return; //没有歌曲直接返回
			}
			this.$refs.audio.currentTime = this.currentLength;
			if (!this.isPlay) {
				this.isPlay = true;
				this.$refs.audio.play();
			}
			this.isDrag = false;
		},
		// 进度条拖拽即将开始
		onHandleDragStart() {
			if (!this.songDetail) {
				return; //没有歌曲直接返回
			}
			this.isDrag = true;
		},
		// 播放完毕
		onHandlePlayEnd() {
			this.isPlay = false;
			this.currentTime = "";
			this.currentLength = "";
		},
		// 音量拖拽
		onHandleAloudDrag(e) {
			const bottom = this.$refs.aloud.getBoundingClientRect().bottom;
			const height = e.screenY;
			const rang = height - bottom;
			if (rang > 93 || rang < 0) {
				return;
			} else {
				// console.log(rang)
			}
		},
		onHandleClose(e) {
			this.close = !e;
		},
		onHandleShowPlayList() {
			this.close = !this.close;
		},
		// update当前播放信息
		async updateSongDetail() {
			if (this.playList.length > 0 && !this.songDetail) {
				// 播放列表有数据，默认播放第一条歌曲
				this.id = this.playList[0].id;
				await this.$store.dispatch(
					"songs/setSongUrl",
					this.playList[0].id
				);
				this.songUrl = this.$store.state.songs.songUrl[0].url;
				await this.$store.dispatch("songs/setSongDetail", this.id);
				this.songDetail = this.$store.state.songs.songDetail;
				this.totalTime = this.$store.state.songs.songDetail.songs[0].dt;
			}
		},
		// 下一首歌
		async onHandleNextSong() {
			// 播放列表为空
			if (this.playList.length === 0) {
				return;
			}
			const index = this.getCurrentIndex();
			let newIndex = null; //新的下标
			if (index === this.playList.length - 1) {
				newIndex = 0;
			} else {
				newIndex = index + 1;
			}
			this.id = this.playList[newIndex].id;
			await this.$store.dispatch("songs/setSongUrl", this.id);
			this.songUrl = this.$store.state.songs.songUrl[0].url;
			await this.$store.dispatch("songs/setSongDetail", this.id);
			this.songDetail = this.$store.state.songs.songDetail;
			this.totalTime = this.$store.state.songs.songDetail.songs[0].dt;
			this.$refs.audio.play(); //播放
			this.isPlay = true;
		},
		// 上一首歌
		async onHandlePreviousSong() {
			// 播放列表为空
			if (this.playList.length === 0) {
				return;
			}
			const index = this.getCurrentIndex();
			let newIndex = null; //新的下标
			if (index === 0) {
				newIndex = this.playList.length - 1;
			} else {
				newIndex = index - 1;
			}
			this.id = this.playList[newIndex].id;
			await this.$store.dispatch("songs/setSongUrl", this.id);
			this.songUrl = this.$store.state.songs.songUrl[0].url;
			await this.$store.dispatch("songs/setSongDetail", this.id);
			this.songDetail = this.$store.state.songs.songDetail;
			this.totalTime = this.$store.state.songs.songDetail.songs[0].dt;
			this.$refs.audio.play(); //播放
			this.isPlay = true;
		},
		// 获取当前歌曲的下标
		getCurrentIndex() {
			let currentSongIndex = null;
			this.playList.forEach((item, index) => {
				if (item.id === this.id) {
					currentSongIndex = index;
					return;
				}
			});
			return currentSongIndex;
		},
		// 切换到指定歌曲
		async onHandleChange(id) {
			this.id = id;
			await this.$store.dispatch("songs/setSongUrl", this.id);
			this.songUrl = this.$store.state.songs.songUrl[0].url;
			await this.$store.dispatch("songs/setSongDetail", this.id);
			this.songDetail = this.$store.state.songs.songDetail;
			this.totalTime = this.$store.state.songs.songDetail.songs[0].dt;
			this.$refs.audio.play(); //播放
			this.isPlay = true;
		},
		// 清空播放列表
		onHandleClearAllPlayList() {
			console.log(1)
		},
	},
	async created() {
		this.playList = this.$store.state.songs.playList;
		this.$store.dispatch('songs/deletePlayList');
	},
	computed: {
		// 歌曲的总时间
		songTime() {
			return formateSongsTime(this.totalTime);
		},
		// 进度条的长度
		processWidth() {
			return (this.currentLength / this.totalTime) * 100000 + "%";
		},
	},
	watch: {
		currentTime(val) {
			//当前时间
			this.songCurrentTime = formateSongsTime(val * 1000);
		},
		playList(val) {
			this.updateSongDetail();
		},
		"$store.state.songs.playList":function(val){
			this.playList = val;
		}
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.song-play-container {
	width: 100%;
	color: #fff;
	.song-play-content {
		width: 980px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		.play-buttons {
			float: left;
			font-size: 24px;
			.self-clear();
			width: 137px;
			padding: 6px 0 0 0;
			.previous-song {
				border: 2px solid #fff;
				border-radius: 50%;
				float: left;
				width: 28px;
				height: 28px;
				line-height: 28px;
				margin-right: 8px;
				margin-top: 5px;
				cursor: pointer;
				text-align: center;
			}
			.play-song {
				border: 2px solid #fff;
				border-radius: 50%;
				width: 32px;
				height: 32px;
				line-height: 32px;
				text-align: center;
				cursor: pointer;
				font-size: 20px;
				margin-top: 2px;
				float: left;
				margin-right: 8px;
			}
			.next-song {
				text-align: center;
				border: 2px solid #fff;
				border-radius: 50%;
				float: left;
				width: 28px;
				height: 28px;
				line-height: 28px;
				margin-right: 8px;
				margin-top: 5px;
				cursor: pointer;
			}
		}
		.song-img {
			float: left;
			position: relative;
			margin: 6px 15px 0 0;
			img {
				border-radius: 3px;
				width: 34px;
				height: 34px;
			}
			&::after {
				width: 34px;
				display: block;
				content: "";
				height: 1px;
				background-color: rgb(104, 96, 96);
				top: 0px;
			}
		}
		.process-container {
			position: relative;
			float: left;
			.song-user {
				height: 28px;
				overflow: hidden;
				color: #e8e8e8;
				text-shadow: 0 1px 0 #171717;
				line-height: 28px;
				font-size: 12px;
				a {
					color: #e8e8e8;
				}
				.singer {
					margin-right: 30px;
				}
			}
			.process {
				width: 466px;
				height: 9px;
				background: rgb(107, 101, 101);
				border-radius: 5px;
			}
			.process-content {
				width: 90%;
				height: 100%;
				background: #ccc;
				border-radius: 5px;
			}
			.play-process {
				width: 0;
				background: #c20c0c;
				height: 9px;
				position: absolute;
				bottom: 0;
				border-radius: 5px;
				.process-round {
					display: inline-block;
					width: 6px;
					height: 6px;
					border: 6px solid #fff;
					background: #c20c0c;
					border-radius: 50%;
					position: absolute;
					top: -4px;
					right: -5px;
					&:hover {
						box-shadow: 0px 0px 5px #fff;
						cursor: pointer;
					}
				}
			}
			.song-time {
				position: absolute;
				top: 23px;
				right: -84px;
				color: #797979;
				text-shadow: 0 1px 0 #121212;
				font-size: 12px;
				.status-time {
					color: #ccc;
				}
			}
		}
		.share-button {
			float: left;
			.self-clear();
			width: 87px;
			margin-left: 120px;
			.icon {
				float: left;
				width: 25px;
				height: 25px;
				margin: 11px 2px 0 0;
				font-size: 18px;
				color: #666;
			}
		}
		.play-info {
			float: left;
			margin-left: 30px;
			position: relative;
			.icon {
				float: left;
				width: 25px;
				height: 25px;
				margin: 11px 2px 0 0;
				font-size: 18px;
				color: #666;
			}
			.play-list {
				position: relative;
				.lits-number {
					position: absolute;
					top: 3px;
					left: 16px;
					font-size: 12px;
					display: inline-block;
					width: 40px;
					height: 20px;
					background: #121212;
					border-top-right-radius: 10px;
					border-bottom-right-radius: 10px;
					text-align: center;
					line-height: 20px;
				}
			}
			.aloud-container {
				position: absolute;
				top: -113px;
				left: -10px;
				width: 32px;
				height: 113px;
				background: #121212dc;
				.aloud-all {
					position: absolute;
					top: 11px;
					left: 14px;
					width: 4px;
					height: 93px;
					background: #171717;
				}
				.status-aloud {
					height: 30%;
					width: 100%;
					background: #c20c0c;
					position: absolute;
					bottom: 0;
				}
				.aloud-round {
					display: inline-block;
					width: 6px;
					height: 6px;
					background: #c20c0c;
					border: 4px solid #fff;
					border-radius: 50%;
					position: absolute;
					// top: 0;
					left: -5px;
					&:hover {
						box-shadow: 0px 0px 5px #fff;
					}
				}
			}
		}
		.icon {
			cursor: pointer;
			&:hover {
				text-shadow: 0px 0px 1px #fff;
			}
		}
		.play-list-content {
			position: absolute;
			bottom: 35px;
			left: calc(50% - 930px);
		}
	}
}
</style>