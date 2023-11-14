<template>
	<div class="site-aside-container">
		<div class="avatar-container">
      <template v-if="data.avatar">	<Avatar
				:url="myBaseUrl + data.avatar"
			></Avatar></template>
		</div>
		<p class="title">谢永强的个人空间</p>
		<Menu />
		<a class="footer" href="https://beian.miit.gov.cn/" target="_blank">{{data.icp}}</a>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import { mapState } from "vuex";
import {myBaseUrl} from '@/config'
export default {
	components: {
		Avatar,
		Menu,
	},
	data(){
		return{
			myBaseUrl,
		}
	},
  computed:mapState('about',['data'])
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
	width: 100%;
	height: 100%;
	background: linear-gradient(to bottom, #183130, #234223, #296f59);
	padding: 20px 0;
	box-sizing: border-box;
	overflow-x: hidden;
	overflow-y: auto;
}
.avatar-container {
	margin: 0 auto;
  cursor: pointer;
  &:hover{
    animation: rotate 2s infinite;
  }
}
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.footer {
	text-align: center;
	font-size: 14px;
	color: #ccc;
	margin-top: 100px;
	display: block;
}
.title {
	font-size: 1.2em;
	color: #fff;
	text-shadow: 0 0 0.5em #0ae642, 0 0 0.2em #5c5c5c;
	text-align: center;
}
</style>
