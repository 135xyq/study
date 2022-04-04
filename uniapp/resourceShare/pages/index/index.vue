<template>
	<view class="content">
		<!-- 头部搜索 -->
		<NavBar></NavBar>
		<!-- 标签切换 -->
		<TabBar :labelList="labelList"></TabBar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList:null,//标签列表
			}
		},
		onLoad() {
			this._initLabelList();
		},
		methods: {
			async _initLabelList(){
				const res = await uniCloud.callFunction({
					name:"db_label_get"
				});
				this.labelList = res.result.data;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
