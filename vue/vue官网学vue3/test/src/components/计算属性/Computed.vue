<template>
	<div>
		<button @click="increase">{{ count }}</button>
	</div>
	<div>{{ getJiOu }}</div>
    <div>
        <button @click="getJiOu='set'">set</button>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
const count = ref(0);
function increase() {
	count.value++;
}
const getJiOu = computed({
	get(){
		return count.value % 2 === 0 ? "偶" : "奇";
	},
	set(value){
		console.log(value);
	}
});
</script>

<style lang="less" scoped>
</style>