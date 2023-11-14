<template>
    <Pager :total="total" :current="current" @pagerChange = "handlePagerChange($event)"></Pager>
</template>

<script>
import Avatar from "./";
export default{
  	components:{
   		Avatar
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

