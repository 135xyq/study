<template>
	<div>count:{{ state.count }}</div>
	<div><button @click="onHandleAdd">加一</button></div>
	<div>number:{{ number }}</div>
	<hr>
	<div>{{object.foo.value+1}}</div>
	<hr/>
	<div>{{test}}</div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
	setup() {
		const state = reactive({ count: 0 });
		const number = ref(0);
		number.value++;
		const refObj = ref({ a: 1, b: 2 });
		console.log(refObj.value);
		const obj = { a: 1 };
		const proxy1 = reactive(obj);
		const proxy2 = reactive(obj);
		const test = ref(123)
		const object = { foo: ref(1) };

		console.log(
			proxy1,
			obj,
			obj === proxy1,
			proxy2,
			proxy1 === proxy2,
			proxy1 === reactive(proxy1)
		);
		function onHandleAdd() {
			state.count++;
		}

		return {
			state,
			onHandleAdd,
			number,
			object,
			test
		};
	},
};
</script>

<style lang="less" scoped>
</style>