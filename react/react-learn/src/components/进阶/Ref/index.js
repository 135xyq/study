import React, { Component } from "react";

export default class Ref extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef()
    }
    onHandleClick = ()=>{
        // 读取input的输入值
        console.log(this.input.value)
    }

    getRef = (el)=>{
        this.input = el
    }
	render() {
		return (
			<>
				<input ref={this.getRef} type="text" />
                <button onClick={this.onHandleClick}>获取input的值</button>
			</>
		);
	}
}
