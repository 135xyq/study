<template>
	<div>
		<h1>组合式组件</h1>
		<p>props:  {{content}}</p>
		<button @click="onHandleClick">点击传递给父组件</button>
		<div>
			<p v-color="{color:'green'}">注入依赖的数据：{{provideData}}</p>
			<button @click="updateProvideData(2)">修改依赖的数据</button>
		</div>
	</div>
</template>

<script setup>
import {useAttrs,inject} from "vue"
const props = defineProps(['content'])
const attrs = useAttrs();
console.log("透传Attributes： ",attrs)
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

const {provideData,updateProvideData} = inject("count");

</script>


<style lang="less" scoped>
</style>