<template>
	<div class="search-form-container">
		<el-form :inline="true" :model="searchData" class="demo-form-inline">
			<el-form-item label="检索关键字">
				<el-input
					v-model="searchData.keyword"
					placeholder="请输入检索关键字"
					clearable
				></el-input>
			</el-form-item>
			<el-form-item label="商品类目">
				<el-select
					v-model="searchData.category"
					placeholder="请选择商品类目"
					clearable
				>
					<el-option
						v-for="item in list"
						:key="item.id"
						:label="item.name"
						:value="item.id"
					></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="info" @click="handleSearch">搜索</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { categoryList } from "@/api/product";
export default {
	data() {
		return {
			searchData: {
				keyword: "",
				category: "",
			},
			list: [],
		};
	},
	created() {
		categoryList().then((resp) => {
			this.list = resp.data.data;
		});
	},
	methods: {
		handleSearch() {
			this.$emit("submit", this.searchData);
		},
	},
};
</script>

<style lang="less" scoped>
.search-form-container {
	padding: 20px 40px;
}
</style>
