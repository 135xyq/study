<template>
	<div class="search-input">
		<span class="search-icon">
			<Icon type="sousuo"></Icon>
		</span>
		<input
			type="text"
			v-model="inputData"
			class="input"
			placeholder="音乐/视频/电台/用户"
		/>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
	data() {
		return {
			inputData: "", //输入框数据
		};
	},
};
</script>

<style lang="less" scoped>
.search-input {
	position: relative;
	background-color: #fff;
	border-radius: 32px;
	width: 158px;
	height: 32px;
	.input {
		width: 75%;
		margin: 0;
		padding: 0;
		background: transparent;
		line-height: 32px;
		padding-left: 30px;
		border: none;
		font-size: 12px;
	}
	.search-icon {
		position: absolute;
		top: 6px;
		left: 10px;
		color: #333;
	}
}
</style>