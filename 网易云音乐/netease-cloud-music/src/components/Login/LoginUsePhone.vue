<template>
	<div class="login-use-phone-container">
		<div class="login-form">
			<p class="phone-number">
				<span class="place">+86</span>
				<input type="text" placeholder="请输入手机号" v-model="phone" />
			</p>
			<p class="phone-code" v-show="loginMethod === '密码登录'">
				<input
					type="text"
					placeholder="请输入验证码"
					v-model="phoneCode"
				/>
				<button @click="getCaptcha">获取验证码</button>
			</p>
			<p class="phone-password" v-show="loginMethod === '短信登录'">
				<input
					type="password"
					placeholder="请输入密码"
					v-model="password"
				/>
			</p>
			<div class="change-password" @click="changeLoginMethod">
				{{ loginMethod }}
			</div>
			<button class="login" @click="login">登录</button>
		</div>
		<div class="other-methods">
			<span class="to-other" @click="onHandleChange">&lt;&nbsp;其他登录方式</span>
			<span class="to-register">&lt;&nbsp;没有账号？免费注册</span>
		</div>
	</div>
</template>

<script>
import * as loginApi from '@/api/login';
export default {
	data() {
		return {
			loginMethod: "短信登录", //登录方式
			phone: "", //手机号
			phoneCode: "", //验证码
			password: "", //密码
		};
	},
	methods: {
		// 更改登录方法：密码和验证码
		changeLoginMethod() {
			if (this.loginMethod === "密码登录") {
				this.loginMethod = "短信登录";
			} else {
				this.loginMethod = "密码登录";
			}
		},
        // 使用其他登录方法
        onHandleChange(){
            this.$emit('onChangeToMore');
        },
		// 获取验证码
		async getCaptcha() {
			// 如果手机号为空或不是11位则有误
			if(!this.phone || this.phone.length !== 11) {
				alert('手机号有误!')
				return;
			}
			await loginApi.sendCaptcha(this.phone);//发送验证码
		},
		// 登录
		async login() {
			// 这时是密码登录
			if(this.loginMethod === '短信登录') {
				if(!this.phone || !this.password && !this.phone.length!==11) {
					alert('输入有误！');
					return;
				}
				const result = await this.$store.dispatch('login/login',{
					phone:this.phone,
					password:this.password
				});
				if(result){
					alert('登录成功！');
					this.$emit('loginSuccess');
				}else{
					alert('登录失败！')
				}
			}
		}
	},
};
</script>

<style lang="less" scoped>
.login-use-phone-container {
	position: relative;
	justify-content: center;
	flex-direction: column;
	width: 528px;
	background-color: #fff;
	.login-form {
		padding: 30px 0 43px;
		width: 220px;
		margin: 0 auto;
		.phone-number,
		.phone-code {
			position: relative;
			margin: 0;
			height: 30px;
			line-height: 30px;
			border: 1px solid #cdcdcd;
			border-radius: 2px;
			z-index: 11;
			.place {
				display: inline-block;
				width: 18%;
				text-align: center;
				font-size: 12px;
				color: #5e5b5b;
				border-right: 1px solid #cdcdcd;
			}
			input {
				padding: 0 8px;
				width: 68%;
				height: 100%;
				outline: none;
				border: none;
				color: #333;
				background: none;
				font-size: 12px;
			}
		}
		.phone-code {
			margin-top: 10px;
			width: 136px;
			position: relative;
			button {
				height: 100%;
				color: #333;
				width: 75px;
				padding: 0 2px 0 7px;
				font-size: 12px;
				position: absolute;
				top: 0;
				left: 145px;
				cursor: pointer;
			}
		}
		.phone-password {
			position: relative;
			margin-top: 10px;
			height: 30px;
			line-height: 30px;
			border: 1px solid #cdcdcd;
			border-radius: 2px;
			z-index: 11;
			input {
				padding: 0 8px;
				width: 68%;
				height: 100%;
				outline: none;
				border: none;
				color: #333;
				background: none;
				font-size: 12px;
			}
		}
		.change-password {
			color: #666;
			font-size: 6px;
			margin-top: 10px;
			cursor: pointer;
		}
		.login {
			width: 220px;
			height: 31px;
			background: #2475c4;
			color: #fff;
			outline: none;
			border: none;
			cursor: pointer;
			margin-top: 20px;
			border-radius: 5px;
		}
	}
	.other-methods {
		font-size: 12px;
		display: flex;
		justify-content: space-between;
		padding: 0 19px;
		height: 48px;
		border-top: 1px solid #c6c6c6;
		border-radius: 0 0 4px 4px;
		line-height: 48px;
		background-color: #f7f7f7;
        .to-other{
            color: #2475c4;
            cursor: pointer;
        }
        .to-register{
            color: #565555e8;
        }
	}
}
</style>>
