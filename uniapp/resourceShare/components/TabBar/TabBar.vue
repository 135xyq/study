<template>
	<view class="tab-bar-container">
		<scroll-view class="tab-scroll" scroll-x="true">
			<view class="tab-scroll-box">
				<view :class="{active:activeIndex===index}" class="tab-scroll-item" v-for="(item,index) in labelList" :key="index">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" color="#666" size="26"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			labelList:{
				type:Array
			}
		},
		name:"TabBar",
		data() {
			return {
				activeIndex:0,
			};
		}
	}
</script>

<style lang="scss" scoped>
@import './css/tab-bar.scss';
</style>
