<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button v-on:click="onHandleToHome">首页</button>
		<Count></Count>
	</div>
</template>

<script>
import Count from "@/components/Count";
export default {
	components:{
		Count
	},
	created(){
		// console.log(this.$router,this.$route)
	},
	methods:{
		onHandleToHome(){
			this.$router.push({name:'Home',query:{a:1,b:2}});
		}
	}
};
</script>
