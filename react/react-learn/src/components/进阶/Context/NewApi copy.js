import React, { Component } from "react";
import PropTypes from "prop-types";

const ctx = React.createContext();


class CompA extends Component {
    static contextType = ctx;
	render(){
        return (
            <>
                CompA
                <h2>name:{this.context.name}</h2>
                <h2>age:{this.context.age}</h2>
                <p>
                <button onClick={()=>{
                    this.context.onChange && this.context.onChange("age",this.context.age+1)
                }}>年龄加一</button>
                </p>
            </>
        );
    }
}


/**
 * 在类组件上使用上下文组件
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
        },//提供后代组件修改上下文数据的函数
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
