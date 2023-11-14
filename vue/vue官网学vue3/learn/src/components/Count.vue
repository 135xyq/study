<template>
	<div class="count-container">
		<p>count: {{ countRef }}</p>
		<button @click="increase">加一</button>
		<p>state: {{ state.count }}</p>
		<button @click="increaseState">加一</button>
	</div>
</template>

<script setup>
import { ref,nextTick,reactive } from "vue";
const countRef = ref(0);
function increase() {
	setTimeout(()=>{
        countRef.value++;
    },1000)
    nextTick(()=>{
        console.log('message')
    })
}

const state = ref({count:0});

function increaseState(){
    state.value.count++;
}



</script>

<style>
</style>