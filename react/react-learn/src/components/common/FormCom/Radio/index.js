import React, { Component } from "react";

export default class Radio extends Component {
    /**
     * 选中状态改变
     */
    onHandleChange =e=>{
        this.props.onChange && this.props.onChange(e.target.value,this.props.name);
    }
	/**
	 * 获取单选框的结构的数组
	 */
	getRadioArr() {
		return this.props.data.map((item) => (
			<label key={item.value}>
				<input
					type="radio"
					name={this.props.name}
					value={item.value}
					checked={this.props.chooseValue === item.value}
                    onChange = {this.onHandleChange}
				/>
                {item.text}
			</label>
		));
	}
	render() {
        const bs = this.getRadioArr();
		return <div>
            {bs}
        </div>;
	}
}
