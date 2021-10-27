<template>
    <Pager :total="total" :current="current" @pagerChange = "handlePagerChange($event)"></Pager>
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

