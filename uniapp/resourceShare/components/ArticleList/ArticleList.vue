<template>
	<swiper @change="onChangeActiveIndex">
		<swiper-item v-for="(item,index) in labelList" :key="index">
			<view class="swiper-item">{{item.name}}</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "ArticleList",
		props: {
			labelList: Array,
		},
		data() {
			return {

			};
		},
		methods:{
			onChangeActiveIndex(e){
				const index = e.detail.current;
				this.$emit('onChangeActiveIndex',index);
			}
		}
	}
</script>

<style>

</style>
