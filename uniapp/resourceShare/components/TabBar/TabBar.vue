<template>
	<view class="tab-bar-container">
		<scroll-view class="tab-scroll" scroll-x="true" :scroll-with-animation="true" scroll-into-view="currentIndex">
			<view class="tab-scroll-box">
				<view :id="'item' + index" @click = "onChangeActiveIndex(index)" :class="{active:activeIndex===index}" class="tab-scroll-item" v-for="(item,index) in labelList" :key="index">{{item.name}}</view>
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
			},
			activeIndex:{
				type:Number
			}
		},
		data(){
			return{
				currentIndex:'item0',//当前选中的标签
			}
		},
		name:"TabBar",
		methods:{
			// 处理标签点击事件
			onChangeActiveIndex(index){
				this.$emit('onChangeActiveIndex',index);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './css/tab-bar.scss';
</style>
