<template>
	<div class="product-list-contianer">
		<!-- 搜索框 -->
		<SearchForm @submit="onHandleSubmit"></SearchForm>
		<!-- 新增 -->
		<el-button type="info" class="add-button">
			<router-link :to="{ name: 'productAdd' }" class="add-link"
				>新增商品</router-link
			>
		</el-button>
		<!-- 表格 -->
		<ProductTable
			@edit="onHandleEdit"
			@delete="onHandleDelete"
			@changeCurrentPage="onHandleChangeCurrentPage"
			@changePageSize="OnHandleChangePageSize"
			:tableData="tableData"
			:pager="pager"
		></ProductTable>
	</div>
</template>

<script>
import SearchForm from "@/components/SearchForm";
import ProductTable from "@/components/ProductTable";
import { productDelete, productList } from "@/api/product";
export default {
	data() {
		return {
			searchInfo: {},
			tableData: [], // 表格数据
			pager: {
				currentPage: 1, // 当前页
				total: 1, // 总数
				pageSize: 10, // 每页的数量
			},
		};
	},
	components: {
		SearchForm,
		ProductTable,
	},
	created() {
		this.getTableData();
	},
	methods: {
		getTableData() {
			productList({
				page: this.pager.currentPage,
				size: this.pager.pageSize,
				...this.searchInfo,
			}).then((resp) => {
				this.tableData = resp.data.data;
				this.pager.total = resp.data.total;
				// 处理折扣价
				for (const item of this.tableData) {
					if (item.price_off === null) {
						item.price_off = "无折扣";
					} else {
						item.price_off += `元`;
					}
				}
				// 处理上架状态
				for (const item of this.tableData) {
					if (item.status == 1) {
						item.status = "上架";
					} else {
						item.status = "下架";
					}
				}
				// 处理预售价格
				for (const item of this.tableData) {
					item.price += "元";
				}
			});
		},
		// 搜索提交
		onHandleSubmit(data) {
			this.searchInfo = data;
			this.getTableData();
		},
		// 商品编辑
		onHandleEdit(data) {
			this.$router.push({
				name:'productAdd',
				params:{
					id:data.id
				}
			})
		},
		// 商品删除
		onHandleDelete(data) {
			this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					productDelete(data.id).then((resp) => {
						this.getTableData();  // 更新表格
					});
					this.$message({
						type: "success",
						message: "删除成功!",
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
		// 改变当前的页码
		onHandleChangeCurrentPage(val) {
			this.pager.currentPage = val;
			this.getTableData(); // 每次改变页码都要重新获取数据
		},
		// 每页显示的商品数量
		OnHandleChangePageSize(val) {
			this.pager.pageSize = val;
			this.getTableData(); // 每次改变每页显示数量都要重新获取数据
		},
	},
};
</script>

<style lang="less" scoped>
.product-list-contianer {
	height: 100%;
	.add-button {
		position: absolute;
		right: 80px;
		top: 25px;
		.add-link {
			color: #fff;
		}
	}
}
</style>
