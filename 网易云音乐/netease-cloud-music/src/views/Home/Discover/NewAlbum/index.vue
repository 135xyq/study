<template>
	<div class="new-album-container">
		<div class="head">
			<TypeHead
				title="新碟上架"
				routerPath="Album"
				path="Album"
			></TypeHead>
		</div>
		<div class="content">
			<SlideShowPlus :data="data"></SlideShowPlus>
		</div>
	</div>
</template>

<script>
import SlideShowPlus from "@/components/SlideShowPlus";
import TypeHead from "@/components/TypeHead";
export default {
	components: {
		SlideShowPlus,
		TypeHead,
	},
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="less" scoped>
.content {
	width: 687px;
	position: relative;
	zoom: 1;
	height: 186px;
	margin: 20px 0 37px;
	border: 1px solid #d3d3d3;
	background: #f5f5f5;
}
</style>