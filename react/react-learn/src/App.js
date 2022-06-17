import React, { Component } from "react";
import PropTypeUse from "./components/PropTypeUse";
export default class App extends Component {
	render() {
		return <PropTypeUse a="1" b={1} c d={[1, 2, <h1></h1>]} e={{
			name:"xyq",
			age:21,
			sex:"女"
		}}></PropTypeUse>;
	}
}
