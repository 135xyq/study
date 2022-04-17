<template>
	<div class="comment-list-container">
		<!-- 表格组件 -->
		<div class="comment-table-container">
			<el-table
				:data="comments.rows"
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
					width="120"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<el-image
							style="width: 80px; height: 80px"
							:src="myBaseUrl + scope.row.avatar"
							fit="cover"
						></el-image>
					</template>
				</el-table-column>
        <el-table-column
					label="评论者"
					width="180"
					align="center"
          sortable
          prop="category"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.nickName
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="所属文章ID"
					width="130"
					align="center"
          sortable
          prop="category"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.ArticleId
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
				:total="comments.total"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>
import * as commentApi from "@/api/comment";
import formateDate from "@/utils/formateDate";
import { myBaseUrl } from "@/config/url";
export default {
	data() {
		return {
			comments: [], //评论
			page: 1, //当前的页码
			limit: 10, //每页的数据
			myBaseUrl, //图片的基础路径
		};
	},
	created() {
		this.__initCommentData();
	},

	methods: {
		async __initCommentData() {
			this.comments = await commentApi.getComment(this.page, this.limit);
		},
		formateDate,
		// 控制每页多少条数据
		handleSizeChange(val) {
			this.limit = val;
			// 重新获取数据
			this.__initCommentData();
		},
		// 当前第多少也页
		handleCurrentChange(val) {
			this.page = val;
			// 重新获取数据
			this.__initCommentData();
		},
		// 删除评论
		async onHandleDelete(scope) {
			this.$confirm("此操作将永久删除该评论, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(async () => {
					const commentId = scope.row.id; //评论ID
					const res = await commentApi.deleteComment(commentId); //删除
					this.$message({
						type: "success",
						message: res,
					});
          this.__initCommentData(); //重新获取数据
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
.comment-list-container {
	width: 100%;
	position: relative;
}
.comment-table-container {
	width: 60%;
	margin: 10px auto;
}
.page-container {
	width: 100%;
	margin-top: 40px;
	margin-left: 260px;
}
.add-comment {
	position: absolute;
	right: 80px;
	top: -60px;
}
</style>>
