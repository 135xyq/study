import React ,{useContext} from 'react'

const ctx = React.createContext();

function Test(){
	const value =useContext(ctx);
	return <p>
		上下文数据为：{value}
	</p>
}
export default function ContextHookTest() {
	return (
	  <div>
		<ctx.Provider value="xyq">
			<Test />
		</ctx.Provider>
	  </div>
	)
}
