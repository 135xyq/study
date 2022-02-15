<template>
	<div class="product-basic-info-container">
		<el-form
			:model="formData"
			:rules="rules"
			ref="formData"
			label-width="100px"
			class="demo-ruleForm"
		>
			<el-form-item label="商品标题" prop="title">
				<el-col><el-input v-model="formData.title"></el-input></el-col>
			</el-form-item>
			<el-form-item label="商品描述" prop="desc">
				<el-col><el-input v-model="formData.desc"></el-input></el-col>
			</el-form-item>
			<el-form-item label="标签" prop="tags">
				<el-checkbox-group v-model="formData.tags">
					<el-checkbox-button
						v-for="tag in tags"
						:key="tag"
						:label="tag"
						:value="tag"
						>{{tag}}</el-checkbox-button
					>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="商品类目" prop="category">
				<el-select
					v-model="formData.category"
					placeholder="请选择商品类目"
					@change="handleChangeItems"
				>
					<el-option
						v-for="item in totalCategoryList"
						:key="item.id"
						:label="item.name"
						:value="item.id"
					></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="商品子类目" prop="c_items">
				<el-select
					v-model="formData.c_items"
					placeholder="请选择商品子类目"
					clearable
				>
					<el-option
						v-for="item in c_itemsList"
						:key="item"
						:label="item"
						:value="item"
					></el-option>
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button @click="resetForm('formData')">重置</el-button
				><el-button type="primary" @click="next">下一步</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
const tags = [
	"限时秒杀",
	"包邮，最快次日达",
	"包邮",
	"24小时发货",
	"最快次日达",
];
import { categoryList } from "@/api/product";
export default {
	props: {
		formData: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			rules: {
				title: [
					{
						required: true,
						message: "请输入商品标题",
						trigger: "blur",
					},
				],
				desc: [
					{
						required: false,
						message: "请选择活动区域",
						trigger: "blur",
					},
				],
				tags: [
					{
						required: true,
						message: "请选择标签",
						trigger: "change",
					},
				],
				category: [
					{
						required: true,
						message: "请选择标签",
						trigger: "change",
					},
				],
				c_items: [
					{
						required: false,
						message: "请至少选择一个活动性质",
						trigger: "change",
					},
				],
			},
			totalCategoryList: [],
			c_itemsList: [],
			tags, // 标签
		};
	},
	created() {
		categoryList().then((resp) => {
			this.totalCategoryList = resp.data.data;
		});
	},
	methods: {
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		// 改变不同目录的子目录
		handleChangeItems(category) {
			this.totalCategoryList.forEach((item) => {
				if (item.id === category) {
					this.c_itemsList = item.c_items;
				}
			});
		},
		next() {
			this.$refs["formData"].validate((val) => {
				// 校验是否通过
				if (val) {
					// console.log(this.formData);
					this.$emit("next", this.formData);
				} else {
					// console.log(this.formData)
					return false;
				}
			});
		},
	},
};
</script>

<style lang="less" scoped></style>
