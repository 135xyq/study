import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class Portals extends Component {
    constructor(props){
        super(props);
        this.el = document.createElement("div");
    }
    componentDidMount(){
        document.getElementById("test").appendChild(this.el)
    }
	render() {
		return this.el ? ReactDOM.createPortal(
			<div>测试Portals</div>,
			this.el
		):<div>无内容</div>
	}
}
