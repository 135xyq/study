<template>
    <Icon :total="total" :current="current" @pagerChange = "handlePagerChange($event)"></Icon>
</template>

<script>
import Pager from "./";
export default{
  	components:{
   		Icon
  	},
	data(){
		return{
			current:1,
			total:302
		}
	},
}
</script>

