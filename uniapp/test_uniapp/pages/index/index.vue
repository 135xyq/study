<template>
	<view class="content">
<!-- 		<scroll-view>
			<view class="" v-for="item in 200">
				{{item}}
			</view>
		</scroll-view> -->
		<swiper :indicator-dots="true" :autoplay="true" indicator-color="red" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">1</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">2</view>
			</swiper-item>
		</swiper>
		<movable-area direction="all">
			
		</movable-area>
		<icon type="clear" size="30"></icon>
		<rich-text :nodes="htmlValue"></rich-text>
		<button type="primary" size="mini">button</button>
		<editor placeholder="请输入内容" class="ql-container"></editor>
		<switch checked="true" @change="" />
		<navigator url="/pages/other/other">to page other</navigator>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				htmlValue:'<div>hello</div>'
			}
		}
	}
</script>

<style scoped>
</style>
