import React, { Component } from "react";
import PropTypes from "prop-types";
export default class PropTypeUse extends Component {
	static propTypes = {
		a: PropTypes.string,//必须是字符串
    b:PropTypes.number.isRequired,//必须是数字，且为必填属性
    c:PropTypes.bool,//必须是boolean值
    d:PropTypes.node.isRequired,//必须是可以被渲染的内容
    e:PropTypes.shape({
      name:PropTypes.string,//必须是字符串
      age:PropTypes.number,//必须是数字
      sex:PropTypes.oneOf(["男","女"]),//必须是男或女
    })
	};
	render() {
		return <div>{this.props.a}</div>;
	}
}
