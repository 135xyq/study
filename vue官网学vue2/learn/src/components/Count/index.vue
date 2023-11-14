<template>
	<div class="count-container">
        <p>{{$store.state.count}}</p>
        <p>
            <button @click="increase">加一</button>
        </p>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            count:0
        }
    },
    created(){
        const result = mapState(['count'])
        console.log(result)
    },
    methods:{
        increase(){
            this.$store.dispatch("increase")
        }
    }
};
</script>

<style>
</style>