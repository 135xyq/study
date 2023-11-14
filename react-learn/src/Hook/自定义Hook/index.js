import React, { useEffect, useState } from "react";
import useOneTimer from "../../myHooks/useOneTimer";

function Test() {
	const [count, setCount] = useState(0);
	useOneTimer(() => {
		setCount(count=>{
            console.log("开始计时器", count);
            return count+1;
        });
	}, 1000);
    useEffect(()=>{
        document.title = `计时器 ${count}`
    })
	return <p>计数器：{count}</p>;
}

export default function TestMyHook() {
	const [visible, setVisible] = useState(true);

	return (
		<div>
			{visible && <Test />}
			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				显示/隐藏
			</button>
		</div>
	);
}
