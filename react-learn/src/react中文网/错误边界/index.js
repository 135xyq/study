import React, { Component } from "react";

export default class ErrorGround extends Component {
	state = {
		hasError: false,
	};
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:true}
    }
	render() {
		return this.state.hasError ? <div>有错误</div> : <div><ChildComponent></ChildComponent></div>;
	}
}

function ChildComponent(){
    return (<div>{{a:'b'}}</div>)
}
