import React from "react";

import { Route, Routes } from "react-router-dom";

function CompA() {
	return <h1>组件A</h1>;
}
function CompB() {
	return <h1>组件B</h1>;
}
function CompC() {
	return <h1>组件C</h1>;
}
function CompD() {
	return <h1>首页</h1>;
}
function CompE() {
	return <h1>404</h1>;
}

export default function TestStaticRouterComp() {
	return (
		<Routes>
			<Route path="/a" caseSensitive element={<CompA />}></Route>
			<Route path="/a/b" element={<CompB />}></Route>
			<Route path="/c" element={<CompC />}></Route>
			<Route path="/" element={<CompD />}></Route>
			<Route path="*" element={<CompE />}></Route>
		</Routes>
	);
}
