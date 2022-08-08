<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<div class="title">
			<span v-bind:title="'title'">提示标题</span>
		</div>
		<div class="reverse">
			<p>{{message}}</p>
			<button @click="onHandleReverseMessage">反转字符串</button>
		</div>
		<div class="input">
			<p>{{inputVal}}</p>
			<input type="text" v-model="inputVal">
		</div>
		<div class="once">
			<p v-once>{{onceData}}</p>
		</div>
		<div>
			<a v-bind:[testAttribute]="'/about'">about</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data(){
		return {
			message:'hello world!',
			inputVal:"test",
			onceData:"不会改变的数据",
			testAttribute:"href"
		}
	},
	beforeCreate(){
		// console.log(this)
	},
	methods:{
		onHandleReverseMessage(){
			this.message = this.message.split('').reverse().join('');
		}
	}
};
</script>
