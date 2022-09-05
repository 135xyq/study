<template>
	<div>count:{{ state.count }}</div>
	<div><button @click="onHandleAdd">加一</button></div>
	<div>number:{{ number }}</div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
	setup() {
		const state = reactive({ count: 0 });
		const number = ref(0);
		console.log(number.value);
		function onHandleAdd() {
			state.count++;
		}
		return {
			state,
			onHandleAdd,
            number
		};
	},
};
</script>

<style lang="less" scoped>
</style>