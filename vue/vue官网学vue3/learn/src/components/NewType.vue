<template>
	<div>
		<h1>组合式组件</h1>
		<p>props:  {{content}}</p>
	</div>
</template>

<script setup>
const props = defineProps(['content'])

</script>


<style lang="less" scoped>
</style>