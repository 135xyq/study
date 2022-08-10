<script setup>
import Count from "./components/Count.vue";
import { ref, computed } from "vue";
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
		return computedFirstNameRef.value + ' ' + computedSecondNameRef.value;
	},
	set(newName) {
		[computedFirstNameRef.value, computedSecondNameRef.value] =
			newName.split(" ");
	},
});

function onHandleChangeName() {
	if (computedFullName.value === "谢 永强") {
        computedFullName.value = "x yq"
	}else{
        computedFullName.value = "谢 永强"
    }
}

/**
 * 类和样式绑定
 */

const styleErrorRef = ref(true);
const styleActiveRef = ref(false);
//改变字体颜色
function onHandleChangeStyleColor(){
    styleErrorRef.value = !styleErrorRef.value;
}
// 改变背景颜色
function onHandleChangeStyleBgColor(){
    styleActiveRef.value = !styleActiveRef.value;
}

/**
 * 条件渲染
 */
const ifShowContentRef = ref(true);
// 切换if和else显示
function onHandleChangeShow(){
	ifShowContentRef.value = !ifShowContentRef.value;
}

/**
 * 列表渲染
 */

const listShowMessage = ref([{text:'football'},{text:'basketball'},{text:'ping-pong'}])

/**
 * 事件处理
 */
function onHandleSay(message){
	alert(message)
}
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
        <hr>
        <div>类和样式绑定</div>
        <hr>
        <p :class="{'error':styleErrorRef,'active':styleActiveRef}">这是一段话，当有错误字体会变红，选中时背景会变绿</p>
        <button @click="onHandleChangeStyleColor">改变字体颜色</button>
        <button @click="onHandleChangeStyleBgColor">改变背景颜色</button>
		<p :style="{color:'green',fontSize:'20px'}">style内联样式</p>

    </div>
    <div>
        <hr>
        <div>条件渲染</div>
        <hr>
		<p v-if="ifShowContentRef">展示IF里面的内容</p>
		<p v-else>展示else的内容</p>
		<button @click="onHandleChangeShow">切换显示</button>

    </div>
	<div>
		<hr>
		<div>列表渲染</div>
		<hr>
		<ul>
			<li v-for="(item,index) in listShowMessage" :key="item.text">{{index}} :   {{item.text}}</li>
		</ul>
	</div>
	<div>
		<hr>
		<div>事件处理</div>
		<hr>
		<p>
			<button @click="onHandleSay('hello')">弹出hello</button>
			<button @click="onHandleSay('你好')">弹出你好</button>
		</p>
	</div>
</template>

<style scoped>
.error{
    color: red;
}

.active{
    background-color: rgb(21, 188, 63);
}
</style>
