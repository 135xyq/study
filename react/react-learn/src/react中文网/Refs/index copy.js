import React, { Component } from "react";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
    componentDidMount(){
        console.log(this.myRef.current);
        this.myRef.current.innerHTML = "你好"
    }
	render() {
		return <div ref={this.myRef}>index</div>;
	}
}
