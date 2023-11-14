import React, {useState} from "react";

export default function StateHookTest() {
	const [data, setData] = useState({count:0,visible:true});
	return <>
		<div style={{
			display:data.visible?"block":"none"
		}}>
			<button onClick={()=>{
				setData({
                    ...data,
                    count:data.count-1
                })
			}}>-</button>
			<span>{data.count}</span>
			<button onClick={()=>{
				setData({
                    ...data,
                    count:data.count+1
                })
			}}>+</button>
		</div>
		<p>
			<button onClick={()=>{
				setData({
                    ...data,
                    visible:!data.visible
                })
			}}>切换显示/隐藏</button>
		</p>
	</>;
}
