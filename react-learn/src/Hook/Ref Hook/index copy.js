import React, { useRef} from "react";

export default function RefHookTest() {
    const inputRef = useRef();
	return <div>
        <input ref={inputRef} type="text" />
        <button onClick={()=>{
            console.log(inputRef.current.value)
        }}>获取input数据</button>
    </div>;
}
