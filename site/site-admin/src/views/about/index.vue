<template>
	<div class="about-container">
		<el-form
			:model="selfData"
			:rules="rules"
			ref="form"
			label-width="100px"
			class="ruleForm"
		>
			<el-form-item label="自我介绍" prop="selfDescription">
				<el-input
					type="textarea"
					:rows="2"
					placeholder="请输入内容"
					v-model="selfData.selfDescription"
					:style="{ width: '400px' }"
				>
				</el-input>
			</el-form-item>
			<el-form-item label="首页标语" prop="bannerText">
				<el-input
					type="textarea"
					:rows="2"
					placeholder="请输入内容"
					v-model="selfData.bannerText"
					:style="{ width: '400px' }"
				>
				</el-input>
			</el-form-item>
			<el-form-item label="QQ" prop="qq">
				<el-input
					placeholder="请输入qq"
					v-model="selfData.qq"
					:style="{ width: '400px' }"
				>
				</el-input>
			</el-form-item>
			<el-form-item label="微信" prop="weixin">
				<el-input
					placeholder="请输入微信"
					v-model="selfData.weixin"
					:style="{ width: '400px' }"
				>
				</el-input>
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input
					placeholder="请输入邮箱"
					v-model="selfData.email"
					:style="{ width: '400px' }"
				>
				</el-input>
			</el-form-item>
			<el-form-item label="icp" prop="icp">
				<el-input
					placeholder="请输入公安备案号"
					v-model="selfData.icp"
					:style="{ width: '400px' }"
				>
				</el-input>
			</el-form-item>
			<el-form-item label="头像"
				><el-upload
					ref="avatar"
					action="/api/upload"
					list-type="picture-card"
					:limit="1"
					:file-list="avatarList"
					accept="image"
					:on-preview="handleAvatarPreview"
					:on-success="handleAvatarSuccess"
					name="img"
				>
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogAvatarVisible">
					<img width="100%" :src="dialogAvatarUrl" alt="" />
				</el-dialog>
			</el-form-item>
			<el-form-item label="背景图"
				><el-upload
					ref="bg"
					action="/api/upload"
					list-type="picture-card"
					:limit="1"
					:file-list="bgList"
					accept="image"
					:on-preview="handleBgPreview"
					:on-success="handleBgSuccess"
					name="img"
				>
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogBgVisible">
					<img width="100%" :src="dialogBgUrl" alt="" />
				</el-dialog>
			</el-form-item>
			<el-form-item label="首页图片"
				><el-upload
					ref="banner"
					action="/api/upload"
					list-type="picture-card"
					:limit="1"
					:file-list="bannerList"
					accept="image"
					:on-preview="handleBannerPreview"
					:on-success="handleBannerSuccess"
					name="img"
				>
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogBannerVisible">
					<img width="100%" :src="dialogBannerUrl" alt="" />
				</el-dialog>
			</el-form-item>
			<el-form-item label="简历">
				<el-upload
:limit="1"
					drag
					action="/api/upload"
          name="img"
          ref="resume"
          :file-list="resumeList"
          :on-success="handleResumeSuccess"
				>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">
						将文件拖到此处，或<em>点击上传</em>
					</div>
				</el-upload>
				<el-dialog :visible.sync="dialogBannerVisible">
					<img width="100%" :src="dialogBannerUrl" alt="" />
				</el-dialog>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onHandleSave">保存</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { getAbout, editAbout, addAbout } from "@/api/about";
import { myBaseUrl } from "@/config/url";
export default {
	data() {
		return {
			selfData: {}, //个人信息
			dialogAvatarUrl: "", //放大展示的头像图片地址
			dialogAvatarVisible: false, //头像是否展示
			dialogBgUrl: "", //放大展示的背景图片图片地址
			dialogBgVisible: false, //背景图片是否展示
			dialogBannerUrl: "", //放大展示的首页图片图片地址
			dialogBannerVisible: false, //首页图片是否展示
			isEdit: false, //是否是修改
			avatarList: [], //头像列表
			bgList: [], //背景列表
			bannerList: [], //标语图片地址
			resumeList: [], //简历地址
			rules: {
				selfDescription: [
					{
						required: true,
						message: "请输入自我介绍",
						trigger: "blur",
					},
				],
				qq: [
					{
						required: true,
						message: "请输入QQ号",
						trigger: "blur",
					},
				],
				weixin: [
					{
						required: true,
						message: "请输入微信号",
						trigger: "blur",
					},
				],
				email: [
					{
						required: true,
						message: "请输入邮箱",
						trigger: "blur",
					},
				],
			},
		};
	},
	created() {
		this.__initSelfData();
	},
	methods: {
		// 初始化个人信息
		async __initSelfData() {
			const res = await getAbout();
			if (res.length > 0) {
				this.isEdit = true;
				this.selfData = res[0];
				this.avatarList.push({
					name: "first",
					url: myBaseUrl + this.selfData.avatar,
				});
				this.bgList.push({
					name: "first",
					url: myBaseUrl + this.selfData.bg,
				});
				this.bannerList.push({
					name: "first",
					url: myBaseUrl + this.selfData.banner,
				});
				this.resumeList.push({
					name: "简历",
					url: myBaseUrl + this.selfData.resume,
				});
			}
		},
		// 头像图片放大
		handleAvatarPreview(file) {
			this.dialogAvatarUrl = file.url;
			this.dialogAvatarVisible = true;
		},
		// 头像上传成功的钩子函数
		handleAvatarSuccess(res, file, fileList) {
			this.selfData.avatar = res.data.url;
		},
		// 背景图片放大
		handleBgPreview(file) {
			this.dialogBgUrl = file.url;
			this.dialogBgVisible = true;
		},
		// 背景上传成功的钩子函数
		handleBgSuccess(res, file, fileList) {
			this.selfData.bg = res.data.url;
		},
		// 标语图片放大
		handleBannerPreview(file) {
			this.dialogBannerUrl = file.url;
			this.dialogBannerVisible = true;
		},
		// 标语上传成功的钩子函数
		handleBannerSuccess(res, file, fileList) {
			this.selfData.banner = res.data.url;
		},
		// 简历上传成功的钩子函数
		handleResumeSuccess(res, file, fileList) {
			this.selfData.resume = res.data.url;
		},
		// 保存
		async onHandleSave() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					// 校验通过
					// this.$refs.avatar.submit();
					// this.$refs.bg.submit();
					// this.$refs.banner.submit();
					// this.$refs.resume.submit();
						// 判断图片是否上传成功
						if (!this.selfData.avatar && !this.selfData.bg) {
							this.$message({
								type: "error",
								message: "请选择图片！",
							});
							return;
						}
						// 修改
						if (this.isEdit) {
							const res = await editAbout(
								this.selfData.id,
								this.selfData
							);
							this.$message({
								type: "success",
								message: res,
							});
						} else {
							// 新增
							const res = await addAbout(this.selfData);
							this.$message({
								type: "success",
								message: "添加成功！",
							});
						}
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
.about-container {
	width: 100%;
}
.ruleForm {
	width: 50%;
	margin: 30px auto;
}
</style>
