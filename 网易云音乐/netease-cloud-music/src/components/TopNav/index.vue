<template>
	<div class="top-nav-container">
		<!-- 左侧导航栏信息 -->
		<div class="left-nav">
			<h1 class="logo">
				<router-link to="/"></router-link>
			</h1>
			<ul class="middle-link">
				<li
					v-for="item in navInfo"
					:key="item.path"
					class="middle-link-item"
					:class="{ selected: selected === item.path }"
				>
					<router-link :to="item.path" class="middle-link-title">{{
						item.name
					}}</router-link>
				</li>
			</ul>
		</div>
		<!-- 用户登录信息 -->
		<div class="userInfo">
			<UserInfo></UserInfo>
		</div>
		<!-- 创作者中心 -->
		<a
			href="https://music.163.com/#/creatorcenter?module=creatorcenter"
			class="create-center-link"
			target="blank"
			>创作者中心</a
		>
		<!-- 右侧搜索框 -->
		<div class="search">
			<SearchInput></SearchInput>
		</div>
	</div>
</template>

<script>
import navInfo from "@/config/topNav.js";
import SearchInput from "./SearchInput";
import UserInfo from "./UserInfo";
export default {
	components: {
		SearchInput,
		UserInfo,
	},
	data() {
		return {
			navInfo,
			selected: "/", //选中的标签
		};
	},
	watch: {
		$route: function (val, oldVal) {
			this.selected = val.path;
		},
	},
};
</script>

<style lang="less" scoped>
@import "~@/style/definition.less";
@import "~@/style/self.less";
.top-nav-container {
	height: 100%;
	width: 1100px;
	margin: 0 auto;
	.self-clear();
	.left-nav {
		height: 100%;
		float: left;
		.self-clear();
		.logo {
			background: url("../../assets/topbar.png");
			float: left;
			width: 176px;
			height: 69px;
			background-position: 0 0;
		}
		.middle-link {
			float: left;
			height: 100%;
			.middle-link-item {
				position: relative;
				float: left;
				color: @white;
				height: 100%;
				line-height: 70px;
				cursor: pointer;
				.middle-link-title {
					color: @gray;
					padding: 0 19px;
					font-size: 14px;
				}
				&:hover {
					background-color: #000;
				}
				&::after {
					display: none;
					content: "";
					border: 6px solid transparent;
					border-bottom: 6px solid @red;
					position: absolute;
					top: 57px;
					left: 50%;
					transform: translateX(-50%);
				}
				&.selected {
					background-color: #000;
					&::after {
						display: block;
					}
				}
			}
		}
	}
	.search {
		float: right;
        margin-top: 19px;
		// z-index: 0;
		// position: relative;
	}
	.create-center-link {
		float: right;
		width: 90px;
		height: 32px;
		margin: 19px 0 0 12px;
		box-sizing: border-box;
		padding-left: 16px;
		border: 1px solid #4f4f4f;
		background-position: 0 -140px;
		line-height: 33px;
		color: #ccc;
		border-radius: 20px;
		font-size: 12px;
        &:hover{
            border: 1px solid @white;
            color: @white;
        }
	}
	.userInfo {
		float: right;
		height: 45px;
		margin: 19px 0 0 20px;
		padding: 0 22px 0 0;
		background-position: right -251px;
		background-image: none;
	}
}
</style>