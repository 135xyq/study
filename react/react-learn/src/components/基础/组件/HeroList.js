import React, { Component } from "react";
import Hero from "./Hero";

export default class HeroList extends Component {
	render() {
        // 传入一个数组

        const heros = this.props.heros.map(item=><Hero key={item.ename} {...item}></Hero>)
		return <ol>
			{heros}
		</ol>;
	}
}
