<template>
	<div class="song-play-container">
		<div class="song-play-content">
			<div class="play-buttons">
				<div class="previous-song">
					<Icon type="shangyishou"></Icon>
				</div>
				<div class="play-song">
					<Icon type="bofang"></Icon>
				</div>
				<div class="next-song">
					<Icon type="xiayishou"></Icon>
				</div>
			</div>
			<div class="song-img">
				<router-link to="/song">
					<img
						:src="songDetail.al.picUrl + '?param=34y34'"
						alt=""
					/>
				</router-link>
			</div>
			<div class="process-container">
				<div class="song-user">
					<router-link
						to="/song"
						:title="songDetail.al.name"
						class="singer"
						>{{ songDetail.songs.al.name }}</router-link
					>
					<router-link to="/artist" title="李荣浩"
						>李荣浩</router-link
					>
				</div>
				<div class="process">
					<div class="process-content"></div>
					<div class="play-process">
						<span class="process-round"></span>
					</div>
					<div class="song-time">
						<span class="status-time">03:30</span>
						<span class="total-time"> / 04:30</span>
					</div>
				</div>
			</div>
			<div class="share-button">
				<div class="song-lyric icon">
					<Icon type="huazhonghua"></Icon>
				</div>
				<div class="song-star icon">
					<Icon type="shoucang"></Icon>
				</div>
				<div class="song-share icon">
					<Icon type="fenxiang"></Icon>
				</div>
			</div>
			<div class="play-info">
				<div class="song-aloud icon">
					<Icon type="shengyin"></Icon>
					<div class="aloud-container">
						<div class="aloud-all">
							<div class="status-aloud"></div>
							<span class="aloud-round"></span>
						</div>
					</div>
				</div>
				<div class="play-type icon">
					<Icon type="xunhuanbofang"></Icon>
				</div>
				<div class="play-list icon">
					<Icon type="bofangliebiao"></Icon>
					<span class="lits-number">20</span>
				</div>
			</div>
		</div>
		<audio
			src="http://m701.music.126.net/20220409224709/471713a9dc9ac4805dd97974c30c8e0f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/13321096355/e1be/8ab3/9217/63cc5012acd1dbe6934b3d2e08e03e56.mp3"
			@play="onHandlePlay"
			@pause="onHandlePause"
		></audio>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
import { getSongUrl, getSongDetail } from "@/api/song";
export default {
	components: {
		Icon,
	},
	data() {
		return {
			isPlay: false, //是否播放
			id: "1925613150", //ID
			songDetail: {al:{}}, //歌曲详细信息
		};
	},
	methods: {
		onHandlePlay() {},
		onHandlePause() {},
		async _initSongDetail() {
			const res = await getSongDetail(this.id);
			this.songDetail = res.songs;
            console.log(this.songDetail)
		},
	},
	created() {
		this._initSongDetail();
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
			}
			.play-song {
				border: 2px solid #fff;
				border-radius: 50%;
				width: 32px;
				height: 32px;
				line-height: 32px;
				cursor: pointer;
				font-size: 30px;
				margin-top: 2px;
				float: left;
				margin-right: 8px;
			}
			.next-song {
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
				width: 30%;
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
					top: -3px;
					right: 0px;
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
				left: 0;
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
					bottom: 0;
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
	}
}
</style>