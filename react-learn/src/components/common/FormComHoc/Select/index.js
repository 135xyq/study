import React, { Component } from "react";
import PropTypes from "prop-types";
import types from "../../../../utils/commonTypes";
import WithFormComRender from "../HOC/WithFormComRender";

class SelectPear extends Component {
	static propTypes = {
		info: types.data,
	};

	render() {
		return (
			<option value={this.props.info.value}>
				{this.props.info.text}
			</option>
		);
	}
}

const SelectGroup = WithFormComRender(SelectPear);

export default class Select extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		SelectValue: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	};
	/**
	 * 选中状态改变
	 */
	onHandleChange = (e) => {
		this.props.onChange &&
			this.props.onChange(e.target.value, this.props.name);
	};

	render() {
		return (
			<select
				name={this.props.name}
				value={this.props.SelectValue}
				onChange={this.onHandleChange}
			>
				<SelectGroup {...this.props}></SelectGroup>
			</select>
		);
	}
}

