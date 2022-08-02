import React, { Component } from "react";
import {HashRouter} from "react-router-dom";
import QuickStart from "./React Router官网/Routers/BrowerRouter"

export default class App extends Component {
	render() {
		return (
			<HashRouter >
				<QuickStart></QuickStart>
			</HashRouter>
		);
	}
}
