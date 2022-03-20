<template>
	<div class="login-container">
		<div class="container">
			<el-alert title="账号或密码错误" type="error" show-icon v-show="loginError">
			</el-alert>
			<div class="title">筱的后台管理系统</div>

			<form class="form-container">
				<div class="userName-container">
					<input
						type="text"
						v-model="loginId"
						class="email"
						placeholder="请输入账号"
						maxlength="10"
					/>
				</div>
				<div class="password-container">
					<input
						type="password"
						v-model="loginPwd"
						class="password"
						placeholder="请输入密码"
						maxlength="16"
						minlength="6"
					/>
				</div>
				<button class="login-button" @click.prevent="onHandleLogin">
					登录
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginId: "",
			loginPwd: "",
            loginError:false
		};
	},
	methods: {
		async onHandleLogin() {
			const result = await this.$store.dispatch("login/login", {
				loginId: this.loginId,
				loginPwd: this.loginPwd,
			});
			if (!result) {
				this.$router.push({name:'Home'});
				setTimeout(()=>{
					window.location.reload()
				},0)
			} else {
				this.loginError = true;
			}
		},
	},
};
</script>

<style lang = "less" scoped>
@import "~@/style/init.less";
@import "~@/style/self.less";
.login-container {
	.self-full();
	background-image: url("~@/assets/bg.jpg");
	background-size: cover;
	/* opacity: 0.7; */
}

.container {
	.self-center();
	.title {
		color: @white;
		font-size: 25px;
		margin-bottom: 20px;
		font-weight: 100;
		text-align: center;
	}
	input {
		width: 300px;
		height: 30px;
		margin: 10px 0px;
		padding: 4px 20px;
		/* padding-left: 43px; */
		border-radius: 20px;
		outline: none;
		font-size: 14px;
		background: transparent;
		color: @white;
		border: 1px @transparent solid;
		&.error {
			border: 1px @danger solid;
		}
	}
	.login-button {
		margin-top: 30px;
		width: 340px;
		height: 40px;
		border-radius: 20px;
		background: @primary;
		color: @white;
		font-size: 20px;
		padding: 2px 20px;
		cursor: pointer;
		border: none;
	}
}
</style>