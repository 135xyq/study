<template>
	<div>
		<div>输入内容：{{ text }}</div>
		<div>
			<input v-model.trim="text" placeholder="请输入内容" />
		</div>
		<div>选中内容:{{ choose }}</div>
		<div>
			<label
				>true<input type="radio" :value="true" v-model="choose"
			/></label>
			<label
				>false<input type="radio" :value="false" v-model="choose"
			/></label>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
const choose = ref(false);
</script>

<style lang="less" scoped>
</style>