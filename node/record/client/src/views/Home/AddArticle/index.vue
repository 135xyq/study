<template>
	<div class="add-article-container">
		<mavon-editor
			ref="md"
			v-model="value"
			@imgAdd="$imgAdd"
			fontSize="16px"
			style="width: 100%; height: 100%"
		>
			<template slot="left-toolbar-after">
				<button
					type="button"
					@click="onHandleUpload"
					class="op-icon fa fa-mavon-save"
					aria-hidden="true"
					title="上传"
				>
					<i class="el-icon-upload"></i>
				</button>
			</template>
		</mavon-editor>
	</div>
</template>

<script>
import axios from "axios";
import { upload } from "@/api/article";
export default {
	data() {
		return {
			value: "",
		};
	},
	methods: {
		$imgAdd(pos, $file) {
			// 第一步.将图片上传到服务器.
			var formdata = new FormData();
			formdata.append("images", $file);
			axios({
				url: "/api/upload",
				method: "post",
				data: formdata,
				headers: { "Content-Type": "multipart/form-data" },
			}).then((url) => {
				// 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
				/**
				 * $vm 指为mavonEditor实例，可以通过如下两种方式获取
				 * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
				 * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
				 */
				const imgUrl = "http://localhost:8080/" + url.data.data.url;
				this.$refs.md.$img2Url(pos, imgUrl);
			});
		},
		async onHandleUpload() {
			const result = await upload(this.value);
			// console.log(result);
			if (result.data) {
				this.$message({
					type: "success",
					message: "上传成功!",
				});
				setTimeout(()=>{
					this.$router.push("/history");
				},1000)
			} else {
				this.$message({
					type: "errors",
					message: "上传失败!",
				});
			}
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.add-article-container {
	width: 100%;
	height: 100%;
}
</style>