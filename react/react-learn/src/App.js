import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import QuickStart from "./React Router官网/Quick Start"

export default class App extends Component {
	render() {
		return (
			<BrowserRouter >
				<QuickStart></QuickStart>
			</BrowserRouter>
		);
	}
}
