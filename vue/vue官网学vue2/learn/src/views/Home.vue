<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<hr />
		<div>模板语法</div>
		<hr />
		<div class="title">
			<span v-bind:title="'title'">提示标题</span>
		</div>
		<div class="reverse">
			<p>{{ message }}</p>
			<button @click="onHandleReverseMessage">反转字符串</button>
		</div>
		<div class="input">
			<p>{{ inputVal }}</p>
			<input type="text" v-model="inputVal" />
		</div>
		<div class="once">
			<p v-once>{{ onceData }}</p>
		</div>
		<div>
			<a v-bind:[testAttribute]="'/about'">about</a>
		</div>
		<hr />
		<div>计算属性和侦听器</div>
		<hr />
		<div class="computed">
			<p>computed:{{ reverseMessage }}</p>
		</div>
		<div class="name">
			<p>姓名(直接使用data)：{{ firstName }}{{ lastName }}</p>
			<p>姓名(使用computed)：{{ fullName }}</p>
			<button @click="onHandleComputedName">
				点击使用computed的set修改姓名
			</button>
		</div>
		<hr />
		<div>Class和Style绑定</div>
		<hr />
		<div class="hasError">
			<p :class="{danger:hasError}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sunt, alias dolor voluptatum ad, pariatur suscipit perferendis, eum repellat consequuntur error at nostrum necessitatibus dignissimos atque magni nihil sint libero?</p>
			<button @click="onHandleChangeError">{{hasError?"正确":"错误"}}</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			message: "hello world!",
			inputVal: "test",
			onceData: "不会改变的数据",
			testAttribute: "href",
			firstName: "谢",
			lastName: "永强",
			hasError:false
		};
	},
	beforeCreate() {
		// console.log(this)
	},
	methods: {
		onHandleReverseMessage() {
			this.message = this.message.split("").reverse().join("");
		},
		// 点击修改姓名
		onHandleComputedName() {
			this.fullName === "谢永强"
				? (this.fullName = "黄 双珍")
				: (this.fullName = "谢 永强");
		},
		// 切换是否右错误
		onHandleChangeError(){
			this.hasError = !this.hasError;
		}
	},
	computed: {
		reverseMessage() {
			return this.message.split("").reverse().join("");
		},
		fullName: {
			get() {
				return this.firstName + this.lastName;
			},
			set(val) {
				var nameArr = val.split(" ");
				this.firstName = nameArr[0];
				this.lastName = nameArr[1];
			},
		},
	},
};
</script>
<style lang="less" scoped>
.danger{
	color: red;
}
</style>
