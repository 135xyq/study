<template>
	<div class="user-info-container">
		<div class="avatar" v-if="isLogined">
			<Avatar
				:size="30"
				:round="true"
				:url=avatarUrl
			></Avatar>
		</div>
		<div class="login" v-if="!isLogined">
			<span>登录</span>
		</div>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
	components: {
		Avatar,
	},
	data() {
		return {
			avatarUrl: "",
			isLogined: false, //是否登录
		};
	},
	async created() {
        await this.$store.dispatch('login/logined');
		if (this.$store.state.login.isLogin) {
			this.isLogined = true;
			await this.$store.dispatch("login/userInfo", {
				id: this.$store.state.login.userId,
			});
			this.avatarUrl = this.$store.state.login.userInfo.profile.avatarUrl;
		}
	},
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
</style>>