import React, { Component } from "react";
import {Provider} from "react-redux"
import Test from "./react-redux";
import store from "./redux/使用中间件/redux-saga"

export default class App extends Component {
	render() {
		return (
			<Provider store={store}><Test></Test></Provider>
		);
	}
}
