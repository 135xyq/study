<template>
	<div class="container">
		<p>CompA</p>
		<p>输入数据：{{ data }}</p>
		<p>
			<input type="text" v-model="data" />
		</p>
	</div>
</template>

<script setup>
import { ref } from "vue";
const data = ref("");
</script>

<style lang="less" scoped>
.container{
    margin: 0 auto;
    width: 500px;
    height: 200px;
    border: 1px solid red;
}
</style>