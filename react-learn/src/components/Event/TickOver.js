import React, { Component } from "react";
import Tick from "./Tick";

export default class TickOver extends Component {
	state = {
		isOver: false,
	};
    handleOver = ()=>{
        this.setState({
            isOver:true
        })
    }

	render() {
        let content = "正在倒计时";
        if(this.state.isOver){
            content = "倒计时结束了"
        }
		return <div>
            <Tick number={5} onOver={this.handleOver}></Tick>
            <h2>{content}</h2>
        </div>;
	}
}
