import React, { Component } from "react";
import "./Ball.css";

export default class Ball extends Component {
	constructor(props) {
		super(props);
		this.state = {
			left: props.left || 100, //小球的横坐标
			top: props.top || 100, //小球的纵坐标
			xSpeed: props.xSpeed || 200, //小球的横向速度
			ySpeed: props.ySpeed || 100, //小球的纵向速度
		};

        const duration = 16;//每个16毫秒变动一下位置

        setInterval(()=>{
            const xDistance =  this.state.xSpeed * duration / 1000;
            const yDistance =  this.state.ySpeed * duration / 1000;
            let newTop = this.state.top + yDistance;
            let newLeft = this.state.left + xDistance;
            if(newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed:-this.state.ySpeed,
                })
            }else if(newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed:-this.state.ySpeed
                })
            }
            if(newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed:-this.state.xSpeed,
                })
            }else if(newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed:-this.state.xSpeed
                })
            }
            this.setState({
                left:newLeft,
                top:newTop
            })
        },duration)
	}
	render() {
		return <div className="ball" style={{
            left:this.state.left + "px",
            top:this.state.top + "px",
            background:this.props.bg
        }}></div>;
	}
}
