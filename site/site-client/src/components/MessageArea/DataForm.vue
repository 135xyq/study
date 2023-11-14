<template>
	<form
		id="data-form-container"
		ref="form"
		@submit.prevent="handleSubmit"
		class="data-form-container"
	>
		<div class="form-item">
			<div class="input-area">
				<input
					type="text"
					maxlength="10"
					v-model="formData.nickName"
					placeholder="用户昵称"
				/>
				<span class="tip">{{ formData.nickName.length }}/10</span>
			</div>
			<div class="error">{{ error.nickName }}</div>
		</div>
		<div class="form-item">
			<div class="text-area">
				<textarea
					maxlength="300"
					placeholder="输入内容"
					v-model="formData.content"
				></textarea>
				<span class="tip">{{ formData.content.length }}/300</span>
			</div>
			<div class="error">{{ error.content }}</div>
		</div>
		<div class="form-item">
      请选择头像(支持jpg、png、jpeg、gif)
			<input type="file" @change="onchangemd"  class="avatar-file" placeholder="选择头像"/>
      <img class="avatar" :src="myBaseUrl + this.formData.avatar" alt="" v-if="this.formData.avatar">
		</div>
		<div class="form-item">
			<div class="button-area">
				<button :disabled="isSubmiting">
					{{ isSubmiting ? "提交中..." : "提交" }}
				</button>
			</div>
		</div>
	</form>
</template>

<script>
import request from "@/api/request"
import {myBaseUrl} from "@/config.js";
export default {
	data() {
		return {
			formData: {
				nickName: "",
				content: "",
        avatar:''
			},
			error: {
				nickName: "",
				content: "",
			},
			isSubmiting: false,
      flag:false,//图片是否上传
      myBaseUrl,
		};
	},
	methods: {
		onchangemd(e) {
			let formdata = new FormData();
			formdata.append("img", e.target.files[0]); //将每一个文件图片都加进formdata
			 request.post("/api/upload", formdata).then(res => { 
         this.formData.avatar = res.url;
         this.flag = true;
       })
		},
		handleSubmit() {
			this.error.nickName = this.formData.nickName ? "" : "请填写昵称";
			this.error.content = this.formData.content ? "" : "请填写内容";
			if (this.error.nickName || this.error.content) {
				// 有错误
				return;
			}
      if(!this.flag){
        this.$showMessage({
					content: '请选择头像',
					type: "error",
					duration: 1000,})
          return;
      }
			this.isSubmiting = true; // 正在提交，防止重复点击
			this.$emit("submit", this.formData, (successMsg) => {
				this.$showMessage({
					content: successMsg,
					type: "success",
					duration: 1000,
					container: this.$refs.form,
					callback: () => {
						this.isSubmiting = false;
						this.formData.nickName = "";
						this.formData.content = "";
						this.formData.avatar = "";
            this.flag = false;
					},
				});
			}); // 让父组件来处理事件
		},
	},
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
	margin-bottom: 20px;
	overflow: hidden;
}
.form-item {
	margin-bottom: 8px;
}
.input-area {
	width: 50%;
	position: relative;
}
.text-area {
	position: relative;
}
.tip {
	position: absolute;
	right: 5px;
	bottom: 5px;
	color: #b4b8bc;
	font-size: 12px;
}
input,
textarea {
	display: block;
	width: 100%;
	box-sizing: border-box;
	border: 1px dashed @gray;
	outline: none;
	color: @words;
	font-size: 14px;
	border-radius: 4px;
	&:focus {
		border-color: @primary;
	}
}
input {
	padding: 0 15px;
	height: 40px;
}
textarea {
	resize: none;
	padding: 8px 15px;
	height: 120px;
}
.error {
	margin-top: 6px;
	color: @danger;
	font-size: 14px;
	height: 20px;
	line-height: 20px;
}
button {
	position: relative;
	cursor: pointer;
	border: none;
	outline: none;
	width: 100px;
	height: 34px;
	color: #fff;
	border-radius: 4px;
	background: @primary;
	&:hover {
		background: darken(@primary, 10%);
	}
	&:disabled {
		background: lighten(@primary, 20%);
		cursor: not-allowed;
	}
}

.avatar{
  width: 100px;
  object-fit: cover;
  height: 100px;;
}

.avatar-file{
  border: none;
  width: 30%;
  display: inline-block;
}
</style>
