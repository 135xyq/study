<template>
	<div class="product-sale-info-container">
		<el-form
			:model="formData"
			:rules="rules"
			ref="formData"
			label-width="100px"
			class="demo-ruleForm"
		>
			<el-form-item label="预售价格" prop="price">
				<el-input-number
					v-model="formData.price"
					:min="0.1"
					label="预售价格"
				></el-input-number>
			</el-form-item>
			<el-form-item label="折扣价格" prop="price_off">
				<el-input-number
					v-model="formData.price_off"
					:min="0.1"
					label="折扣价格"
				></el-input-number>
			</el-form-item>
			<el-form-item label="计量单位" prop="unit">
				<el-select v-model="formData.unit" placeholder="请选择计量单位">
					<el-option
						v-for="item of productUnit"
						:key="item.type"
						:label="item.name"
						:value="item.type"
					></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="库存" prop="inventory">
				<el-input-number
					:step-strictly="true"
					v-model="formData.inventory"
					:min="0"
					label="库存"
				></el-input-number>
			</el-form-item>
			<!-- <el-form-item label="库存" prop="type">
				<el-upload
					:action='"https://mallapi.duyiedu.com/upload/images?appkey=" + $store.state.user.appkey'
					list-type="picture-card"
					:on-preview="handlePictureCardPreview"
					:on-remove="handleRemove"
				>
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
					<img width="100%" :src="dialogImageUrl" alt="" />
				</el-dialog>
			</el-form-item> -->
			<el-form-item label="上架" prop="status">
				<el-switch v-model="formData.status"></el-switch>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="prev">上一页</el-button>
				<el-button type="success" @click="next">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
const productUnit = [
	{
		name: "克",
		type: "g",
	},
	{
		name: "千克",
		type: "kg",
	},
	{
		name: "毫升",
		type: "ml",
	},
	{
		name: "升",
		type: "l",
	},
	{
		name: "吨",
		type: "t",
	},
];
export default {
	props: {
		formData: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			productUnit,
			rules: {
				price: [
					{
						type: "number",
						required: true,
						message: "请输入预售价格",
						trigger: "blur",
					},
				],
				price_off: [
					{
						type: "number",
						required: true,
						message: "请输入折扣价格",
						trigger: "blur",
					},
				],
				unit: [
					{
						type: "string",
						required: true,
						message: "请选择单位",
						trigger: "change",
					},
				],
				inventory: [
					{
						required: true,
						message: "请择库存",
						trigger: "blur",
					},
				],
				images: [
					{
						required: true,
						message: "请选择一张商品示例图",
						trigger: "change",
					},
				],
				status: [],
			},
		};
	},
	// created() {
	// 	// 处理上架状态
	// 	console.log(this.formData.status)
	// 	if (this.formData.status === 1) {
	// 		console.log(1)
	// 		this.formData.status = true;
	// 	} else {
	// 		this.formData.status = false;
	// 	}
	// },
	methods: {
		// 提交
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
		// 上一页
		prev() {
			// console.log('返回上一个表单！');
			this.$emit("prev");
		},
	},
};
</script>
<style lang="less" scoped>
.avatar-uploader .el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}
.avatar-uploader .el-upload:hover {
	border-color: #409eff;
}
.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	line-height: 178px;
	text-align: center;
}
.avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>
