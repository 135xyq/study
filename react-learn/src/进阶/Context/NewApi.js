import React, { Component } from "react";
import PropTypes from "prop-types";

const ctx = React.createContext();

function CompA(props) {
	return (
		<ctx.Consumer>
			{(value) => (
				<>
					CompA
					<h2>name:{value.name}</h2>
					<h2>age:{value.age}</h2>
					<p>
						<button
							onClick={() => {
								value.onChange &&
									value.onChange("age", value.age + 1);
							}}
						>
							年龄加一
						</button>
					</p>
				</>
			)}
		</ctx.Consumer>
	);
}

class CompB extends Component {
	static contextTypes = {
		name: PropTypes.string,
		age: PropTypes.number,
		onChange: PropTypes.func, //提供后代组件修改上下文数据的函数
	};
	render() {
		return (
			<>
				<CompA></CompA>
				CompB
			</>
		);
	}
}

export default class NewApi extends Component {
	state = {
		name: "xyq",
		age: 21,
		onChange: (key, newData) => {
			this.setState({
				[key]: newData,
			});
		}, //提供后代组件修改上下文数据的函数
	};
	render() {
		const Provider = ctx.Provider;
		return (
			<Provider value={this.state}>
				<CompB></CompB>
			</Provider>
		);
	}
}
