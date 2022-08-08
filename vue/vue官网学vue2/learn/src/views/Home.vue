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
			<p :class="{ danger: hasError }">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
				sunt, alias dolor voluptatum ad, pariatur suscipit perferendis,
				eum repellat consequuntur error at nostrum necessitatibus
				dignissimos atque magni nihil sint libero?
			</p>
			<button @click="onHandleChangeError">
				{{ hasError ? "正确" : "错误" }}
			</button>
		</div>
		<hr />
		<div>条件渲染</div>
		<hr />
		<div>
			<p v-if="isShowIf">展示If的内容</p>
			<p v-else>展示Else的内容</p>
			<button @click="onHandleChangeShowIf">切换</button>
		</div>
		<hr />
		<div>列表渲染</div>
		<hr />
		<div>
			<ul>
				<li v-for="item in 10" :key="item">列表的第 {{ item }} 项</li>
			</ul>
		</div>
		<hr />
		<div>事件处理</div>
		<hr />
		<div>
			<p>被点击的次数： {{ count }}</p>
			<button @click="count += 1">加一</button>
		</div>
		<div>
			<p>当前时间：{{ currentTime }}</p>
			<button @click="onHandleUpdateTime($event)">更新当前时间</button>
		</div>
		<div>
			<p>点击enter提交</p>
			<input
				type="text"
				v-model="eventMessage"
				@keyup.enter="onHandleAlertInputText"
			/>
		</div>
		<div>
			<p @click.left="onHandleMouseClick('左键')">鼠标左键被点击</p>
			<p @click.right.prevent="onHandleMouseClick('右键')">
				鼠标右键被点击
			</p>
			<p @click.middle="onHandleMouseClick('中间键')">鼠标中间键被点击</p>
		</div>
		<hr />
		<div>表单输入绑定</div>
		<hr />
		<div>
			<p>输入框：{{ formInput }}</p>
			<input
				type="text"
				v-model="formInput"
				minlength="2"
				maxlength="4"
			/>
		</div>
		<div>
			<p>单选框：{{ formRadio }}</p>

			<label>
				<input type="radio" v-model="formRadio" value="One" />One
			</label>
			<br />
			<label
				><input type="radio" v-model="formRadio" value="Two" />Two
			</label>
		</div>
		<div>
			<p>多选框： {{ formChecked }}</p>
			<label>
				<input
					type="checkbox"
					v-model="formChecked"
					value="football"
				/>football
			</label>
			<br />
			<label
				><input
					type="checkbox"
					v-model="formChecked"
					value="basketball"
				/>basketball
			</label>
			<br />
			<label
				><input
					type="checkbox"
					v-model="formChecked"
					value="swimming"
				/>swimming
			</label>
		</div>
		<div>
			<p>选择框： {{formSelect}}</p>
			<select v-model="formSelect">
				<option value="A">A</option>
				<option value="B">B</option>
				<option value="C">C</option>
			</select>
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
			hasError: false,
			isShowIf: false,
			count: 0,
			currentTime: new Date(),
			eventMessage: "",
			formInput: "",
			formRadio: "",
			formChecked: [],
			formSelect:''
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
		onHandleChangeError() {
			this.hasError = !this.hasError;
		},
		// 切换条件显示
		onHandleChangeShowIf() {
			this.isShowIf = !this.isShowIf;
		},
		// 更新当前时间
		onHandleUpdateTime(e) {
			this.currentTime = new Date();
			console.log(e);
		},
		//弹出输入内容
		onHandleAlertInputText() {
			alert(this.eventMessage);
		},
		// 处理鼠标按键被点击
		onHandleMouseClick(key) {
			alert(key + " 被点击了！");
		},
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
button {
	cursor: pointer;
	background-color: rgb(25, 48, 116);
	color: #fff;
}
.danger {
	color: red;
}
</style>
