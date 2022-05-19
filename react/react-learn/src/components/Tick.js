import React, { Component } from "react";

// 倒计时组件
export default class Tick extends Component {
	// 初始化组件
	state = {
		lastTime: this.props.number,
	};
	constructor(props) {
		super(props);
		// // 初始化组件
		// this.state = {
		//     lastTime:this.props.number
		// }
		this.timer = setInterval(() => {
			this.setState({
				lastTime:  this.state.lastTime - 1,
			});
            if(this.state.lastTime === 1) {
                clearInterval(this.timer)
            }
		}, 1000);
	}
	render() {
		return <div>倒计时：{this.state.lastTime}</div>;
	}
}