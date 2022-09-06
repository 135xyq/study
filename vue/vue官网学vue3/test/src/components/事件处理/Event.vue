<template>
	<div>
		<button v-on:click="message('123')">alert</button>
	</div>
</template>

<script setup>
function message(msg) {
    alert(msg)
}
</script>

<style lang="less" scoped>
</style>