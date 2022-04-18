<template>
	<ul class="project-container" v-vLoading="loading" ref="projectContainer">
		<template v-if="data">
			<li v-for="item in data.rows" :key="item.id" class="project-item">
				<a
					:href="
						item.linkUrl
							? item.linkUrl
							: `javascript:alert('该项目无法通过外网访问')`
					"
					:target="item.linkUrl ? '_blank' : '_self'"
					><img v-vLazy="myBaseUrl + item.thumb" alt="" class="thumb"
				/></a>
				<div class="info">
					<a
						:href="
							item.linkUrl
								? item.linkUrl
								: `javascript:alert('该项目无法通过外网访问')`
						"
						:target="item.url ? '_blank' : '_self'"
						><h2>{{ item.name }}</h2>
					</a>
					<a
						class="github"
						target="_blank"
						:href="item.github"
						v-if="item.github"
					>
						github
					</a>
					<p>
						{{ item.description }}
					</p>
				</div>
			</li>
			<Empty v-if="!data.total || (data.total === 0 && !loading)"></Empty>
		</template>
	</ul>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
import { myBaseUrl } from "@/config";
export default {
	components: {
		Empty,
	},
	data() {
		return {
			myBaseUrl,
		};
	},
	mixins: [mainScroll("projectContainer")],
	computed: {
		...mapState("project", ["loading", "data"]),
	},
	created() {
		this.$store.dispatch("project/fetchProject");
	},
};
</script>


<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	position: relative;
	overflow-y: auto;
	scroll-behavior: smooth;
}
.project-item {
	border: 1px solid;
	transition: 0.5s;
	padding: 20px;
	display: flex;
	margin-bottom: 20px;
	&:hover {
		box-shadow: -1px 1px 5px #000;
		transform: scale(1.01) translate(3px, -3px);
		color: inherit;
	}
	.thumb {
		width: 150px;
		min-height: 150px;
		flex: 0 0 auto;
		object-fit: cover;
		border-radius: 5px;
		margin-right: 15px;
	}
	.info {
		line-height: 1.7;
		flex: 1 1 auto;
		position: relative;
		h2 {
			margin: 0;
		}
	}
	.github {
		position: absolute;
		font-size: 14px;
		color: @primary;
		right: 10px;
		top: 10px;
	}
}
</style>
