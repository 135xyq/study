import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TestPropTypes extends Component {
	render() {
		return (
			<div>
				<Child name="xyq"></Child>
			</div>
		);
	}
}

function Child(props) {
	return (
		<div>
			<div>name: {props.name}</div>
			<div>age: {props.age}</div>
		</div>
	);
}

Child.defaultProps = {
	name: "谢永强",
	age: 21,
};

Child.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number,
};
