<script setup lang="ts">

import {onMounted} from "vue";

const props = defineProps(['count'])
onMounted(() => {
  console.log(props.count)
})
const add = defineEmits(['add'])

function onHandleClickCount() {
  add('add')
}
</script>

<template>
  <button @click="onHandleClickCount">{{ count }}</button>
</template>

<style scoped lang="less">

</style>