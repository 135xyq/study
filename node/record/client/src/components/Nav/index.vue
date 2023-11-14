<template>
	<div class="home-container">
		<div class="left-nav">
			<div class="header-user">
				<Avatar class="img" :url="imgUrl" :size="120" />
				<el-tooltip
					class="item"
					effect="light"
					content="点击会退出登录"
					placement="top"
				>
					<p class="userName" @click="onHandleLogout">
						<span>{{ userName }}</span>
					</p>
				</el-tooltip>
			</div>
			<div class="nav-menus">
				<p
					class="add-article"
					@click="onHandleSelect"
					:class="{ selected: href === 'add' }"
				>
					<span class="el-icon-circle-plus-outline"></span>
					<router-link class="link" :to="{ name: 'Add' }"
						>新增一个记录</router-link
					>
				</p>
				<p
					class="history-article"
					@click="onHandleSelect"
					:class="{ selected: href === 'history' }"
				>
					<span class="el-icon-s-data"></span>
					<router-link class="link" :to="{ name: 'History' }"
						>历史记录</router-link
					>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
import imgUrl from "@/assets/avatar.jpeg";

export default {
	components: {
		Avatar,
	},
	data() {
		return {
			imgUrl,
			userName: JSON.parse(this.$store.state.login.userData).name,
			href: window.location.hash.substr(2),
		};
	},
	methods: {
		onHandleSelect() {
			this.href = window.location.hash.substr(2);
		},
    onHandleLogout(){
      this.$store.dispatch('login/logout');
      this.$router.push('/login')
    }
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.home-container {
	.self-full();
	width: 100%;
	height: 100%;

	.left-nav {
		.self-full();
		position: fixed;
		width: 200px;
		background: #545c64;
		.header-user {
			height: 200px;
			.img {
				margin: 60px 40px 0 40px;
			}
			.userName {
				text-align: center;
				margin-top: 20px;
				color: #fff;
				cursor: pointer;
			}
		}
		.nav-menus {
			p {
				width: 100%;
				height: 60px;
				line-height: 60px;
				color: #fff;
				padding-left: 20px;
				font-size: 20px;
				box-sizing: border-box;
				cursor: pointer;
				.link {
					color: #fff;
					font-size: 16px;
					padding-left: 10px;
				}
				&:hover {
					background: #435261;
				}
				&.selected {
					background-color: #222b338f;
					color: #34dea5;
					.link {
						color: #34dea5;
					}
				}
			}
		}
	}
	.right-main {
		position: absolute;
		left: 200px;
		width: calc(100% - 200px);
		height: 100%;
	}
}
</style>
