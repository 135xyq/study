import React, { Component } from "react";
import WithTest  from "./HOC/WithTestHoc";
import HocTestA from "./components/HocTestA";
import HocTestB from "./components/HocTestB";

const TestA = WithTest(HocTestA);
const TestB = WithTest(HocTestB)
export default class App extends Component {
	render() {
		return (
			<>
			<TestA></TestA>
			<TestB></TestB>
			</>
		)
	}
}
