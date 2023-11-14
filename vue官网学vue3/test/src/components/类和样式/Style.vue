<template>
	<div>
        <div :class="{'test-one':isShowRed}">
            测试一
        </div>
        <div>
            <button @click="isShowRed=!isShowRed">改变红色显示</button>
        </div>
    </div>
</template>

<script setup>
    import {ref} from "vue"
    const isShowRed = ref(true)
</script>

<style lang="less" scoped>
.test-one {
	color: red;
}
.tets-two {
	color: green;
}
</style>