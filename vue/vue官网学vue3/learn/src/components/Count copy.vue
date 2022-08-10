<template>
    <div class="count-container">
        <p>count: {{countRef}}</p>
        <button @click="increase">加一</button>
    </div>
</template>

<script>
import {ref} from "vue";
export default{
    setup(){
        const countRef = ref(0);
        function increase(){
            countRef.value++;
        }
        return{
            countRef,
            increase
        }
    }
}

</script>

<style>

</style>