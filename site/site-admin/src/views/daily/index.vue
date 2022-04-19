<template>
	<div class="daily-list-container">
		<div class="add-daily">
			<el-col :span="19"
				><el-input
					v-model="newDaily"
					clearable
					placeholder="请输入今天的每日一句"
				></el-input
			></el-col>
			<el-button
				type="success"
				class="add-button"
				@click="onHandleAddDaily"
			>
				新增每日一句
			</el-button>
		</div>
		<!-- 表格组件 -->
		<div class="daily-table-container">
			<el-table
				:data="daily"
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
					label="内容"
					width="580"
					align="center"
					header-align="center"
				>
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{
							scope.row.content
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
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
			<el-input v-model="dialogContent" clearable></el-input>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="onHandelSave"
					>确 定</el-button
				>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import * as dailyApi from "@/api/daily";
import formateDate from "@/utils/formateDate";
import { myBaseUrl } from "@/config/url";
export default {
	data() {
		return {
			daily: [], //每日一句
			myBaseUrl, //图片的基础路径
			newDaily: "", //新增的每日一句
			dialogVisible: false, //展示弹出框
			dialogContent: "", //弹出的内容
			dialogId: "", //弹出的Id
		};
	},
	created() {
		this.__initDailyData();
	},

	methods: {
		async __initDailyData() {
			this.daily = await dailyApi.getDaily();
		},
		formateDate,
		// 删除每日一句
		async onHandleDelete(scope) {
			this.$confirm("此操作将永久删除该每日一句, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(async () => {
					const dailyId = scope.row.id; //每日一句ID
					const res = await dailyApi.deleteDaily(dailyId); //删除
					this.$message({
						type: "success",
						message: res,
					});
					this.__initDailyData(); //重新获取数据
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
		// 修改每日一句
		async onHandleEdit(scope) {
			const id = scope.row.id;
			const content = scope.row.content;
      this.dialogId = id;
			this.dialogVisible = true;
			this.dialogContent = content;
		},
		//新增
		async onHandleAddDaily() {
			if (this.newDaily.trim().length === 0) {
				this.$message({
					type: "error",
					message: "输入内容不能为空！",
				});
			} else {
				const res = await dailyApi.addDaily({ content: this.newDaily });
				this.$message({
					type: "success",
					message: "今天的每日一句是：" + res.content,
				});
				this.newDaily = "";
				this.__initDailyData();
			}
		},
		//修改确定
		async onHandelSave() {
			if (this.dialogContent.trim().length === 0) {
				this.$message({
					type: "error",
					message: "输入内容不能为空！",
				});
			} else {
				const res = await dailyApi.editDaily(this.dialogId, {
					content: this.dialogContent,
				});
				this.$message({
					type: "success",
					message: "修改成功为： " + this.dialogContent,
				});
        this.dialogContent = "";
        this.dialogVisible = false;
			}
		},
	},
};
</script>

<style  scoped>
.daily-list-container {
	width: 100%;
	position: relative;
}
.daily-table-container {
	width: 80%;
	margin: 70px auto;
}
.page-container {
	width: 100%;
	margin-top: 40px;
	margin-left: 260px;
}
.add-daily {
	position: absolute;
	right: 80px;
	width: 60%;
	top: -60px;
}
.add-button {
	margin-left: 20px;
}
</style>>
