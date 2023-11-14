<template>
	<div class="article-edit-container">
		<div class="content">
			<el-form
				ref="form"
				label-width="80px"
				:rules="rules"
				:model="articleData"
			>
				<el-form-item label="文章标题" prop="title">
					<el-input
						v-model="articleData.title"
						:style="{ width: '500px' }"
					></el-input>
				</el-form-item>
				<el-form-item label="文章描述" prop="description">
					<el-input
						v-model="articleData.description"
						:style="{ width: '500px' }"
					></el-input>
				</el-form-item>
				<el-form-item label="文章内容" prop="content">
					<mavon-editor ref="md" v-model="articleData.content"  @imgAdd="imgAdd"/>
				</el-form-item>
				<el-form-item label="文章分类" prop="CategoryId">
					<el-col :span="4">
						<el-select
							v-model="articleData.CategoryId"
							placeholder="请选择"
						>
							<el-option
								v-for="item in categoryData"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							>
							</el-option>
						</el-select>
					</el-col>
					<el-col class="line" :span="2">-</el-col>
					<el-col :span="6">
						<el-input
							placeholder="新增分类"
							v-model="newCategory"
							clearable
						>
						</el-input>
					</el-col>
					<el-col :span="2">
						<el-button type="primary" @click="onHandleAddCategory">
							确定
						</el-button>
					</el-col>
				</el-form-item>
				<el-form-item label="预览图"
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
import { getCategory, addCategory } from "@/api/category";
import { addArticle, editArticle } from "@/api/article";
import { myBaseUrl } from "@/config/url";
import request from "@/utils/request"
export default {
	data() {
		return {
			articleData: {}, //文章内容
			articleId: "", //文章ID
			categoryData: [], //分类
			dialogVisible: false, //图片预览
			dialogImageUrl: "", //预览图片地址
			imgList: [], //上传的图片列表
			isEdit: false, //是否是修改文章
			newCategory: "", //新增分类
			rules: {
				title: [
					{
						required: true,
						message: "请输入文章标题",
						trigger: "blur",
					},
				],
				description: [
					{
						required: true,
						message: "请输入文章描述",
						trigger: "blur",
					},
				],
				content: [
					{
						required: true,
						message: "请输入文章内容",
						trigger: "blur",
					},
				],
			}, //表单验证规则
		};
	},
	created() {
		if (this.$route.query.data) {
			this.articleData = this.$route.query.data;
			this.articleId = this.$route.query.articleId;
			this.isEdit = true; //修改文章
			this.imgList.push({
				name: "first",
				url: myBaseUrl + this.articleData.thumb,
			});
		}
		this.__initCategory();
	},
	methods: {
		// 获取分类
		async __initCategory() {
			const res = await getCategory();
			this.categoryData = res;
		},
		// 图片放大
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		// 文件上传成功的钩子函数
		handlePictureCardSuccess(res, file, fileList) {
			this.articleData.thumb = res.data.url;
		},
		// 取消修改
		onHandleReturn() {
			this.$router.push({ name: "Article" });
		},
		// 保存新增文章
		async onHandleSave() {
			this.$refs.form.validate(async (valid) => {
				if (valid) {
					// 校验通过
						// 判断图片是否上传成功
						if (!this.articleData.thumb) {
							this.$message({
								type: "error",
								message: "请重新选择图片！",
							});
							return;
						}
						// 修改文章
						if (this.isEdit) {
							const res = await editArticle(
								this.articleId,
								this.articleData
							);
							this.$message({
								type: "success",
								message: res,
							});
						} else {
							const res = await addArticle(this.articleData);
							this.$message({
								type: "success",
								message: "添加成功！",
							});
						}
						this.$router.push({ name: "Article" });
				} else {
					this.$message({
						type: "error",
						message: "请填写完整的数据！",
					});
					return false;
				}
			});
		},
		// 新增一个分类
		async onHandleAddCategory() {
			if (this.newCategory.trim().length === 0) {
				this.$message({
					type: "error",
					message: "分类名不能为空！",
				});
				return;
			}
			let flag = false; //是否已经存在
			this.categoryData.forEach((item) => {
				if (item.name === this.newCategory.trim()) {
					this.$message({
						type: "error",
						message: "分类已存在！",
					});
					flag = true;
					return;
				}
			});
			if (!flag) {
				// 不存在
				const res = await addCategory({
					name: this.newCategory.trim(),
				});
				if (res.code == "0") {
					this.$message({
						type: "success",
						message: res.data.name + "  新增成功!",
					});
					this.__initCategory();
				}
			}
		},
    // 上传文章中的图片
    imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('img', $file);
           request({
               url: '/api/upload',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((res) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               // $vm.$img2Url 详情见本页末尾
               let url  = myBaseUrl + res.data.url;
               this.$refs.md.$img2Url(pos, url);
           })
        }
	},
};
</script>

<style scoped>
.article-edit-container {
	width: 100%;
}
.content {
	margin-top: 20px;
	width: 100%;
}
</style>
