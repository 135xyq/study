<script setup>
import Count from "./components/Count.vue";
import { ref, computed } from "vue";
/**
 * 计算属性
 */
const computedStrRef = ref("This is a good idea!");
const computedReverseStr = computed(() =>
	computedStrRef.value.split("").reverse().join("")
);
const computedFirstNameRef = ref("谢");
const computedSecondNameRef = ref("永强");
const computedFullName = computed({
	get() {
		return computedFirstNameRef.value + ' ' + computedSecondNameRef.value;
	},
	set(newName) {
		[computedFirstNameRef.value, computedSecondNameRef.value] =
			newName.split(" ");
	},
});

function onHandleChangeName() {
	if (computedFullName.value === "谢 永强") {
        computedFullName.value = "x yq"
	}else{
        computedFullName.value = "谢 永强"
    }
}
</script>

<template>
	<div>
		<hr />
		<div>响应式基础</div>
		<hr />
		<Count></Count>
	</div>
	<div>
		<hr />
		<div>计算属性</div>
		<hr />
		<p>normal: {{ computedStrRef }}</p>
		<p>reverse: {{ computedReverseStr }}</p>
		<p>name: {{ computedFullName }}</p>
		<p>
			<button @click="onHandleChangeName">更改名字</button>
		</p>
	</div>
</template>

<style scoped>
</style>
