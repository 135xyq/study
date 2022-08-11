<template>
	<div>
		<h1>选项式组件</h1>
		<p>props: {{content}}</p>
		<button @click="onHandleClick">点击触发父组件事件</button>
		<p>{{$attrs}}</p>
	</div>
</template>

<script>
export default {
	props:{
		content:String
	},
	emits:["childClick"],
	setup(props,ctx){
		console.log('透传Attributes',ctx.attrs)
		function onHandleClick(){
			ctx.emit('childClick',12)
		}
		return {
			onHandleClick
		}
	}
};
</script>

<style lang="less" scoped>
</style>