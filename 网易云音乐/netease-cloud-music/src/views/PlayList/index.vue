<template>
	<div class="play-list-container">
		<TopLink></TopLink>
		<div class="play-list-content">
			<div class="left-container">
				<div class="left-content">
					<div class="img">
						<img
							:src="data.playlist.coverImgUrl + '?param=200y200'"
							alt=""
							:title="data.playlist.name"
						/>
					</div>
					<div class="head">
						<div class="right-titles">
							<p class="title">{{ data.playlist.name }}</p>
						</div>
						<div class="create-data">
							<img
								:src="userData.avatar + '?param=40y40'"
								alt=""
							/>
							<span class="author">{{ userData.name }}</span>
							<span class="create-date"
								>{{ userData.createDate }} 创建</span
							>
						</div>
						<div class="icons">
							<ul class="detail">
								<li class="item">
									<Icon type="bofang"></Icon>
									<span class="text">播放</span>
								</li>
								<li class="item">
									<Icon type="shoucang"></Icon>
									<span class="text">2342</span>
								</li>
								<li class="item">
									<Icon type="fenxiang"></Icon>
									<span class="text">4545</span>
								</li>
								<li class="item">
									<Icon type="xiazai1"></Icon>
									<span class="text">播放</span>
								</li>
								<li class="item">
									<Icon type="pinglun"></Icon>
									<span class="text">44</span>
								</li>
							</ul>
						</div>
						<div class="labels">
							<span class="label-title">标签:</span>
							<ul class="label-list">
								<li
									class="list-item"
									v-for="(item, index) in data.playlist.tags"
									:key="index"
								>
									{{ item }}
								</li>
							</ul>
						</div>
						<div class="description">
							<span class="description-title">介绍:</span>
							<div>
								{{ data.playlist.description }}
							</div>
						</div>
					</div>
					<div class="table">
						<SongTable
							:data="data.playlist.tracks"
							:trackCount="data.playlist.trackCount"
							:playCount="data.playlist.playCount"
						></SongTable>
					</div>
					<div class="to-pc">
						<p class="download-title">查看更多内容，请下载客户端</p>
						<router-link to="/download" class="download-link"
							>立即下载</router-link
						>
					</div>
					<div class="comment">
						<div class="last-comment">
							最新评论({{ commentData.total }})
						</div>
						<ul class="comment-list">
							<li
								class="comment-item"
								v-for="(item, index) in commentData.comments"
								:key="index"
							>
								<Comment
									:avatarUrl="
										item.user.avatarUrl + '?param=50y50'
									"
									:nickName="item.user.nickname"
									:content="item.content"
									:time="item.time"
									:like="item.likedCount"
									id="item.user.userId"
								></Comment>
							</li>
						</ul>
						<Page
							:total="commentData.total"
							:limit="20"
							@pageChange="onChangePage"
						></Page>
					</div>
				</div>
			</div>
			<div class="right-container">
				<img class="love-img" src="../../assets/love.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import TopLink from "@/components/TopLink";
import Comment from "@/components/Comment";
import Icon from "@/components/Icon";
import Page from "@/components/Page";
import SongTable from "./SongTable";
import { getPlayListDetailById } from "@/api/playList";
import { userInfoDetail } from "@/api/user";
import formateDate from "@/utils/formateDate";
import { getPlayListComment } from "@/api/comment";
export default {
	components: {
		TopLink,
		Icon,
		SongTable,
		Comment,
		Page,
	},
	data() {
		return {
			data: { playlist: {} }, //歌单数据
			id: "", //歌单ID
			userData: { name: "", avatarUrl: "", createDate: "" }, //用户信息
			commentData: { total: 0 }, //评论数据
			currentPage: 1, //当前页
		};
	},
	async created() {
		this.id = this.$route.query.id;
		const res = await getPlayListDetailById(this.id);
		this.data = res;
		const result = await userInfoDetail(this.data.playlist.userId);
		this.userData.name = result.profile.nickname;
		this.userData.avatar = result.profile.avatarUrl;
		this.userData.createDate = formateDate(res.playlist.createTime);
		const resp = await getPlayListComment(this.id);
		this.commentData = resp;
	},
	methods: {
		async onChangePage(page) {
			this.currentPage = page;
			const resp = await getPlayListComment(
				this.id,
				(this.currentPage - 1) * 20
			);
			this.commentData = resp;
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.play-list-container {
	background: #f5f5f5;
}
.play-list-content {
	position: relative;
	width: 980px;
	min-height: 700px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid #d3d3d3;
	border-width: 0 1px;
	.left-container {
		.self-clear();
		margin-right: 271px;
		.left-content {
			padding: 47px 30px 40px 39px;
		}
	}
	.img {
		float: left;
		width: 208px;
		height: 208px;
		padding: 2px;
		box-sizing: border-box;
		border: 1px solid #ccc;
	}
	.head {
		float: left;
		margin-left: 20px;
		width: calc(100% - 228px);
		.self-clear();
		.right-titles {
			// margin-left: 230px;
			.title {
				line-height: 24px;
				font-size: 20px;
				font-weight: normal;
			}
		}
		.create-data {
			.self-clear();
			margin: 0 0 20px;
			margin-top: 10px;
			line-height: 35px;
			img {
				float: left;
				width: 35px;
				height: 35px;
				cursor: pointer;
			}
			.author {
				line-height: 35px;
				float: left;
				margin-left: 10px;
				color: #0c73c2;
				font-size: 12px;
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
			.create-date {
				float: left;
				margin-left: 20px;
				color: #999;
				font-size: 12px;
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
		.labels {
			.self-clear();
			font-size: 12px;
			color: #666;
			.label-title {
				float: left;
				line-height: 22px;
			}
			.label-list {
				.self-clear();
				line-height: 22px;
				float: left;
				.list-item {
					float: left;
					padding: 0px 10px;
					border-radius: 10px;
					text-shadow: 0 1px #fdfdfd;
					background-color: #ccc;
					margin-left: 20px;
					cursor: pointer;
				}
			}
		}
		.description {
			margin-top: 4px;
			line-height: 18px;
			color: #666;
			font-size: 12px;
		}
	}
	.table {
		margin-top: 10px;
		float: left;
	}
	.to-pc {
		float: left;
		margin: 30px 0;
		font-size: 12px;
		color: #333;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 66px;
		.download-link {
			width: 120px;
			height: 30px;
			background-image: linear-gradient(90deg, #ff5a4c 0%, #ff1d12 100%);
			border-radius: 18px;
			line-height: 30px;
			font-size: 12px;
			color: #ffffff;
			text-align: center;
		}
	}
	.comment {
		.last-comment {
			font-size: 12px;
			font-weight: bold;
		}
		.comment-item {
			padding: 15px 0;
			border-top: 1px dotted #ccc;
		}
	}
}
.right-container{
	width: 270px;
	position: absolute;
	top: -1px;
	right: 0;
	.love-img{
		width: 100%;
	}
}
</style>