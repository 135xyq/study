<template>
	<div class="product-add-container">
		<el-steps
			:active="showWhichOne"
			finish-status="success"
			:align-center="true"
		>
			<el-step title="填写商品基本信息" icon="el-icon-info"> </el-step>
			<el-step title="填写商品销售信息" icon="el-icon-upload"></el-step>
		</el-steps>
		<div class="step" v-if="showWhichOne === 0">
			<ProductBasicInfo
				:formData="formData"
				@next="onHandleNext"
			></ProductBasicInfo>
		</div>
		<div class="step" v-if="showWhichOne === 1">
			<ProductSaleInfo
				@prev="onHandlePrev"
				@next="onHandleNext"
				:formData="formData"
			></ProductSaleInfo>
		</div>
	</div>
</template>

<script>
import ProductBasicInfo from "@/components/ProductBasicInfo";
import ProductSaleInfo from "@/components/ProductSaleInfo";
import { productDetail, productEdit, productAdd } from "@/api/product";
export default {
	data() {
		return {
			formData: {
				title: "",
				desc: "",
				category: "",
				c_items: [],
				tags: [],
				price: 0,
				price_off: 0,
				unit: "",
				inventory: 0,
				status: 1,
				images: [],
			},
			showWhichOne: 0, //显示哪一个步骤，为0显示第一个，为1显示第二个
		};
	},
	components: {
		ProductBasicInfo,
		ProductSaleInfo,
	},
	created() {
		const { id } = this.$route.params;
		if (id) {
			productDetail(id).then((resp) => {
				this.formData = resp.data;
			});
		}
	},
	methods: {
		onHandleNext(form) {
			this.formData = {
				...this.formData,
				form,
			};
			// if(this.formData.status === true){
			// 	this.formData.status = 1;
			// }else{
			// 	this.formData.status = 0;
			// }
			if (this.showWhichOne === 1) {
				// 提交
				if (this.$route.params.id) {
					// 编辑
					this.$confirm("此操作将改变商品信息, 是否继续?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
						.then(() => {
							productEdit(this.formData).then((resp) => {
								// console.log(resp)
								if (resp.status === "success") {
									this.$message({
										type: "success",
										message: "更改成功!",
									});
									this.$router.push({
										name: "productList",
									});
								} else {
									this.$message({
										type: "danger",
										message: "更改失败!",
									});
								}
							});
						})
						.catch(() => {
							this.$message({
								type: "info",
								message: "已取消更改",
							});
						});
				} else {
					// 新增
					this.$confirm("确定要新增该商品, 是否继续?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
						.then(() => {
							productAdd(this.formData).then((resp) => {
								// console.log(resp)
								if (resp.status === "success") {
									// 成功
									this.$message({
										type: "success",
										message: "添加成功!",
									});
									this.$router.push({
										name: "productList",
									});
								} else {
									this.$message({
										type: "danger",
										message: "添加失败!",
									});
								}
							});
						})
						.catch(() => {
							this.$message({
								type: "info",
								message: "已取消删除",
							});
						});
				}
			} else {
				// 下一页
				this.showWhichOne = 1;
			}
		},
		onHandlePrev() {
			// console.log(1);
			this.showWhichOne = 0;
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.product-add-container {
	.step {
		.self-center();
	}
}
</style>
