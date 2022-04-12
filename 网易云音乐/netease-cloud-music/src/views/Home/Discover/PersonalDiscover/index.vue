<template>
	<div class="personal-discover-container">
		<div class="head">
			<TypeHead title="个性化推荐" :showMore="false"></TypeHead>
		</div>
		<ul class="list-container">
			<li class="list-item">
				<router-link to="/" class="link-content" title="每日歌曲推荐">
					<p class="week">{{ date.week }}</p>
					<p class="day">{{ date.day }}</p>
				</router-link>
				<p class="title">
					<router-link to="">{{ "每日歌曲推荐 " }}</router-link>
				</p>
				<p class="sub-title">{{ "根据你的口味生成，每天6:00更新" }}</p>
			</li>
			<li
				class="list-item"
				v-for="item in data.slice(0, 3)"
				:key="item.id"
			>
				<PlayListCard
					:img="item.picUrl"
					:listened="item.playcount"
					:tipTitle="item.name"
					:id="item.id"
					@onHandlePlay="onHandlePlay"
				></PlayListCard>
				<p class="title">
					<router-link to="">{{ item.name }}</router-link>
				</p>
				<p class="sub-title">{{ item.copywriter }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import PlayListCard from "@/components/PlayListCard";
import TypeHead from "@/components/TypeHead";
import { getPlayListDetailById } from "@/api/playList";
import { getSongDetail } from "@/api/song";
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
	data() {
		return {
			date: {}, //当天日期
		};
	},
	created() {
		const date = new Date();
		const day = date.getDate(); //本月第几号
		const week = date.getDay(); //星期几
		const weekDay = [
			"星期一",
			"星期二",
			"星期三",
			"星期四",
			"星期五",
			"星期六",
			"星期日",
		];
		this.date = {
			day,
			week: weekDay[week - 1],
		};
	},
	methods: {
		async onHandlePlay(id) {
			// 将歌曲添加到播放列表
			const res = await getPlayListDetailById(id);
			let ids = "";
			for (let i = 0; i < res.privileges.length; i++) {
				ids += res.privileges[i].id + ",";
			}
			if (ids[ids.length - 1] === ",") {
				ids = ids.slice(0, ids.length - 1);
			}
			const result = await getSongDetail(ids);
			result.songs.forEach((item) => {
				this.$store.dispatch("songs/pushPlayList", item);
			});
		},
	},
};
</script>

<style scoped lang="less">
@import "~@/style/self.less";
.personal-discover-container {
	width: 100%;
	.head {
		width: 100%;
	}
	.list-container {
		margin: 20px 0 0 -42px;
		.self-clear();
		display: table;
		margin-bottom: 4px;
		line-height: 0;
		.list-item {
			display: table-cell;
			height: auto;
			float: left;
			width: 140px;
			overflow: hidden;
			padding: 0 0 30px 42px;
			line-height: 1.4;
			cursor: pointer;
			.link-content {
				display: block;
				width: 140px;
				height: 140px;
				.week {
					height: 33px;
					line-height: 33px;
					color: #fed9d9;
					font-size: 14px;
					text-shadow: 0 -1px #962626;
					text-align: center;
					background-color: #d13838;
					border-top-left-radius: 5px;
					border-top-right-radius: 5px;
				}
				.day {
					height: 107px;
					background-color: #eaeaea;
					border-bottom-left-radius: 5px;
					border-bottom-right-radius: 5px;
					line-height: 102px;
					text-align: center;
					font-size: 94px;
					font-family: Arial, Helvetica, sans-serif;
					font-weight: bold;
					color: #202020;
				}
			}
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
			.sub-title {
				color: #999;
				font-size: 12px;
				margin-top: 2px;
			}
		}
	}
}
</style>