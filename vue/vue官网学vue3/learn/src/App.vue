<script setup>
import Count from "./components/Count.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { ref, computed, watch, onMounted, onUnmounted ,provide} from "vue";
/**
 * 计算属性
 */
const computedStrRef = ref("This is a good idea!");
const computedReverseStr = computed(() =>
	computedStrRef.value.split("").reverse().join("")
);
const computedFirstNameRef = ref("谢");
const computedSecondNameRef = ref("永强");
const computedFullName = computed({
	get() {
		return computedFirstNameRef.value + " " + computedSecondNameRef.value;
	},
	set(newName) {
		[computedFirstNameRef.value, computedSecondNameRef.value] =
			newName.split(" ");
	},
});

function onHandleChangeName() {
	if (computedFullName.value === "谢 永强") {
		computedFullName.value = "x yq";
	} else {
		computedFullName.value = "谢 永强";
	}
}

/**
 * 类和样式绑定
 */

const styleErrorRef = ref(true);
const styleActiveRef = ref(false);
//改变字体颜色
function onHandleChangeStyleColor() {
	styleErrorRef.value = !styleErrorRef.value;
}
// 改变背景颜色
function onHandleChangeStyleBgColor() {
	styleActiveRef.value = !styleActiveRef.value;
}

/**
 * 条件渲染
 */
const ifShowContentRef = ref(true);
// 切换if和else显示
function onHandleChangeShow() {
	ifShowContentRef.value = !ifShowContentRef.value;
}

/**
 * 列表渲染
 */

const listShowMessage = ref([
	{ text: "football" },
	{ text: "basketball" },
	{ text: "ping-pong" },
]);

/**
 * 事件处理
 */
function onHandleSay(message) {
	alert(message);
}

/**
 * 表单输入绑定
 */

const formInputTextRef = ref("");
const formCheckedRef = ref(false);

/**
 * watch
 */

const watchCountRef = ref(0);
let timer;
// onMounted(() => {
// 	timer = setInterval(() => {
// 		watchCountRef.value++;
// 	}, 1000);
// });

// onUnmounted(() => {
// 	clearInterval(timer);
// });

watch(watchCountRef, (newData, oldData) => {
	// console.log(newData,oldData)
});

/**
 * 模板引用
 */

const input = ref(null);

onMounted(() => {
	input.value.focus();
	// console.log(itemsRef.value,itemsRef.value[0])
});

const itemsRef = ref(["a", "b", "c"]);

/**
 * 组件基础
 */

function onHandleHelloWorldEvent(e) {
	console.log(e);
}
/**
 * 事件
 */
function onHandleNormalEmitClick(n) {
	alert("点击" + n);
}

/**
 * 依赖注入
 */
provide("message","注入依赖的数据")
const provideData = ref(0);
function updateProvideData(n){
	provideData.value = provideData.value + n;
}

provide('count',{
	provideData,
	updateProvideData
})


const newTypeAndNormal = ref(0);
</script>

<template>
	<div>
		<hr />
		<div>响应式基础</div>
		<hr />
		<Count></Count>
	</div>
	<div>
		<hr />
		<div>计算属性</div>
		<hr />
		<p>normal: {{ computedStrRef }}</p>
		<p>reverse: {{ computedReverseStr }}</p>
		<p>name: {{ computedFullName }}</p>
		<p>
			<button @click="onHandleChangeName">更改名字</button>
		</p>
	</div>
	<div>
		<hr />
		<div>类和样式绑定</div>
		<hr />
		<p :class="{ error: styleErrorRef, active: styleActiveRef }">
			这是一段话，当有错误字体会变红，选中时背景会变绿
		</p>
		<button @click="onHandleChangeStyleColor">改变字体颜色</button>
		<button @click="onHandleChangeStyleBgColor">改变背景颜色</button>
		<p :style="{ color: 'green', fontSize: '20px' }">style内联样式</p>
	</div>
	<div>
		<hr />
		<div>条件渲染</div>
		<hr />
		<p v-if="ifShowContentRef">展示IF里面的内容</p>
		<p v-else>展示else的内容</p>
		<button @click="onHandleChangeShow">切换显示</button>
	</div>
	<div>
		<hr />
		<div>列表渲染</div>
		<hr />
		<ul>
			<li v-for="(item, index) in listShowMessage" :key="item.text">
				{{ index }} : {{ item.text }}
			</li>
		</ul>
	</div>
	<div>
		<hr />
		<div>事件处理</div>
		<hr />
		<p>
			<button @click="onHandleSay('hello')">弹出hello</button>
			<button @click="onHandleSay('你好')">弹出你好</button>
		</p>
	</div>
	<div>
		<hr />
		<div>表单输入绑定</div>
		<hr />
		<p>
			<span>输入内容： {{ formInputTextRef }}</span> |
			<input type="text" v-model.number="formInputTextRef" />
		</p>
		<p>
			复选框：{{ formCheckedRef }}
			<input
				type="checkbox"
				true-value="yes"
				false-value="no"
				v-model="formCheckedRef"
			/>
		</p>
	</div>
	<div>
		<hr />
		<div>watch 侦听器</div>
		<hr />
		<div>计时器：{{ watchCountRef }}</div>
	</div>
	<div>
		<hr />
		<div>模板引用</div>
		<hr />
		<p>
			<input type="text" ref="input" />
		</p>
		<ul>
			<li v-for="item in 3" :key="item" ref="itemsRef">{{ item }}</li>
		</ul>
	</div>
	<div>
		<hr />
		<div>组件基础</div>
		<hr />
		<HelloWorld
			@helloWorldClick="onHandleHelloWorldEvent"
			title="hello world!"
		></HelloWorld>
	</div>
	<div>
		<hr />
		<div>组件注册</div>
		<hr />
		<GlobalComponent></GlobalComponent>
	</div>
	{{ newTypeAndNormal }}
	<NewType
		content="组合式"
		@child-click="onHandleNormalEmitClick"
		class="newType"
		@click="newTypeAndNormal = newTypeAndNormal + 1"
	></NewType>
	<Normal
		content="选项式"
		@child-click="onHandleNormalEmitClick"
		class="normal"
		@click="newTypeAndNormal = newTypeAndNormal + 1"
	>
		<template #header="defaultProps">
			<p>头部插槽内容，由父组件提供</p>
			<p>插槽传递的数据：{{defaultProps.message}}</p>
		</template>
		<p>主区域插槽内容，由父组件提供</p>
	</Normal>
	<div>
		<p v-color="{color:'red'}">这是一段话</p>
	</div>
</template>

<style scoped>
.error {
	color: red;
}

.active {
	background-color: rgb(21, 188, 63);
}
</style>
