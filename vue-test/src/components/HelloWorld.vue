<template>
	<div class="test-vue">
        {{'helloWorld'}}
	</div>
</template>

<script>
export default {
    props:['user'],
	data() {
		return {
			txt:'tyet'
		};
	},
    methods:{
        handle(t){
            console.log(t.target.value)
            this.txt = t.target.value
        }
    },
    created(){
        console.log(this.$parent.tt)
    }
};
</script>

<style>
</style>