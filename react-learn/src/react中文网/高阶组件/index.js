import React, { Component } from "react";

class One extends Component {
	render() {
		return <div>{this.props.data}</div>;
	}
}

class Two extends Component {
	render() {
		return <div>{this.props.data}</div>;
	}
}

function withHocTest(Comp, val) {
	return class WithHocNumber extends Component {
		constructor(props) {
			super(props);
			this.state = {
				data: val,
			};
		}
		render() {
			return (
				<Comp {...this.props} data={this.state.data}></Comp>
			);
		}
	};
}

const ComOne = withHocTest(One, "组件一");
const ComTwo = withHocTest(Two, "组件二");

export default function UseHocTest(props) {
	return (
		<>
			<ComOne></ComOne>
			<ComTwo></ComTwo>
		</>
	);
}
