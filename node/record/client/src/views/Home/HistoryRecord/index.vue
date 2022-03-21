<template>
	<div class="history-record-container">
		<div class="main" :style="{ height: mainLength + 'px' }"></div>
		<div class="content">
			<template v-for="(item, index) in items">
				<div
					class="item"
					:class="{
						left: index % 2 === 0,
						right: index % 2 === 1,
					}"
					:style="{ top: (index + 1) * 300 + 'px' }"
					:key="index"
					slot="reference"
				>
					<div
						v-html="item.content"
						class="over-hidden"
						@click="onHandleShow(index)"
					></div>
					<span class="publish-date"
						>{{ item.publishDate.slice(0, 19) }}
					</span>
					<div>
						<el-button
							class="delete el-icon-delete"
							type="danger"
							@click="onHandleDelete(item.id)"
						></el-button>
						<el-button
							class="edit el-icon-edit"
							type="primary"
							@click="onHandleEdit(item.id,item.content)"
						></el-button>
					</div>
				</div>
			</template>
			<el-dialog
				title="文章详情"
				class="dialog-my"
				width="80%"
				:visible.sync="show"
			>
				<div v-html="inner"></div>
			</el-dialog>
		</div>
		<img src="../../../assets/root.jpg" alt="" class="root" />
		<div class="to-top" @click="onHandleScroll">
			<img src="../../../assets/toTop.png" alt="" />
		</div>
	</div>
</template>

<script>
import { marked } from "marked";
import { getArticles, deleteArticle } from "@/api/article";
export default {
	data() {
		return {
			items: [],
			show: false,
			inner: "",
		};
	},
	computed: {
		mainLength() {
			return (this.items.length - 1) * 300 + 600;
		},
	},
	created() {
		getArticles().then((resp) => {
			this.items = resp.data;
			this.items.forEach((item) => {
				item.content = marked(item.content);
			});
			// 按照时间排序
			this.items.sort((a, b) => {
				return (
					new Date(b.publishDate.slice(0, 19)).valueOf() -
					new Date(a.publishDate.slice(0, 19)).valueOf()
				);
			});
		});
	},
	methods: {
		onHandleShow(index) {
			this.inner = this.items[index].content;
			this.show = true;
		},
		onHandleScroll() {
			window.scrollTo(0, 0);
		},
		onHandleDelete(index) {
			this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			})
				.then(() => {
					deleteArticle(index).then((resp) => {
						if (!resp.msg) {
							this.$message({
								type: "success",
								message: "删除成功!",
							});
							getArticles().then((resp) => {
								this.items = resp.data;
								this.items.forEach((item) => {
									item.content = marked(item.content);
								});
								// 按照时间排序
								this.items.sort((a, b) => {
									return (
										new Date(
											b.publishDate.slice(0, 19)
										).valueOf() -
										new Date(
											a.publishDate.slice(0, 19)
										).valueOf()
									);
								});
							});
						} else {
							this.$message({
								type: "error",
								message: resp.msg,
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
		},
		onHandleEdit(index,content) {
			  this.$alert(content, {
          dangerouslyUseHTMLString: true
        });
		},
	},
};
</script>

<style lang="less" scoped>
.root {
	position: relative;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%);
	z-index: -2;
}

.main {
	position: relative;
	bottom: 0px;
	left: 50%;
	transform: translateX(-50%);
	width: 50px;
	height: 1800px;
	background: #163001;
}
.content {
	.item.left {
		cursor: pointer;
		padding: 10px;
		position: absolute;
		top: 380px;
		left: calc(50% - 355px);
		width: 300px;
		height: 200px;
		box-sizing: border-box;
		background: #b5acaca6;
		border-radius: 20px;
		&::after {
			display: block;
			content: "";
			border: 30px solid transparent;
			border-left: 30px solid #163001;
			position: absolute;
			top: 70px;
			left: 300px;
		}
		img {
			width: 100px !important;
		}
	}
	.item.right {
		cursor: pointer;
		padding: 10px;
		position: absolute;
		top: 20px;
		left: calc(50% + 55px);
		width: 300px;
		height: 200px;
		box-sizing: border-box;
		background: #b5acac1c;
		border-radius: 20px;
		&::after {
			display: block;
			content: "";
			border: 30px solid transparent;
			border-right: 30px solid #163001;
			position: absolute;
			top: 70px;
			left: -60px;
		}
		img {
			width: 100px !important;
		}
	}

	.publish-date {
		position: absolute;
		top: -25px;
		left: 20%;
	}

	.over-hidden {
		width: 100%;
		height: 100%;
		overflow-x: auto;
		overflow-y: auto;
	}
}

.to-top {
	img {
		width: 50px;
		position: relative;
		bottom: 50px;
		left: 90%;
		cursor: pointer;
	}
}

.delete {
	position: relative;
	top: 10px;
	right: -50px;
}
.edit {
	position: relative;
	top: 10px;
	right: -100px;
}
</style>>
