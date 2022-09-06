<template>
  <div>
    <button v-on:click="increase">{{count}}</button>
  </div>
</template>

<script setup>
    import {ref,watch,watchEffect} from "vue";
    const count = ref(0);
    function increase(){
        count.value++;
    }

    watch(count, function(newVal,oldVal) {
        console.log("newVal: " + newVal + " oldVal: " + oldVal)
    })

    // watchEffect()

</script>

<style lang="less" scoped>
</style>