import React, { Component } from "react";
import {Provider} from "react-redux"
import Test from "./路由/学生管理系统"
import {Route} from "react-router-dom"
import store ,{history} from "./redux/使用中间件/redux-saga"
import {BrowserRouter as Router} from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router'

console.log(history,Test)
export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Test></Test>
				</ConnectedRouter>
			</Provider>
		);
	}
}
