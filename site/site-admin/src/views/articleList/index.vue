<template>
	<div class="article-list-container">
		<div class="add-article">
			<router-link :to="{ name: 'ArticleEdit' }">
				<el-button type="success">新增文章</el-button>
			</router-link>
		</div>
		<!-- 表格组件 -->
		<div class="article-table-container">
			<el-table
				:data="articles.rows"
				border
				:default-sort="{ prop: 'id', order: 'descending' }"
				stripe
				style="width: 100%"
			>
				<el-table-column
					prop="id"
					label="ID"
					width="80"
					sortable
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.id
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="预览图"
					sortable
					width="120"
					prop="readCount"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<el-image
							style="width: 80px; height: 80px"
							:src="myBaseUrl + scope.row.thumb"
							fit="cover"
						></el-image>
					</template>
				</el-table-column>
				<el-table-column
					label="标题"
					width="300"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.title
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="分类"
					width="100"
					align="center"
          sortable
          prop="category"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.category.name
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="浏览量"
					sortable
					width="80"
					prop="readCount"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.readCount
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="评论数"
					sortable
					width="80"
					prop="commentCount"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.Comments.length
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					prop="date"
					label="创建日期"
					sortable
					width="180"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							formateDate(scope.row.createdAt)
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="操作"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<el-button
							size="mini"
							type="primary"
							@click="onHandleEdit(scope)"
							>编辑</el-button
						>
						<el-button
							size="mini"
							type="danger"
							@click="onHandleDelete(scope)"
							>删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- 分页组件 -->
		<div class="page-container">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="page"
				:page-sizes="[5, 10, 20, 30, 50]"
				:page-size="limit"
				layout="total, sizes, prev, pager, next, jumper"
				:total="articles.total"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>
import * as articleApi from "@/api/article";
import formateDate from "@/utils/formateDate";
import { myBaseUrl } from "@/config/url";
export default {
	data() {
		return {
			articles: [], //文章
			page: 1, //当前的页码
			limit: 10, //每页的数据
			myBaseUrl, //图片的基础路径
		};
	},
	created() {
		this.__initArticleData();
	},

	methods: {
		async __initArticleData() {
			this.articles = await articleApi.getArticle(this.page, this.limit);
		},
		formateDate,
		// 控制每页多少条数据
		handleSizeChange(val) {
			this.limit = val;
			// 重新获取数据
			this.__initArticleData();
		},
		// 当前第多少也页
		handleCurrentChange(val) {
			this.page = val;
			// 重新获取数据
			this.__initArticleData();
		},
		// 修改文章
		async onHandleEdit(scope) {
			const data = scope.row; //文章数据
			const articleId = scope.row.id; //文章ID
			this.$router.push({
				name: "ArticleEdit",
				query: { data: data, articleId },
			});
		},
		// 删除文章
		async onHandleDelete(scope) {
			this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(async () => {
					const articleId = scope.row.id; //文章ID
					const res = await articleApi.deleteArticle(articleId); //删除
					this.$message({
						type: "success",
						message: res,
					});
          this.__initArticleData(); //重新获取数据
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
	},
};
</script>

<style  scoped>
.article-list-container {
	width: 100%;
	position: relative;
}
.article-table-container {
	width: 90%;
	margin: 70px auto;
}
.page-container {
	width: 100%;
	margin-top: 40px;
	margin-left: 60px;
}
.add-article {
	position: absolute;
	right: 80px;
	top: -60px;
}
</style>>
