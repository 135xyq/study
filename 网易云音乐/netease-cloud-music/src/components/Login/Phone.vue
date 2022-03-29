<template>
	<div class="phone-container">
		<div class="content">
			<div class="main-content">
				<div class="left-container">
					<img src="../../assets/phone.png" alt="" />
					<p class="login" @click="onHandlePhoneLogin">手机号登录</p>
					<p class="register" @click="onHandleRegister">注册</p>
				</div>
				<div class="right-container">
					<ul class="more-methods">
						<li
							v-for="(item, index) in moreMethods"
							:key="index"
							class="more-methods-item"
						>
							<Icon
								:type="item.icon"
								:style="{ color: item.color }"
							></Icon>
							<span class="method-name"
								><a :href="item.path" target="blank">{{
									item.name
								}}</a></span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="foot-container">
			<div>
				<input type="checkbox" id="j-official-terms" v-model="agree" />
				<label for="j-official-terms">同意</label
				><a
					href="http://st.music.163.com/official-terms/service"
					target="_blank"
					>《服务条款》</a
				><a
					href="http://st.music.163.com/official-terms/privacy"
					target="_blank"
					>《隐私政策》</a
				><a
					href="https://st.music.163.com/official-terms/children"
					target="_blank"
					>《儿童隐私政策》</a
				>
			</div>
		</div>
		<div class="hidden-container" v-show="iShowMessage">
			<p class="hidden-title">
				请先勾选 《服务条款》、 《隐私条款》、 《儿童隐私条款》
			</p>
		</div>
		<img
			@click="onHandleChange"
			class="change-button"
			src="../../assets/change.png"
			alt=""
		/>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	data() {
		return {
			moreMethods: [
				{
					name: "微信登录",
					icon: "weixin",
					color: "green",
					path: "https://open.weixin.qq.com/connect/qrconnect?appid=wxe280063f5fb2528a&response_type=code&redirect_uri=https://music.163.com/back/weichat&forcelogin=true&scope=snsapi_login&state=uyReGdgOtk&checkToken=9ca17ae2e6ffcda170e2e6eeccb549b4ab9ddafc659b8a8aa3c85e928b9fbaf83df593af85d86d85b286b1e82af0feaec3b92ae99a9bb5e85c81a9aaa3d55f929f9ea2c45a9baaf9d7d06eb3948adaae548eabee9e&lang=zh_CN#wechat_redirect",
				},
				{
					name: "QQ登录",
					icon: "qq",
					color: "#34A1DE",
					path: "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100495085&response_type=code&redirect_uri=https://music.163.com/back/qq&forcelogin=true&state=lpctrVwsUx&checkToken=9ca17ae2e6ffcda170e2e6eeccb549b4ab9ddafc659b8a8aa3c85e928b9fbaf83df593af85d86d85b286b1e82af0feaec3b92a86b2a38dc64ab78bb985c94e828e8ab2c15a8aaeba93e76eb3bf89cce868b0b5ee9e",
				},
				{
					name: "微博登录",
					icon: "weibo",
					color: "#E94D45",
					path: "https://api.weibo.com/oauth2/authorize?client_id=301575942&response_type=code&redirect_uri=http://music.163.com/back/weibo&forcelogin=true&scope=friendships_groups_read,statuses_to_me_read,follow_app_official_microblog&state=cGAdUsQwQK&checkToken=9ca17ae2e6ffcda170e2e6eeccb549b4ab9ddafc659b8a8aa3c85e928b9fbaf83df593af85d86d85b286b1e82af0feaec3b92a90a6bd97f73cfcf1ff89c45f929e8fb2c15f9bf1f992c96ef5bfacacdc468befee9e###",
				},
				{
					name: "网易邮箱账号登录",
					icon: "wangyiyouxiang",
					color: "#E94D45",
					path: "#",
				},
			],
			agree: true, //是否同意隐私服务
			iShowMessage: false, //是否显示提示信息
		};
	},
	components: {
		Icon,
	},
	methods: {
		// 使用二维码登录
		onHandleChange() {
			this.$emit("changeQrCode");
		},
		// 使用手机号登录
		onHandlePhoneLogin() {
			if (!this.agree) {
				this.iShowMessage = true;
				setTimeout(() => {
					this.iShowMessage = false;
				}, 2000);
			} else {
				this.$emit("onChangeUsePhone", "手机号登录");
			}
		},
		// 去注册
		onHandleRegister() {
			if (!this.agree) {
				this.iShowMessage = true;
				setTimeout(() => {
					this.iShowMessage = false;
				}, 2000);
			} else {
				this.$emit("onChangeUsePhoneRegister", "手机号注册");
			}
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.phone-container {
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 528px;
	height: 326px;
	background-color: #fff;
	.content {
		display: flex;
		justify-content: center;
		height: 220px;
		.main-content {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 220px;
			.left-container {
				width: 224px;
				padding: 0 35px 3px 40px;
				border-right: 1px dotted #ccc;
				.login,
				.register {
					width: 219px;
					background: #2677c5;
					border: 1p solid #ccc;
					font-size: 12px;
					height: 31px;
					color: #fff;
					text-align: center;
					margin-top: 10px;
					line-height: 31px;
					border-radius: 5px;
					cursor: pointer;
				}
				.register {
					background: #bab5b55e;
					color: #000;
				}
			}
			.right-container {
				padding: 3px 0 3px 39px;
				margin-top: -15px;
				.more-methods-item {
					height: 40px;
					.self-clear();
					margin: 15px 0;
					.icon-container {
						// line-height: 40px;
						float: left;
						font-size: 30px;
					}
					span {
						line-height: 40px;
						font-size: 12px;
						margin-left: 15px;
					}
				}
			}
		}
	}
	.foot-container {
		font-family: NotoSansHans-Regular;
		font-size: 10px;
		color: rgba(0, 0, 0, 0.4);
		line-height: 15px;
		margin-left: 40px;
		margin-top: 15px;
		input {
			vertical-align: middle;
			margin-right: 3px;
		}
		a {
			color: #507daf;
		}
	}
	.change-button {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 52px;
		height: 52px;
		cursor: pointer;
	}
	.hidden-container {
		position: absolute;
		top: calc(50% - 50px);
		left: calc(50% - 150px);
		font-size: 16px;
		color: #fff;
		width: 300px;
		line-height: 30px;
		height: 60px;
		padding: 10px;
		border-radius: 10px;
		text-align: center;
		background: rgba(0, 0, 0, 0.473);
	}
}
</style>