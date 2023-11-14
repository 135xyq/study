import React, { Component } from "react";

export default class CheckBox extends Component {
    /**
     * 选中状态改变
     */
    onHandleChange =e=>{
        let newArr = [];
        if(e.target.checked){
            newArr = [...this.props.chooseArr,e.target.value];
        }else{
            newArr = this.props.chooseArr.filter(item=>item!==e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr,this.props.name);
    }
	/**
	 * 获取checkbox结构的数组
	 */
	getCheckBoxArr() {
        console.log(this.props)
		return this.props.data.map((item) => (
			<label key={item.value}>
				<input
					type="checkbox"
					name={this.props.name}
					value={item.value}
					checked={this.props.chooseArr.includes(item.value)}
                    onChange = {this.onHandleChange}
				/>
                {item.text}
			</label>
		));
	}
	render() {
        const bs = this.getCheckBoxArr();
		return <div>
            {bs}
        </div>;
	}
}
