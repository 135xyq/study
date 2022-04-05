<template>
	<!-- 基础卡片 -->
	<view class="list-card" v-if="item.mode === 'base'">
		<view class="list-card-img">
			<image src="http://img2.sycdn.imooc.com/5dfae4a50001a51905000256.jpg" mode=""></image>
		</view>
		<view class="lsit-card-content">
			<view class="list-card-content-title">
				<text>如果您之前熟悉sql关系型数据库，那么两者概念对应关系如下表：</text>
				<SaveIcon></SaveIcon>
			</view>
			<view class="list-card-content-desc">
				<view class="article-type">
					每日一题
				</view>
				<view class="browse-number">
					2342浏览
				</view>
			</view>
		</view>
	</view>
	<!-- 多图 -->
	<view class="list-card mode-column" v-else-if="item.mode==='column'" >
	    <view class="list-card-top">
	      <text>354u54</text>
	      <SaveIcon ></SaveIcon>
	    </view>
	    <view class="list-card-middle">
	      <view class="image-container" v-for="(img,index) in 3" :key="index">
	        <image src="https://img1.sycdn.imooc.com/5ccfac620001f8d405000344.jpg" mode="aspectFill"></image>
	      </view>
	    </view>
	    <view class="list-card-content-desc list-card-bottom">
	      <view class="article-type">
	       热女团VR额为
	      </view>
	      <view class="browse-number">
	        5234浏览
	      </view>
	    </view>
	</view>
	  <!-- 大图模式 -->
	  <view class="list-card mode-image" v-else-if="item.mode==='image'" >
	    <view class="list-card-top">
	      <view class="image-container">
	        <image src="https://img1.sycdn.imooc.com/5ccfac620001f8d405000344.jpg" mode="aspectFill"></image>
	      </view>
	    </view>
	    <view class="list-card-middle">
	      <text>热火万一被而核桃仁额人员和认同</text>
	      <SaveIcon></SaveIcon>
	    </view>
	    <view class="list-card-content-desc list-card-bottom">
	      <view class="article-type">
	        每日一题
	      </view>
	      <view class="browse-number">
	        1232浏览
	      </view>
	    </view>
	</view>
</template>

<script>
	export default {
		name:"ArticleListItemCard",
		props:{
			item:Object
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import './css/articl-list-item-card.scss';

</style>
