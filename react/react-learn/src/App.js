import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Test from "./路由/学生管理系统/index";
import "./redux/firstTest/index"

export default class App extends Component {
	render() {
		return (
			<Router>
				<Test />
			</Router>
		);
	}
}
