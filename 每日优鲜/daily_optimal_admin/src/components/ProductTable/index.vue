<template>
	<div class="product-table-container">
		<el-table
			:data="tableData"
			:stripe="true"
			:highlight-current-row="true"
			border
			style="width: 100%; height: 100%"
			:header-cell-style="{ backgroundColor: '#434A50', color: '#fff' }"
		>
			<el-table-column
				align="center"
				v-for="item in tableHeader"
				:key="item.prop"
				:prop="item.prop"
				:label="item.label"
				:width="item.width"
			>
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button
						size="mini"
						type="primary"
						@click="handleEdit(scope.row)"
						>编辑</el-button
					>
					<el-button
						size="mini"
						type="danger"
						@click="handleDelete(scope.row)"
						>删除</el-button
					>
				</template>
			</el-table-column>
		</el-table>
		<div class="pager">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				background
				:current-page="pager.currentPage"
				:page-sizes="[10, 15, 20, 25, 30]"
				:page-size="200"
				layout="total, sizes, prev, pager, next, jumper"
				:total="pager.total"
			>
			</el-pagination>
		</div>
	</div>
</template>

<script>
const tableHeader = [
	{
		prop: "id",
		label: "ID",
		width: "100",
	},
	{
		prop: "title",
		label: "标题",
		width: "200",
	},
	{
		prop: "c_item",
		label: "类目",
		width: "100",
	},
	{
		prop: "desc",
		label: "描述",
		width: "200",
	},
	{
		prop: "price",
		label: "预售价格",
		width: "100",
	},
	{
		prop: "price_off",
		label: "折扣价格",
		width: "100",
	},
	{
		prop: "tags",
		label: "标签",
		width: "150",
	},
	{
		prop: "inventory",
		label: "库存",
		width: "100",
	},
	{
		prop: "status",
		label: "上架状态",
		width: "120",
	},
	//   {
	//     prop: "images",
	//     label: "预览图",
	//   },
];

export default {
	props: {
		// 表格数据
		tableData: {
			type: Array,
			required: true,
		},
		// 分页所需数据
		pager: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			tableHeader, // 表格头部信息
		};
	},
	created() {
		// 处理上架状态
		for (const item of this.tableData) {
			if (item.status == 1) {
				item.status = "上架";
			} else {
				item.status = "下架";
			}
		}
	},
	methods: {
		handleEdit(info) {
			this.$emit("edit", info);
		},
		handleDelete(info) {
			this.$emit("delete", info);
		},
		handleSizeChange(val) {
			this.$emit("changePageSize", val);
		},
		handleCurrentChange(val) {
			this.$emit("changeCurrentPage", val);
		},
	},
};
</script>

<style lang="less" scoped>
.pager {
	height: 100px;
	margin: 30px;
	position: absolute;
	right: 10px;
}
</style>
