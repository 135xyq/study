import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import TestStaticRouterComp from "./路由/基础路由组件/index"


export default class App extends Component {
  render() {
	return (
		<Router>
		<TestStaticRouterComp/>
		</Router>
	)
  }
}
