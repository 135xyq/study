import React, { Component } from "react";

export default class EventHandle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}
    handleSwitch=()=>{
		let result = this.props.onHandleDel(this.state.isOpen)
        this.setState((state,props)=>{
            return{
                isOpen:result
            }
        })
    }
	render() {
		return <button onClick={this.handleSwitch}>{this.state.isOpen ? "ON" : "OFF"}</button>;
	}
}
