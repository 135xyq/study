import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

const imgUrls = ["https://tse3-mm.cn.bing.net/th/id/OIP-C.ZzAuQjvpv1bNI5XAeTnmYwHaJ8?w=192&h=258&c=7&r=0&o=5&dpr=1.56&pid=1.7","https://tse1-mm.cn.bing.net/th/id/OIP-C.h0rWDr3fnmVUvJ8hBqU3_AHaJ4?w=192&h=256&c=7&r=0&o=5&dpr=1.56&pid=1.7","https://tse3-mm.cn.bing.net/th/id/OIP-C.ZbQxr9UfJhh-ePyH9zFJhAHaLM?w=192&h=290&c=7&r=0&o=5&dpr=1.56&pid=1.7","https://tse3-mm.cn.bing.net/th/id/OIP-C.IkmQMM5cPDACsP_r2Yy2QgHaJi?w=192&h=247&c=7&r=0&o=5&dpr=1.56&pid=1.7","https://tse1-mm.cn.bing.net/th/id/OIP-C.bmsqpcZSCqXux2jSVOXc7AHaNB?w=188&h=331&c=7&r=0&o=5&dpr=1.56&pid=1.7"]

let index = 0;//当前显示图片的下标
let timer = null;//计时器

// 渲染图片
function render(index){
	const item = (<img src={imgUrls[index]} alt="" />);
	root.render(item);
}

// 停止图片的切换
function stop(){
	clearInterval(timer);
}

// 开始切换图片
function start(){
	stop();
	timer = setInterval(()=>{
		index= (index + 1) % imgUrls.length;
		render(index);
	},1000)
}

start();

container.onmouseenter = function(){
	stop();
}

container.onmouseleave =function(){
	start();
}