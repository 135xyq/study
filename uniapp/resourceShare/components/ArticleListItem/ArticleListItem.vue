<template>
	<view class="article-list-item-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view><ArticleListItemCard :item="data"></ArticleListItemCard></view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		name:"ArticleListItem",
		data() {
			return {
				data:{
					mode:'image'
				}
			};
		}
	}
</script>

<style lang="scss">
	.article-list-item-container{
		height: 100%;
		.list-scroll{
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}

</style>
