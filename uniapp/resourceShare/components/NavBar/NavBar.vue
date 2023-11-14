<template>
	<view class="nav-bar-container">
		<view class="nav-bar-top">
			<!-- 处理导航栏 -->
			<view :style="{height:statusHeight + 'rpx'}"></view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight:marginRight + 'rpx'}">
				<uni-icons class="nav-bar-search-icon" type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-txt">输入文章标题进行搜索</view>
			</view>
		</view>
		<view :style="{height:80 + statusHeight + 'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name:"NavBar",
		created(){
			const systemInfo = uni.getSystemInfoSync();//设备信息
			if(systemInfo.safeArea.top) {
				this.statusHeight = systemInfo.safeArea.top * 2;
			}
			// #ifdef MP-WEIXIN
			const menuinfo = uni.getMenuButtonBoundingClientRect();
			this.statusHeight = menuinfo.top * 2;
			this.marginRight = menuinfo.width * 2;
			//#endif
			
			
		},
		data() {
			return {
				statusHeight:40,//状态栏高度
				marginRight:0,//空出微信小程序的胶囊
			};
		},
		methods:{
			// 跳转到search页面
			goSearchPage(){
				uni.navigateTo({
					url:'../../pages/search/search'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './css/nav-bar.scss';
</style>
