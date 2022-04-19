<template>
	<div
		class="article-list-container"
		ref="mainContainer"
		v-vLoading="isLoading"
	>
		<ul>
			<li v-for="item in data.rows" :key="item.id">
				<div class="thumb" v-if="item.thumb">
					<RouterLink
						:to="{
							name: 'ArticleDetail',
							params: {
								id: item.id,
							},
						}"
					>
						<img
							v-vLazy="item.thumb"
							:alt="item.title"
							:title="item.title"
                            class="article-img"
						/>
					</RouterLink>
				</div>
				<div class="main">
					<RouterLink
						:to="{
							name: 'ArticleDetail',
							params: {
								id: item.id,
							},
						}"
					>
						<h2>{{ item.title }}</h2>
					</RouterLink>
					<div class="aside">
						<span>日期：{{ formateDate(item.createdAt) }}</span>
						<span>浏览：{{ item.readCount }}</span>
						分类：
						<RouterLink
							:to="{
								name: 'CategoryArticle',
								params: {
									categoryId: item.CategoryId,
								},
							}"
						>
						{{ item.Category.name }}
						</RouterLink>
					</div>
					<div class="desc">
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
		<Empty v-if="data.rows.length === 0 && !isLoading" />
		<!-- 分页放到这里 -->
		<Pager
			v-if="data.total"
			:current="routeInfo.page"
			:total="data.total"
			:limit="routeInfo.limit"
			:visibleNumber="10"
			@pageChange="handlePageChange"
		/>
	</div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import { getArticleInfo } from "@/api/article.js";
import formateDate from "@/utils/formateDate";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
import { mapState } from "vuex";
import {myBaseUrl} from "@/config"
export default {
	mixins: [fetchData({ total: 0, rows: [] }), mainScroll("mainContainer")],
	components: {
		Pager,
		Empty,
	},
	computed: {
		// 获取路由信息
		routeInfo() {
			const categoryId = this.$route.params.categoryId || -1;
			const page = +this.$route.query.page || 1;
			const limit = +this.$route.query.limit || 10;
			return {
				categoryId,
				page,
				limit,
			};
		},
	},
	methods: {
		formateDate,
		async fetchData() {
			const result = await getArticleInfo(
				this.routeInfo.page,
				this.routeInfo.limit,
				this.routeInfo.categoryId
			);
			for (var item of result.rows) {
				item.thumb = myBaseUrl + item.thumb;
			}
			return result;
		},
		handlePageChange(newPage) {
			const query = {
				page: newPage,
				limit: this.routeInfo.limit,
			};
			// 跳转到 当前的分类id  当前的页容量  newPage的页码
			if (this.routeInfo.categoryId === -1) {
				// 当前没有分类
				// /article?page=${newPage}&limit=${this.routeInfo.limit}
				this.$router.push({
					name: "Article",
					query,
				});
			} else {
				// /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
				this.$router.push({
					name: "CategoryArticle",
					query,
					params: {
						categoryId: this.routeInfo.categoryId,
					},
				});
			}
		},
	},
	watch: {
		async $route() {
			this.isLoading = true;
			// 滚动高度为0
			this.$refs.mainContainer.scrollTop = 0;
			this.data = await this.fetchData();
			this.isLoading = false;
		},
	},
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.article-list-container {
	line-height: 1.7;
	position: relative;
	padding: 20px;
	overflow-y: scroll;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	scroll-behavior: smooth;
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
}
li {
	display: flex;
	padding: 15px 0;
	border-bottom: 1px solid @gray;
	.thumb {
		flex: 0 0 auto;
		margin-right: 15px;
		.article-img {
			display: block;
			width: 200px;
            height: 150px;
            object-fit: contain;
			border-radius: 5px;
		}
	}
	.main {
		flex: 1 1 auto;
		h2 {
			margin: 0;
		}
	}
	.aside {
		font-size: 12px;
		color: @gray;
		span {
			margin-right: 15px;
		}
	}
	.desc {
		margin: 15px 0;
		font-size: 14px;
	}
}
</style>
