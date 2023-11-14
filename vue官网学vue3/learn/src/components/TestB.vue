<template>
	<div class="container">
        <p>CompB</p>
        <button @click="countAdd">{{count}} + </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
function countAdd() {
	count.value += 1;
}
</script>

<style lang="less" scoped>
.container{
    margin: 0 auto;
    width: 500px;
    height: 200px;
    border: 1px solid green;
}
</style>