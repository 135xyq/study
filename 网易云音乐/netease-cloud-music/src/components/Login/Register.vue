<template>
	<div class="register-container">
		<div class="register-form">
			<p class="phone-number">
				<span class="place">+86</span>
				<input type="text" placeholder="请输入手机号" v-model="phone" />
			</p>
			<p class="phone-password">
				<input
					type="password"
					placeholder="设置登录密码,不少于8位"
                    minlength="8"
					v-model="password"
				/>
			</p>
			<button class="register">下一步</button>
		</div>
		<div class="other-methods">
			<span class="to-login" @click="onHandleLogin">&lt;&nbsp;返回登录</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			phone: "", //手机号
			password: "", //密码
		};
	},
	methods: {
        // 返回登录
        onHandleLogin() {
            this.$emit('onReturnLogin','登录')
        }
	},
};
</script>

<style lang="less" scoped>
.register-container {
	position: relative;
	justify-content: center;
	flex-direction: column;
	width: 528px;
	background-color: #fff;
	.register-form {
		padding: 30px 0 43px;
		width: 220px;
		margin: 0 auto;
		.phone-number {
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
		.register {
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
        .to-login{
            color: #2475c4;
            cursor: pointer;
        }
	}
}
</style>>
