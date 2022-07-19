import React, { useState } from "react";

export default function StateHook() {
	const [count, setCount] = useState(0);
    const onHandleAddCount = ()=>{
        setCount(count+1);
    }
	return (
		<div>
			<button onClick={onHandleAddCount}>点击了：{count} 次</button>
		</div>
	);
}
