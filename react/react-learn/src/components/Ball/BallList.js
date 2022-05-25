import React, { Component } from "react";
import Ball from "./Ball";

function getRandom(min,max){
    return Math.floor((Math.random() * (max - min)+ min));
}


export default class BallList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ballInfos: [],
		};
        let timer = setInterval(()=>{
            const ball = {
                left:getRandom(0,900),
                top:getRandom(0,200),
                xSpeed:getRandom(50,500),
                ySpeed:getRandom(50,300),
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
            }
            this.setState({
                ballInfos:[...this.state.ballInfos,ball]
            })
            if(this.state.ballInfos.length === 50){
                clearInterval(timer);
            }
        },1000)

	}
	render() {
        let ballList = this.state.ballInfos.map((item,i)=>
            <Ball {...item} key={i}></Ball>
        )
		return <React.Fragment>
        {ballList}
        </React.Fragment>;
	}
}
