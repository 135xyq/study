<template>
	<div class="top-list">
		<div class="head">
			<TypeHead
				title="榜单"
				routerPath="Toplist"
				path="Toplist"
			></TypeHead>
		</div>
		<div class="content">
			<div class="list-container">
				<div
					class="list-item"
					v-for="(item, index) in data"
					:key="item.id"
				>
					<TopListCard
						:title="item.name"
						path="/discover/toplist"
						:imgUrl="item.coverImgUrl"
						class="top-img"
					></TopListCard>
					<ul class="songs-list">
						<li
							class="song"
							v-for="(song, index1) in songs[index]"
							:key="index1"
                            :class="{'bg':index1 % 2 === 0}"
						>
							<span class="index" :class="{'top':index1<3}">{{ index1 + 1 }}</span>
							<router-link class="song-link" :to="'/song?=' + song.id">{{
								song.name
							}}</router-link>
						</li>
                        <div class="more">
                            <router-link :to="'/discover/toplist?id=' + item.id">查看全部&gt;</router-link>
                        </div>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TypeHead from "@/components/TypeHead";
import TopListCard from "@/components/TopListCard";
import { getPlayListDetail } from "@/api/topList";
export default {
	components: {
		TypeHead,
		TopListCard,
	},
	props: {
		data: {
			type: Array,
			required: true,
		},
		songs: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.top-list {
	.content {
		border: 1px solid #d3d3d3;
		background-color: #f4f4f4;
		height: 472px;
		margin-top: 20px;
		padding-left: 1px;
		.top-img {
			padding: 20px 0 0 19px;
			height: 100px;
		}
		.list-container {
			.self-clear();
			height: 100%;
			.list-item {
				border-right: 1px solid #d3d3d3;
				height: 100%;
				width: 227.6px;
				float: left;
			}
		}
		.songs-list {
			.song {
				height: 32px;
				color: #333;
				font-size: 12px;
				line-height: 32px;
				padding-left: 30px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-wrap: normal;
				.index {
					font-size: 16px;
					margin-right: 10px;
                    &.top{
                        color: #c10d0c;
                    }
				}
                &.bg{
                    background-color: #ddd;
                }
			}
		}
        .more{
            font-size: 12px;
            background-color: #ddd;
            height: 32px;
    padding-right: 32px;
    text-align: right;
    line-height: 32px;
    &:hover{
        text-decoration: underline;
    }
        }
	}
}
</style>