<template>
	<div class="user-info-container">
		<div class="avatar" v-if="isLogined" @mouseenter="onHandleMouseShow" @mouseleave="onHandleMouseHidden">
			<Avatar :size="30" :round="true" :url="avatarUrl"></Avatar>
			<div class="user-hidden" v-show="isShowSelf">
				<ul class="user-hidden-content user-self-info">
					<li class="user-hidden-item">
						<router-link :to="{name:'UserHome'}" class="user-hidden-item-link">
							<Icon type="geshou"></Icon>
							<span>我的主页</span></router-link
						>
					</li>
					<li class="user-hidden-item">
						<router-link :to="{name:'Msg'}" class="user-hidden-item-link">
							<Icon type="xiaoxi"></Icon>
							<span>我的消息</span></router-link
						>
					</li>
					<li class="user-hidden-item">
						<router-link :to="{name:'UserLevel'}" class="user-hidden-item-link">
							<Icon type="dengji"></Icon>
							<span>我的等级</span></router-link
						>
					</li>
					<li class="user-hidden-item">
						<router-link :to="{name:'Member'}" class="user-hidden-item-link">
							<Icon type="viphuiyuan"></Icon>
							<span>VIP会员</span></router-link
						>
					</li>
				</ul>
				<ul class="user-hidden-content">
					<li class="user-hidden-item">
						<router-link :to="{name:'UserUpdate'}" class="user-hidden-item-link">
							<Icon type="shezhi"></Icon>
							<span>个人设置</span></router-link
						>
					</li>
					<li class="user-hidden-item">
						<a target="_blank" href="https://music.163.com/st/userbasic/?module=st%2Fuserbasic%2F#/nameverify" class="user-hidden-item-link">
							<Icon type="shimingrenzheng"></Icon>
							<span>实名认证</span></a
						>
					</li>
				</ul>
				<ul class="user-hidden-content">
					<li class="user-hidden-item">
						<p class="user-hidden-item-link" @click="logout">
							<Icon type="tuichu"></Icon>
							<span>退出</span></p
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="login" v-if="!isLogined">
			<span @click="exitLogin = false">登录</span>
		</div>
		<div class="login-hidden" v-if="!exitLogin">
			<Login @closeLogin="onHandleExitLogin"></Login>
		</div>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Login from "@/components/Login";
import Icon from "@/components/Icon";
export default {
	components: {
		Avatar,
		Login,
		Icon,
	},
	data() {
		return {
			avatarUrl: "",
			isLogined: false, //是否登录
			exitLogin: true, //是否退出登录
			isShowSelf:false,//是否显示主页
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
	methods: {
		// 退出登录的页面
		onHandleExitLogin() {
			this.exitLogin = true;
		},
		// 鼠标移出头像,显示主页
		onHandleMouseShow(){
			this.isShowSelf = true;
		},
		// 鼠标移出图像，隐藏主页
		onHandleMouseHidden() {
			this.isShowSelf = false;
		},
		// 退出登录
		async logout() {
			await this.$store.dispatch('login/logout');
			this.$router.push('/');
			window.location.reload();
		}
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
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

.avatar {
	height: 300px;
	position: relative;
	.user-hidden {
		position: absolute;
		z-index: 999;
		top: 38px;
		right: -70px;
		width: 158px;
		background: #2b2b2b;
		border: 1px solid #202020;
		box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		.user-hidden-content {
			.self-clear();
			.user-hidden-item {
				float: left;
				box-sizing: border-box;
				width: 100%;
				padding-left: 24px;
				color: #ccc;
				height: 34px;
				font-size: 12px;
				line-height: 34px;
				cursor: pointer;
				.user-hidden-item-link{
					display: inline-block;
					width: 100%;
				}
				.icon-container {
					float: left;
					color: #ffffff47;
					font-size: 18px;
				}
				span {
					margin-left: 10px;
					color: #ccc;
					font-weight: 700;
				}
				&:hover {
					background: #c4bfbf1a;
				}
			}
		}
	}
}
</style>>