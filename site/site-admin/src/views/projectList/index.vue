<template>
	<div class="project-list-container">
		<div class="add-project">
			<router-link :to="{ name: 'ProjectEdit' }">
				<el-button type="success">新增项目</el-button>
			</router-link>
		</div>
		<!-- 表格组件 -->
		<div class="project-table-container">
			<el-table
				:data="project.rows"
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
							:src="myBaseUrl + scope.row.thumb"
							fit="cover"
						></el-image>
					</template>
				</el-table-column>
				<el-table-column
					label="标题"
					sortable
					width="200"
					prop="name"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.name
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="描述"
					width="260"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.description
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="项目地址"
					width="150"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.linkUrl
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					label="github地址"
					width="150"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							showGithubLink(scope.row.github)
						}}</span>
					</template>
				</el-table-column>
				<el-table-column
					prop="order"
					label="排序"
					sortable
					width="60"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.order
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
				:page-sizes="[5, 10, 15, 20, 25]"
				:page-size="limit"
				layout="total, sizes, prev, pager, next, jumper"
				:total="project.total"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>
import * as projectApi from "@/api/project";
import { myBaseUrl } from "@/config/url";
export default {
	data() {
		return {
			project: [], //项目
			page: 1, //当前的页码
			limit: 10, //每页的数据
			myBaseUrl, //图片的基础路径
		};
	},
	created() {
		this.__initProjectData();
	},

	methods: {
		// 获取项目数据
		async __initProjectData() {
			this.project = await projectApi.getProject(this.page, this.limit);
		},
		// 控制github地址的展示，没有则展示为无
		showGithubLink(link) {
			if (link === null) {
				return "无";
			} else {
				return link;
			}
		},
		// 控制每页多少条数据
		handleSizeChange(val) {
			this.limit = val;
			// 重新获取数据
			this.__initProjectData();
		},
		// 当前第多少也页
		handleCurrentChange(val) {
			this.page = val;
			// 重新获取数据
			this.__initProjectData();
		},
		// 修改项目
		async onHandleEdit(scope) {
			const data = scope.row; //项目数据
			const projectId = scope.row.id; //项目ID
			this.$router.push({
				name: "ProjectEdit",
				query: { data: data, projectId },
			});
		},
		// 删除项目
		async onHandleDelete(scope) {
			this.$confirm("此操作将永久删除该项目, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(async () => {
					const projectId = scope.row.id; //项目ID
					const res = await projectApi.deleteProject(projectId); //删除
					this.$message({
						type: "success",
						message: res,
						duration: 2000,
					});
          this.__initProjectData(); //重新获取数据
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				})
		},
	},
};
</script>

<style  scoped>
.project-list-container {
	width: 100%;
	position: relative;
}
.project-table-container {
	width: 90%;
	margin: 70px auto;
}
.page-container {
	width: 100%;
	margin-top: 40px;
	margin-left: 60px;
}
.add-project {
	position: absolute;
	right: 80px;
	top: -60px;
}
</style>>
