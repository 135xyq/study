<template>
	<div class="top-link-container">
		<div class="top-links-container">
			<div class="content">
				<ul class="items-container">
					<li
						class="item"
						v-for="(item, index) in navInfo"
						:key="index"
					>
						<router-link
							:class="{ selected: selected === item.path.name }"
							:to="{ name: item.path.name }"
							class="item-link"
							>{{ item.name }}</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			navInfo: [
				{
					name: "推荐",
					path: {
						name: "DiscoverContent",
					},
				},
				{
					name: "排行榜",
					path: {
						name: "Toplist",
					},
				},
				{
					name: "歌单",
					path: {
						name: "Playlist",
					},
				},
				{
					name: "主播电台",
					path: {
						name: "Djradio",
					},
				},
				{
					name: "歌手",
					path: {
						name: "Artist",
					},
				},
				{
					name: "新碟上架",
					path: {
						name: "Album",
					},
				},
			],
			selected: "DiscoverContent", //当前选中的导航
		};
	},
	watch: {
		$route: function (val, oldVal) {
			this.selected = val.name;
		},
	},
};
</script>

<style lang="less" scoped>
.top-links-container {
	z-index: 90;
	height: 35px;
	box-sizing: border-box;
	background-color: #c20c0c;
	border-bottom: 1px solid #a40011;
	.content {
		width: 1100px;
		height: 34px;
		margin: 0 auto;
		.items-container {
			float: left;
			height: 34px;
			text-align: center;
			padding-left: 180px;
			.item {
				float: left;
				height: 34px;
				line-height: 34px;
				.item-link {
					font-size: 12px;
					color: #fff;
					height: 20px;
					padding: 4px 13px;
					margin: 7px 17px 0;
					border-radius: 20px;
					line-height: 21px;
					&.selected {
						background: #9b0909;
					}
				}
			}
		}
	}
}
</style>