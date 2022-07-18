import React, { Component } from "react";

export default class EventHandle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}
    handleSwitch=()=>{
        this.setState((state,props)=>{
            return{
                isOpen:!state.isOpen
            }
        })
    }
	render() {
		return <button onClick={this.handleSwitch}>{this.state.isOpen ? "ON" : "OFF"}</button>;
	}
}
