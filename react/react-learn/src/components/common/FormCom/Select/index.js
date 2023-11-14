import React, { Component } from "react";

export default class Select extends Component {
	/**
	 * 选中状态改变
	 */
	onHandleChange = (e) => {
		this.props.onChange &&
			this.props.onChange(e.target.value, this.props.name);
	};
	/**
	 * 获取单选框的结构的数组
	 */
	getSelectArr() {
		return (
			<select name={this.props.name} value={this.props.value} onChange={this.onHandleChange}>
				{this.props.data.map((item) => (
					<option key={item.value} value={item.value}>{item.text}</option>
				))}
			</select>
		);
	}
	render() {
		const bs = this.getSelectArr();
		return <div>{bs}</div>;
	}
}
