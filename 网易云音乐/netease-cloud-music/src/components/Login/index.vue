<template>
	<div class="login-container">
		<div class="login">
			<div class="login-title">
				<span>{{ showTitle }}</span>
				<i class="close" @click="onHandleClose">&times;</i>
			</div>
			<div class="login-content">
				<component
					:is="showWhichMethod"
					qrUrl="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
					@changeMethods="onHandleChange"
					@changeQrCode="onHandleChangeQr"
					@onChangeUsePhone="onHandelChangeUsePhone"
					@onChangeToMore="onHandleChangeToMore"
					@onChangeUsePhoneRegister="onHandleChangeUsePhoneRegister"
					@onReturnLogin="onHandleReturnLogin"
					@loginSuccess = "onLoginSuccess"
				></component>
			</div>
		</div>
	</div>
</template>

<script>
import QrLogin from "./QrLogin";
import Phone from "./Phone";
import LoginUsePhone from "./LoginUsePhone";
import Register from "./Register";
import * as loginApi from "@/api/login";
export default {
	components: {
		QrLogin,
		Phone,
		LoginUsePhone,
		Register,
	},
	data() {
		return {
			showWhichMethod: "QrLogin", //使用何种方式登录
			showTitle: "登录", //要展示的标题
		};
	},
	async created() {
		// const key = await loginApi.createKey();
		// const result = await loginApi.createQr(key);
		// console.log(result);
	},
	methods: {
		// 使用手机和微信等方式登录
		onHandleChange() {
			this.showWhichMethod = "Phone";
		},
		// 使用二维码登录
		onHandleChangeQr() {
			this.showWhichMethod = "QrLogin";
		},
		// 使用手机号登录
		onHandelChangeUsePhone(e) {
			this.showTitle = e;
			this.showWhichMethod = "LoginUsePhone";
		},
		// 使用多种方式登录
		onHandleChangeToMore() {
			this.showWhichMethod = "Phone";
		},
		// 注册
		onHandleChangeUsePhoneRegister(e) {
			this.showWhichMethod = "Register";
			this.showTitle = e;
		},
		//注册页面返回登录
		onHandleReturnLogin(e) {
			this.showWhichMethod = "Phone";
			this.showTitl
		},
		// 关闭登录页面
		onHandleClose(){
			this.$emit('closeLogin');
		},
		// 登录成功
		onLoginSuccess() {
			this.$emit('closeLogin');
		}
	},
};
</script>

<style scoped lang="less">
.login-container {
	width: 100%;
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
}
.login {
	position: relative;
	z-index: 9998;
	width: 530px;
	border-radius: 4px;
	box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
	border: none;
	// margin: 0 auto;
	background: #fff;
	pointer-events: auto;
	.login-title {
		position: relative;
		margin: 0;
		padding: 0 45px 0 18px;
		height: 38px;
		line-height: 38px;
		z-index: 10;
		border-bottom: 1px solid #191919;
		border-radius: 4px 4px 0 0;
		background: #2d2d2d;
		font-weight: bold;
		font-size: 14px;
		color: #fff;
		.close {
			position: absolute;
			z-index: 20;
			font-size: 25px;
			right: 20px;
			font-weight: 100;
			cursor: pointer;
			color: #ccc;
		}
	}
	.login-content {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		flex-direction: column;
		margin: auto;
		padding: 0;
		border: 1px solid #d8d8d8;
		border-width: 0 1px 1px;
		border-radius: 0 0 4px 4px;
		background: #fff;
	}
}
</style>