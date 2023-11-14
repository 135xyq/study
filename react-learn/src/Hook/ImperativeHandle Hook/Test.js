import React, { useRef } from "react";
import ImperativeHandleHookTest from "./index";

export default function Test() {
	const componentRef = useRef();
	return (
		<div>
			<ImperativeHandleHookTest ref={componentRef} />
			<button onClick={() => {componentRef.current.method()}}>
				调用ImperativeHandleHookTest里面的一个method方法
			</button>
		</div>
	);
}
