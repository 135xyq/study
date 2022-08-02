import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import Installation from "./React Router官网/Installation"

export default class App extends Component {
	render() {
		return (
			<BrowserRouter >
				<Installation></Installation>
			</BrowserRouter>
		);
	}
}
