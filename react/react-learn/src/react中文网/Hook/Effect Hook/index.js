import React, { useState ,useEffect} from "react";


export default function StateHook() {
	const [count, setCount] = useState(0);
    const [number,setNumber] = useState(0)
    useEffect(()=>{
        let timer = null;
        timer = setInterval(()=>{
            setNumber(number + 1);
        },1000)
        document.title = `计时${number}次`;

        return ()=>{
            clearInterval(timer)
        }
    })
    const onHandleAddCount = ()=>{
        setCount(count+1);
    }
	return (
		<div>
			<button onClick={onHandleAddCount}>点击了：{count} 次</button>
            <p>{number}</p>
		</div>
	);
}
