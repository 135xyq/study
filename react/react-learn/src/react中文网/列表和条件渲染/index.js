import React, { Component } from "react";

export default class ListAndCondition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			currentIndex: 3,
		};
	}
	render() {
        const lis = this.state.list.map(item=><li key={item} style={this.state.currentIndex === item ? {
            color:"red"
        }:{}}>{item}</li>);
		return <>
        <ul>{lis}</ul>
        <div>{Math.random() > 0.5 && '随机数大于0.5'}</div>
        </>;
	}
}
