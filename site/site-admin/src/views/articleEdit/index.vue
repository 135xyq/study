<template>
	<div class="article-edit-container">
		<div class="content">
			<el-form ref="form" label-width="80px" :rules="rules" :model="articleData">
				<el-form-item label="文章标题" prop='title'>
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
					<mavon-editor v-model="articleData.content" />
				</el-form-item>
				<el-form-item label="文章分类" prop="CategoryId">
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
				</el-form-item>
				<el-form-item label="预览图"
					><el-upload
						ref="upload"
						action="/api/upload"
						list-type="picture-card"
						:auto-upload="false"
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
import { getCategory } from "@/api/category";
import { addArticle, editArticle } from "@/api/article";
import { myBaseUrl } from "@/config/url";
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
      rules:{
        title:[{
           required: true, message: '请输入文章标题', trigger: 'blur',
        }],
        description:[{
           required: true, message: '请输入文章描述', trigger: 'blur',
        }],
        content:[{
           required: true, message: '请输入文章内容', trigger: 'blur',
        }],
        CategoryId:[{
           required: true, message: '请选择文章分类', trigger: 'change',
        }],
      },//表单验证规则
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
    onHandleReturn(){
				this.$router.push({ name: "Article" });
    },
		// 保存新增文章
		async onHandleSave() {
			this.$refs.upload.submit();
			setTimeout(async () => {
				// 判断评论数和阅读量如果有则继续使用
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
			}, 2000);
		},
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
