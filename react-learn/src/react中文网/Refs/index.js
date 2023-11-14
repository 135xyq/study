import React, { Component } from "react";

export default class index extends Component {
	constructor(props) {
		super(props);
		this.myRef = null;
	}
    componentDidMount(){
        console.log(this.myRef);
        this.myRef.innerHTML = "Ref回调"
    }
	render() {
		return <div ref={element=>this.myRef = element}>index</div>;
	}
}
