<template>
	<div class="category-container">
    <div class="add-category">
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
    </div>
		<div class="category-show">
			<template>
				<el-tag
					class="category-tag"
					v-for="(category, index) in categories"
					:key="category.label"
					:type="types[index % 5]"
					:hit="true"
					closable
					effect="dark"
					@click="onHandleClick(category.id, category.name)"
					@close="onHandleDelete(category.id, category.name)"
				>
					{{ category.name }}
				</el-tag>
			</template>
		</div>
		<div class="bottom-articles">
			<router-link :to="{name:'Article'}" >{{activeCategory}} 分类下的文章：</router-link>
      <p v-if="articles.length == 0 ">暂无文章</p>
			<el-collapse v-model="activeName" accordion>
				<el-collapse-item
					v-for="(article, index) in articles"
					:title="'文章标题：' + article.title"
					:name="index + 1"
					:key="article.id"
				>
					<div v-html="article.content"></div>
				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script>
import {
	getCategory,
	addCategory,
	deleteCategory,
	getCategoryArticle,
} from "@/api/category";
export default {
	data() {
		return {
			categories: [], //分类
			types: ["", "success", "info", "danger", "warning"], //标签种类
			articles: [], //文章
			activeName: "1", //默认展开的
      activeCategory:'',//选中的分类
      newCategory:'',//新增分类
		};
	},
	created() {
		this.__initCategoryData();
	},
	methods: {
		// 获取分类
		async __initCategoryData() {
			const res = await getCategory();
			this.categories = res;
		},
		// 点击查看分类详情
		async onHandleClick(id,name) {
      this.activeCategory = name;
			const res = await getCategoryArticle(id);
			this.articles = res.Articles;
		},
		// 删除分类
		onHandleDelete(id, name) {
			this.$confirm(
				`此操作将永久删除 ${name}，需要提前删除该分类的所有文章, 是否继续?`,
				"提示",
				{
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
				}
			)
				.then(async () => {
					const res = await deleteCategory(id);
					this.$message({
						type: "success",
						message: res,
					});
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除",
					});
				});
		},
    // 新增分类
    async onHandleAddCategory(){
      if (this.newCategory.trim().length === 0) {
				this.$message({
					type: "error",
					message: "分类名不能为空！",
				});
				return;
			}
			let flag = false; //是否已经存在
			this.categories.forEach((item) => {
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
					this.__initCategoryData();
				}
			}
    }
	},
};
</script>

<style scoped>
.category-container {
	width: 100%;
}
.category-show {
	width: 80%;
	margin: 0 auto;
	margin-top: 20px;
}
.add-category{
  width: 60%;
  height: 50px;
  margin-left:70%;
  margin-top: 20px;
}
.category-tag {
	margin: 20px 10px;
	font-size: 20px;
	cursor: pointer;
}
.bottom-articles {
	width: 90%;
	margin: 0 auto;
}
</style>
