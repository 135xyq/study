<template>
	<div class="category-container">
		<el-button type="info" style="margin: 10px 30px" @click="onHandleAdd"
			>新增类目</el-button
		>
		<el-table
			:data="tableData"
			style="width: 100%"
			border
			stripe
			:header-cell-style="{ backgroundColor: '#434A50', color: '#fff' }"
		>
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form
						label-position="left"
						inline
						class="demo-table-expand"
					>
						<el-empty
							description="暂无子类目"
							v-if="props.row.c_items.length === 0"
						></el-empty>
						<el-form-item
							v-for="item in props.row.c_items"
							:key="item"
						>
							<el-tag type="success" style="cursor: pointer">{{
								item
							}}</el-tag>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column align="center" label="ID" prop="id">
			</el-table-column>
			<el-table-column align="center" label="类目名称" prop="name">
			</el-table-column>
			<el-table-column
				align="center"
				label="子类目数量"
				prop="c_items.length"
			>
			</el-table-column>
			<el-table-column align="center" label="操作">
				<template slot-scope="scope">
					<el-button
						size="mini"
						type="primary"
						@click="onHandleEdit(scope.row)"
						>编辑</el-button
					>
					<el-button
						size="mini"
						type="danger"
						@click="onHandleDelete(scope.row)"
						>删除</el-button
					>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog title="类目信息" :visible.sync="dialogFormVisible">
			<el-form :model="rowData" :rules="rules">
				<el-form-item label="id" prop="id">
					<el-input v-model="rowData.id"></el-input>
				</el-form-item>
				<el-form-item label="商品类目" prop="name">
					<el-input v-model="rowData.name"></el-input>
				</el-form-item>
				<el-form-item
					label="商品子类目"
					prop="c_items"
					v-for="(item, index) in rowData.c_items"
					:key="index"
				>
					<el-col :span="12">
						<el-input
							v-model="rowData.c_items[index]"
							clearable
						></el-input>
					</el-col>
					<el-col :span="8">
						<el-button
							type="danger"
							icon="el-icon-delete"
							style="width: 50px; margin-left: 20px"
							@click="onHandleDeleteItem(index)"
						></el-button>
					</el-col>
				</el-form-item>
				<el-button
					type="primary"
					icon="el-icon-circle-plus-outline"
					@click="onHandleAddItem(rowData.c_items)"
					>新增一个子类目</el-button
				>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancelEdit('dialogFormVisible')"
					>取 消</el-button
				>
				<el-button type="primary" @click="onConformSubmit"
					>确 定</el-button
				>
			</div>
		</el-dialog>
		<el-dialog title="新增类目" :visible.sync="dialogFormVisible_add">
			<el-form :model="newData" :rules="rules">
				<el-form-item label="id" prop="id">
					<el-input v-model="newData.id"></el-input>
				</el-form-item>
				<el-form-item label="商品类目" prop="name">
					<el-input v-model="newData.name"></el-input>
				</el-form-item>
				<el-form-item
					label="商品子类目"
					prop="c_items"
					v-for="(item, index) in newData.c_items"
					:key="index"
				>
					<el-col :span="12">
						<el-input
							v-model="newData.c_items[index]"
							clearable
						></el-input>
					</el-col>
					<el-col :span="8">
						<el-button
							type="danger"
							icon="el-icon-delete"
							style="width: 50px; margin-left: 20px"
							@click="onHandleDeleteNewItem(index)"
						></el-button>
					</el-col>
				</el-form-item>
				<el-button
					type="primary"
					icon="el-icon-circle-plus-outline"
					@click="onHandleAddItem(newData.c_items)"
					>新增一个子类目</el-button
				>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancelEditAdd">取 消</el-button>
				<el-button type="primary" @click="onNewOneSubmit"
					>确 定</el-button
				>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import {
	categoryAdd,
	categoryList,
	categoryEdit,
	categoryDelete,
} from "@/api/product";
export default {
	data() {
		return {
			tableData: [], // 类目数据
			dialogFormVisible: false, // 编辑的弹出框
			dialogFormVisible_add: false, // 编辑的弹出框
			rowData: {}, // 编辑的当前行数据
			newData: {
				id: "",
				name: "",
				c_items: [],
			}, // 新增数据
			// 验证规则
			rules: {
				id: [
					{
						required: true,
						message: "请输入商品id",
					},
				],
				name: [
					{
						required: true,
						message: "请输入类目名称",
					},
				],
				c_items: [
					{
						type: "array",
						required: true,
						message: "请选择子类目",
					},
				],
			},
		};
	},
	created() {
		this.getCategory();
	},
	methods: {
		getCategory() {
			categoryList().then((resp) => {
				this.tableData = resp.data.data;
				// console.log(resp);
			});
		},
		// 编辑
		onHandleEdit(data) {
			// console.log(data)
			this.rowData = { ...data };
			this.dialogFormVisible = true;
		},
		// 取消编辑
		cancelEdit() {
			this.dialogFormVisible = false;
			this.getCategory();
		},
		// 取消新增编辑
		cancelEditAdd() {
			this.dialogFormVisible_add = false;
			this.getCategory();
		},
		// 删除
		onHandleDelete(data) {
			this.$confirm("此操作将永久删除该类目, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					categoryDelete(data.id).then((resp) => {
						if (resp.status === "success") {
							this.$message({
								type: "success",
								message: "删除成功!",
							});
						} else {
							this.$message({
								type: "error",
								message: "删除失败!",
							});
						}
						this.getCategory();
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
		// 新增
		onHandleAdd() {
			this.dialogFormVisible_add = true;
		},
		// 删除当前的子类目
		onHandleDeleteItem(index) {
			this.rowData.c_items.splice(index, 1);
		},
		// 删除新建页面的子类目
		onHandleDeleteNewItem(index) {
			this.newData.c_items.splice(index, 1);
		},
		// 新增一个子类目
		onHandleAddItem(data) {
			// 有一个没有编辑
			if (data[data.length - 1] === "") {
				this.$message({
					message: "有一个空的的输入框",
					type: "error",
				});
				return false;
			} else {
				data.push("");
			}
		},
		//  提交编辑
		onConformSubmit() {
			categoryEdit(this.rowData).then((resp) => {
				if (resp.status === "success") {
					this.$message({
						type: "success",
						message: "更改成功!",
					});
					this.getCategory();
				} else {
					this.$message({
						type: "error",
						message: "更改失败!",
					});
				}
				this.dialogFormVisible = false;
			});
		},
		// 新建一个类目
		onNewOneSubmit() {
			this.$confirm("确定创建一个新的类目?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					categoryAdd(this.newData).then((resp) => {
						// console.log(resp)
						if (resp.status === "success") {
							this.$message({
								type: "success",
								message: "创建成功!",
							});
							this.dialogFormVisible_add = false;
						} else {
							this.$message({
								type: "error",
								message: "创建失败!",
							});
						}
						this.getCategory();
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消创建",
					});
				});
		},
	},
};
</script>

<style lang="less" scoped>
.demo-table-expand {
	font-size: 0;
}
.demo-table-expand label {
	width: 90px;
	color: #99a9bf;
}
.demo-table-expand .el-form-item {
	margin-right: 0;
	margin-bottom: 0;
	width: 50%;
}
</style>
