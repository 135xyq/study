import React, { useState, useEffect } from "react";

export default function EffectHookTest() {
	const [n, setN] = useState(0);
    useEffect(()=>{
        document.title = `计数器  ${n}`
        return ()=>{
            console.log('清理函数：在每次运行副作用函数之前，首次渲染组件不会运行，组件被销毁时一定会运行')
        }
    },[n]);//数组记录该副作用的依赖数据,当该组件重新渲染后，只有依赖数据与上一次不一样时，才会执行副作用
	return (
		<div>
			<span>计数器：</span>
			{n}
			<button
				onClick={() => {
					setN(n + 1);
				}}
			>
				+
			</button>
		</div>
	);
}
