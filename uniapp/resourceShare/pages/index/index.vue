<template>
	<view class="home-container">
		<!-- 头部搜索 -->
		<NavBar></NavBar>
		<!-- 标签切换 -->
		<TabBar :labelList="labelList" :activeIndex="activeIndex" @onChangeActiveIndex = "onChangeActiveIndex"></TabBar>
		<!-- 文章 -->
		<ArticleList :labelList="labelList" :activeIndex="activeIndex" class="list-container" @onChangeActiveIndex = onChangeActiveIndex></ArticleList>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList:null,//标签列表
				activeIndex:0,//当前选中的标签
			}
		},
		onLoad() {
			this._initLabelList();
		},
		methods: {
			// 初始化获取标签数据
			async _initLabelList(){
				// const res = await uniCloud.callFunction({
				// 	name:"db_label_get"
				// });
				// this.labelList = res.result.data;
				this.labelList = await this.$http.get_lable_list();
			},
			// 处理切换标签
			onChangeActiveIndex(index){
				this.activeIndex = index;
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		display: flex;
		height: 100%;
	}
	.home-container{
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		@include flex(flext-start,column);
		align-items: inherit;
		.list-container{
			flex: 1;
			box-sizing: border-box;
		}
	}
	
	
</style>
