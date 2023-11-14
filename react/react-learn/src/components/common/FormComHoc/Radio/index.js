import React, { Component } from "react";
import PropTypes from "prop-types";
import types from "../../../../utils/commonTypes";
import WithFormComRender from "../HOC/WithFormComRender";

class Radio extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		info: types.data.isRequired,
		onChange: PropTypes.func,
		chooseValue: PropTypes.string,
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
			<>
				<label key={this.props.info.value}>
					<input
						type="radio"
						name={this.props.name}
						value={this.props.info.value}
						checked={
							this.props.chooseValue === this.props.info.value
						}
						onChange={this.onHandleChange}
					/>
					{this.props.info.text}
				</label>
			</>
		);
	}
}

export default WithFormComRender(Radio)
