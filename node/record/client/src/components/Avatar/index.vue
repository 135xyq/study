<template>
	<div class="avatar-container">
		<img
			:src="url"
			alt="头像"
			class="avatar-img"
			:style="{ width: size + 'px', height: size + 'px' }"
		/>
	</div>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			required: true,
		},
		size: {
			type: Number,
			default: 150,
		},
	},
};
</script>

<style lang="less" scoped>
.avatar-img {
	border-radius: 50%;
     object-fit: cover;
    display: block;
    cursor: pointer;
}
</style>