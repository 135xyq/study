import React, { Component } from "react";
import types from "../../../../utils/commonTypes";
import PropTypes from "prop-types";
import WithFormComRender from "../HOC/WithFormComRender";

class CheckBox extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        onChange:PropTypes.func,
        info:types.data,
        chooseData:types.chooseData.isRequired
    }
	/**
	 * 选中状态改变
	 */
	onHandleChange = (e) => {
		let newArr = [];
		if (e.target.checked) {
			newArr = [...this.props.chooseData, e.target.value];
		} else {
			newArr = this.props.chooseData.filter(
				(item) => item !== e.target.value
			);
		}
		this.props.onChange && this.props.onChange(newArr, this.props.name);
	};
	render() {
		return (
			<label key={this.props.info.value}>
				<input
					type="checkbox"
					name={this.props.name}
					value={this.props.info.value}
					checked={this.props.chooseData.includes(this.props.info.value)}
					onChange={this.onHandleChange}
				/>
				{this.props.info.text}
			</label>
		);
	}
}
export default WithFormComRender(CheckBox);