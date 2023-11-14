<template>
	<div class="person-info-container">
		<div class="top">
			<router-link to="/user" class="user-link">
				<img
					:src="userData.profile.avatarUrl + '?param=80y80'"
					alt=""
			/></router-link>
			<div class="info">
				<p class="name">{{ userData.profile.nickname}}</p>
				<p class="level">{{ "Lv." }}{{userData.level }}</p>
				<button class="button">已签到</button>
			</div>
		</div>
		<ul class="bottom">
			<li class="list-item">
				<router-link to="/user"
					><strong id="event_count">{{userData.profile.sCount}}</strong
					><span>动态</span></router-link
				>
			</li>
			<li class="list-item">
				<router-link to="/user"
					><strong id="follow_count">{{userData.profile.follows}}</strong
					><span>关注</span></router-link
				>
			</li>
			<li class="list-item">
				<router-link to="/user"
					><strong id="fan_count">{{userData.profile.followeds}}</strong
					><span>粉丝</span></router-link
				>
			</li>
		</ul>
	</div>
</template>

<script>
import {userInfoDetail} from '@/api/user';
export default {
	data(){
		return{
			userData:{
				profile:{}
			},//用户信息
		}
	},
	async created(){
		// 获取用户信息
		this.userData= await userInfoDetail(this.$store.state.login.userId);
	}
};
</script>

<style lang="less" scoped>
@import "~@/style/self.less";
.person-info-container {
	height: 165px;
	padding-top: 20px;
    background-color: #edeaea;
	.top {
		.self-clear();
		.user-link {
			float: left;
			width: 80px;
			height: 80px;
			margin-left: 20px;
			padding: 2px;
			background: #fff;
			border: 1px solid #dadada;
		}
		.info {
			float: left;
			width: 115px;
			margin-left: 18px;
			padding-top: 3px;
			height: 90px;
			.name {
				overflow: hidden;
				line-height: 100%;
				font-weight: 800;
			}
			.level {
				width: 50px;
				height: 20px;
				line-height: 20px;
				text-align: center;
				border: 1px solid #ccc;
				margin: 10px 0 10px 0;
				border-radius: 5px;
				color: #ccc;
				font-size: 14px;
				font-style: italic;
			}
			.button {
				color: #00000075;
				background: #bebebe;
				padding: 3px 10px;
				width: 75px;
				height: 30px;
				cursor: pointer;
				border: none;
				border-radius: 5px;
			}
		}
	}
	.bottom {
		position: relative;
		display: flex;
		justify-content: space-between;
		margin-top: 22px;
		padding: 0 25px;
		.list-item {
			height: 40px;
			a {
				color: #666;
				strong {
					display: block;
					font-size: 20px;
					font-weight: normal;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>