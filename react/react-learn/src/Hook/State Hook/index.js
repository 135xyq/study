import React, {useState} from "react";

export default function StateHookTest() {
	const [count, setCount] = useState(0);
	const [visible, setVisible] = useState(true)
	return <>
		<div style={{
			display:visible?"block":"none"
		}}>
			<button onClick={()=>{
                // 异步的，多个状态会合并，应该使用回调函数
				setCount(count=>count-1)
				setCount(count=>count-1)
			}}>-</button>
			<span>{count}</span>
			<button onClick={()=>{
				setCount(count=>count+1)
				setCount(count=>count+1)
			}}>+</button>
		</div>
		<p>
			<button onClick={()=>{
				setVisible(!visible)
			}}>切换显示/隐藏</button>
		</p>
	</>;
}
