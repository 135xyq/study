<template>
	<div class="dashboard-container">
		<p class="title">你日渐平庸，敢于平庸，将继续平庸！</p>
		<div class="main" ref="main"></div>
		<div class="calendar">
			<el-calendar v-model="value"> </el-calendar>
		</div>
	</div>
</template>

<script>
import * as echarts from "echarts";
import { getComment } from "@/api/comment";
import { getArticle } from "@/api/article";
import { getProject } from "@/api/project";
import { getCategory } from "@/api/category";
export default {
	name: "Dashboard",
	data() {
		return {
			commentCount: 0, //评论数
			articleCount: 0, //文章数
			categoryCount: 0, //分类数
			projectCount: 0, //项目数
			data: [],
			value: new Date(),
		};
	},
	async created() {
		const res1 = await getComment(1, 10);
		this.commentCount = res1.total;
		this.data.push({
			value: this.commentCount,
			name: "评论数量",
		});
		const res2 = await getArticle(1, 10);
		this.articleCount = res2.total;
		this.data.push({
			value: this.articleCount,
			name: "文章数量",
		});
		const res3 = await getCategory();
		this.categoryCount = res3.length;
		this.data.push({
			value: this.categoryCount,
			name: "分类数量",
		});
		const res4 = await getProject(1, 10);
		this.projectCount = res4.total;
		this.data.push({
			value: this.projectCount,
			name: "项目数量",
		});
		this.echartsInit();
	},

	methods: {
		echartsInit() {
			echarts.init(this.$refs.main).setOption({
				tooltip: {
					trigger: "item",
				},
				legend: {
					top: "5%",
					left: "center",
				},
				series: [
					{
						name: "数据总览",
						type: "pie",
						radius: ["40%", "70%"],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: "center",
						},
						emphasis: {
							label: {
								show: true,
								fontSize: "40",
								fontWeight: "bold",
							},
						},
						labelLine: {
							show: false,
						},
						data: this.data,
					},
				],
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.dashboard-container {
	width: 100%;
}

.main {
	float: left;
	height: 500px;
	width: 600px;
	margin: 20px auto;
}

.title {
	text-align: center;
	font-size: 30px;
	margin: 30px;
	background: linear-gradient(to right, red, blue);
	-webkit-background-clip: text;
	color: transparent;
}
.calendar {
	float: left;
	width: 600px;
}
</style>
