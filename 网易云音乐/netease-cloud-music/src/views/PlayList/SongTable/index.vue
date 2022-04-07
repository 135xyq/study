<template>
	<div class="song-table-container">
		<div class="title">
			<h3 class="title-text">歌曲列表</h3>
			<span class="song-count">{{ trackCount }}首歌</span>
			<p class="play">
				播放:
				<span class="play-count">{{ playCount }}</span>
				次
			</p>
		</div>
		<div class="table-container">
			<table class="table">
				<thead>
					<tr class="table-title">
						<th class="first-space"></th>
						<th class="table-title-text">标题</th>
						<th class="table-time">时长</th>
						<th class="table-singer">歌手</th>
						<th class="table-album">专辑</th>
					</tr>
				</thead>
				<tbody class="table-list-container">
					<tr
						class="table-item"
						v-for="(item, index) in data"
						:key="item.id"
						:class="{ bg: index % 2 === 0 }"
					>
						<td class="table-index">{{ index + 1 }}</td>
						<td class="table-body-title">
							<p class="play-icon">
								<Icon type="bofang1"></Icon>
							</p>
							<router-link
								class="song-name"
								:to="'/song?id=' + item.id"
							>
								{{ item.name }}
							</router-link>
						</td>
						<td class="table-body-time">{{formateSongsTime(item.dt) }}</td>
						<td class="icons">
							<div title="添加到播放列表" class="table-icon"><Icon type="jia"></Icon></div>
							<div title="收藏" class="table-icon"><Icon type="shoucang"></Icon></div>
							<div title="分享" class="table-icon"><Icon type="fenxiang"></Icon></div>
							<div title="下载" class="table-icon"><Icon type="xiazai1"></Icon></div>
						</td>
						<td class="table-body-singer">
							<router-link
								class="singer"
								v-for="singer in item.ar"
								:key="singer.id"
								:to="'/artist?id=' + singer.id"
							>
								{{ singer.name }}
							</router-link>
						</td>
						<td class="table-body-album">
							<router-link
								class="album"
								:to="'/album?id=' + item.al.id"
							>
								{{ item.al.name }}
							</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { formateSongsTime } from "@/utils/formateSongTime";
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
	props: ["data",'playCount','trackCount'],
	data() {
		return {
			songsInfo: [], //歌曲信息
		};
	},
	watch: {
	},
	methods: {
		// 处理多个歌手
		handleSingers(item) {
			let str = item.ar[0].name;
			for (let i = 1; i < item.ar.length; i++) {
				str += "&" + item.ar[i].name;
			}
			return str;
		},
		formateSongsTime,
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.song-table-container {
	width: 670px;
	.title {
		height: 33px;
		border-bottom: 2px solid #c20c0c;
		.self-clear();
		.title-text {
			float: left;
			font-size: 20px;
			line-height: 28px;
			font-weight: normal;
		}
		.song-count {
			margin: 10px 20px;
			color: #666;
			font-size: 10px;
			float: left;
		}
		.play {
			float: right;
			font-size: 12px;
			line-height: 33px;
			.play-count {
				color: #c20c0c;
				font-weight: bold;
			}
		}
	}
	.table {
		width: 100%;
		border: 1px solid #d9d9d9;
		border-collapse: collapse;
		border-spacing: 0;
		table-layout: fixed;
		thead {
			font-size: 12px;
			color: #333;
			.table-title {
				height: 38px;
				background-color: #f7f7f7;
				th {
					border-right: 1px solid #d9d9d9;
					border-bottom: 1px solid #d9d9d9;
					text-align: left;
					padding-left: 20px;
					box-sizing: border-box;
					color: #666;
				}
				.first-space {
					width: 77px;
				}
				.table-title-text {
					width: 227px;
				}
				.table-time {
					width: 91px;
				}
				.table-album{
					width: 100px;
				}
				.table-singer {
					width: 175px;
				}
			}
		}
		tbody {
			display: table-row-group;
			vertical-align: middle;
			border-color: inherit;
			color: #333;
			font-size: 12px;
			.table-item {
				display: table-row;
				vertical-align: inherit;
				border-color: inherit;
				.self-clear();
				td {
					padding: 6px 10px;
					line-height: 18px;
					text-align: left;
					height: 20px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				&.bg {
					background-color: #f7f7f7;
				}
				.table-body-title {
					padding-top: 12px;
					padding-bottom: 15px;
					width: 200px;
					.play-icon {
						font-size: 20px;
						font-weight: bold;
						color: #ccc;
						float: left;
						line-height: 20px;
						margin-left: 10px;
						cursor: pointer;
						&:hover {
							color: #666;
						}
					}
					.song-name {
						float: left;
						margin-left: 10px;
						overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
						&:hover {
							text-decoration: underline;
						}
					}
				}
				.table-index {
					padding: 6px 20px;
					line-height: 18px;
					text-align: left;
				}
				.table-body-time {
					color: #666;
				}
				.icons{
					display: none;
					float: left;
					color: #ccc;
					height: 100%;
					margin: 12px 0;
					padding: 0;
					.table-icon{
						float: left;
						margin-left: 5px;
						cursor: pointer;
						font-size: 14px;
						font-weight: bold;
						&:hover{
							color: #666;
						}

					}
				}
				.singer {
				&:hover {
					text-decoration: underline;
				}
			}
				&:hover{
					.table-body-time{
						display: none;
					}
					.icons{
						display: inline-block;
					}
				}
			}

		}
	}
}
</style>