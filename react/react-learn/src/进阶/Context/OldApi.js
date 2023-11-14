import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * 在函数组件使用上下文数据
 * @param {*} props
 * @param {*} context
 * @returns
 */
function CompA(props, context) {
	return (
		<>
			CompA
			<h2>name:{context.name}</h2>
			<h2>age:{context.age}</h2>
            <p>
            <button onClick={()=>{
                context.onChange && context.onChange("age",context.age+1)
            }}>年龄加一</button>
            </p>
		</>
	);
}

CompA.contextTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	onChange: PropTypes.func, //提供后代组件修改上下文数据的函数
};

/**
 * 在类组件终身使用上下文组件
 */
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
				<h2>name:{this.context.name}</h2>
				<h2>age:{this.context.age}</h2>
                <p>
                    <button onClick={()=>{
                        this.context.onChange && this.context.onChange("name","谢永强")
                    }}>修改名字为中文名</button>
                </p>
			</>
		);
	}
}

export default class OldApi extends Component {
	state = {
		name: "xyq",
		age: 21,
	};
	/**
	 *对上下文中的数据类型进行约束
	 *
	 * @static
	 * @memberof OldApi
	 */
	static childContextTypes = {
		name: PropTypes.string,
		age: PropTypes.number,
		onChange: PropTypes.func, //提供后代组件修改上下文数据的函数
	};
	getChildContext() {
		return {
			name: this.state.name,
			age: this.state.age,
			onChange: (key, newData) => {
				this.setState({
					[key]: newData,
				});
			},
		};
	}
	render() {
		return (
			<div>
				<CompB></CompB>
			</div>
		);
	}
}
