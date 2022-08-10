<script >
export default {
	props: ["title"],
	emits: ["helloWorldClick"],
	setup(props,ctx) {
		function onHandleClick() {
			ctx.emit("helloWorldClick", "hello");
		}
		console.log(props.title);
		return {
			onHandleClick,
		};
	},
};
</script>

<template>
	<div>{{ title }}</div>
	<button @click="onHandleClick">给父组件传递事件</button>
</template>

<style scoped>
</style>
