<template>
	<div class="project-edit-container">
		<div class="content">
			<el-form
				ref="form"
				label-width="80px"
				:rules="rules"
				:model="projectData"
			>
				<el-form-item label="项目标题" prop="name">
					<el-input
						v-model="projectData.name"
						:style="{ width: '500px' }"
					></el-input>
				</el-form-item>
				<el-form-item label="项目描述" prop="description">
					<el-input
						v-model="projectData.description"
						:style="{ width: '500px' }"
					></el-input>
				</el-form-item>
				<el-form-item label="项目地址" prop="linkUrl">
					<el-input
						v-model="projectData.linkUrl"
						:style="{ width: '500px' }"
					></el-input>
				</el-form-item>
				<el-form-item label="github地址" prop="github">
					<el-input
						v-model="projectData.github"
						:style="{ width: '500px' }"
					></el-input>
				</el-form-item>
				<el-form-item label="排序等级" prop="order">
					<el-input-number
						v-model="projectData.order"
						:min="1"
						:max="10"
					></el-input-number>
				</el-form-item>
				<el-form-item label="项目预览图"
					><el-upload
						ref="upload"
						action="/api/upload"
						list-type="picture-card"
						:limit="1"
						:file-list="imgList"
						accept="image"
						:on-preview="handlePictureCardPreview"
						:on-success="handlePictureCardSuccess"
						name="img"
					>
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="100%" :src="dialogImageUrl" alt="" />
					</el-dialog>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="onHandleSave"
						>保存</el-button
					>
					<el-button @click="onHandleReturn">取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { addProject, editProject } from "@/api/project";
import { myBaseUrl } from "@/config/url";
export default {
	data() {
		return {
			projectData: {}, //项目内容
			projectId: "", //项目ID
			dialogVisible: false, //图片预览
			dialogImageUrl: "", //预览图片地址
			imgList: [], //上传的图片列表
			isEdit: false, //是否是修改项目
			rules: {
				name: [
					{
						required: true,
						message: "请输入项目标题",
						trigger: "blur",
					},
				],
				description: [
					{
						required: true,
						message: "请输入项目描述",
						trigger: "blur",
					},
				],
				linkUrl: [
					{
						required: true,
						message: "请输入项目地址",
						trigger: "blur",
					},
				],
			}, //表单验证规则
		};
	},
	created() {
		if (this.$route.query.data) {
			this.projectData = this.$route.query.data;
			this.projectId = this.$route.query.projectId;
			this.isEdit = true; //修改项目
			this.imgList.push({
				name: "first",
				url: myBaseUrl + this.projectData.thumb,
			});
		}
	},
	methods: {
		// 图片放大
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		// 文件上传成功的钩子函数
		handlePictureCardSuccess(res, file, fileList) {
			this.projectData.thumb = res.data.url;
		},
		// 取消修改
		onHandleReturn() {
			this.$router.push({ name: "Project" });
		},
		// 保存新增项目
		async onHandleSave() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					// 校验通过
					// this.$refs.upload.submit();
					// setTimeout(async () => {
						// 判断是否有图片
						if (!this.projectData.thumb) {
							this.$message({
								type: "error",
								message: "请重新选择图片！",
							});
							return;
						}
						// 修改项目
						if (this.isEdit) {
							const res = await editProject(
								this.projectId,
								this.projectData
							);
							this.$message({
								type: "success",
								message: res,
							});
						} else {
							const res = await addProject(this.projectData);
							this.$message({
								type: "success",
								message: "添加成功！",
							});
						}
						this.$router.push({ name: "Project" });
					// }, 2000);
				} else {
					this.$message({
						type: "error",
						message: "请填写完整的数据！",
					});
					return false;
				}
			});
		},
	},
};
</script>

<style scoped>
.project-edit-container {
	width: 100%;
}
.content {
	margin-top: 20px;
	width: 100%;
}
</style>
