<template>
	<div class="user-info-container">
		<div class="avatar" v-if="isLogined">
			<Avatar :size="30" :round="true" :url="avatarUrl"></Avatar>
		</div>
		<div class="login" v-if="!isLogined">
			<span @click="exitLogin = false">登录</span>
		</div>
		<div class="login-hidden" v-if="!exitLogin">
			<Login @closeLogin = "onHandleExitLogin"></Login>
		</div>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Login from "@/components/Login";
export default {
	components: {
		Avatar,
		Login,
	},
	data() {
		return {
			avatarUrl: "",
			isLogined: false, //是否登录
			exitLogin:true,//是否退出登录
		};
	},
	async created() {
		await this.$store.dispatch("login/logined");
		if (this.$store.state.login.isLogin) {
			this.isLogined = true;
			await this.$store.dispatch("login/userInfo", {
				id: this.$store.state.login.userId,
			});
			this.avatarUrl = this.$store.state.login.userInfo.profile.avatarUrl;
		}
	},
	methods:{
		// 退出登录的页面
		onHandleExitLogin() {
			this.exitLogin = true;
		}
	}
};
</script>

<style lang="less" scoped>
.login {
	font-size: 12px;
	color: rgba(214, 210, 210, 0.541);
	margin-top: 8px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
.login-hidden {
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.65);
}
</style>>