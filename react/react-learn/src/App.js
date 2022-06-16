import React, { Component } from "react";
import OldLeftCircle from "./components/OldLeftCircle";

export default class App extends Component {
	constructor() {
        super();
		this.state = {
			n: 1,
		};
	}
    onHandleAdd(){
        this.setState({
            n:this.state.n+1
        })
    }
	render() {
		return <>
        <OldLeftCircle n={this.state.n}></OldLeftCircle>
        <button onClick={this.onHandleAdd.bind(this)
        }>加一</button>
        </>;
	}
}
