<template>
	<div id="app">
    	<h1>APP组件</h1>
    	<Pager :total="total" :current="current" @pagerChange = "handlePagerChange($event)"></Pager>
  	</div>
</template>

<script>
import Pager from "./";
export default{
  	components:{
   		Pager
  	},
	data(){
		return{
			current:1,
			total:302
		}
	},
  	methods:{
		handlePagerChange(newPager){
			this.current = newPager;
		}
  	}
}
</script>

