import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class SwitchDots extends Component {
	static propTypes = {
		total: PropTypes.number.isRequired, //圆点的个数
		currentIndex: PropTypes.number.isRequired, //当前选中的
		onChange: PropTypes.func, //圆点切换函数
	};
	render() {
		const dots = [];
		for (let i = 0; i < this.props.total; i++) {
			dots.push(
				<span
					key={i}
					className={
						this.props.currentIndex === i
							? "active switch-dot-item"
							: "switch-dot-item"
					}
                    onClick = {()=>{
                        this.props.onChange && this.props.onChange(i)
                    }}
				></span>
			);
		}
		return <div className="switch-dots-container">{dots}</div>;
	}
}
