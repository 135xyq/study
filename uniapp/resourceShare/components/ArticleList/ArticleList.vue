<template>
	<swiper @change="onChangeActiveIndex" class="swiper-container" :current="activeIndex">
		<swiper-item v-for="(item,index) in labelList" :key="index" class="swiper-item">
			<view class="swiper-item">
				<ArticleListItem></ArticleListItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "ArticleList",
		props: {
			labelList: Array,
			activeIndex:Number
		},
		data() {
			return {

			};
		},
		methods: {
			onChangeActiveIndex(e) {
				const index = e.detail.current;
				this.$emit('onChangeActiveIndex', index);
			}
		}
	}
</script>

<style lang="scss">
	.swiper-container{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
		}
	}

</style>
