<template>
	<div>
		<h1>组合式组件</h1>
		<p>props:  {{content}}</p>
		<button @click="onHandleClick">点击传递给父组件</button>
	</div>
</template>

<script setup>
const props = defineProps(['content'])
const emit = defineEmits({
	childClick:null,
	submit:({user,password})=>{
		if(user && password){
			return true;
		}else{
			console.log("账号或密码缺失！");
			return false;
		}
	}

})
function onHandleClick(n){
	emit("submit",{user:1,password:2})
	emit('childClick','newType')
}

</script>


<style lang="less" scoped>
</style>