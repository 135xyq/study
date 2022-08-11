<template>
	<div>
		<h1>选项式组件</h1>
		<p>props: {{content}}</p>
		<button @click="onHandleClick">点击触发父组件事件</button>
		<p>{{$attrs}}</p>
		<div>
			<div>
				<p>头部区域</p>
				<slot name="header" :message="message"></slot>
			</div>
			<div>
				<p>主区域</p>
				<slot></slot>
			</div>
			<div>
				<p>底部区域</p>
				<slot name="footer">底部区域插槽,默认值</slot>
			</div>
		</div>
		<div>
			注入依赖： {{messageInject}}
		</div>
		<div>注入依赖 count的值：{{provideData}}</div>
	</div>
</template>

<script>
import {ref,inject} from "vue";
export default {
	props:{
		content:String
	},
	emits:["childClick"],
	setup(props,ctx){
		console.log('透传Attributes',ctx.attrs);
		const message = ref('插槽数据');
		function onHandleClick(){
			ctx.emit('childClick',12)
		}
		const messageInject = inject("message");
		const {provideData} = inject("count")
		return {
			message,
			onHandleClick,
			messageInject,
			provideData
		}
	}
};
</script>

<style lang="less" scoped>
</style>