import React, { Component } from "react";

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            fruit:'apple'
        }
    }
    /**
     * 更改文本内容
     */
    onHandleChange = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    onHandleChangeFruit=(e)=>{
        this.setState({
            fruit:e.target.value
        })
    }
    /**
     * 提交表单
     */
	onHandleSubmit = (e) => {
        alert("名字：" + this.state.name + "        水果" + this.state.fruit);
        e.preventDefault();
        this.setState({
            name:'',
            fruit:'apple'
        })
    };
	render() {
		return <form onSubmit={this.onHandleSubmit}>
            <label>
                名字：
                <input type="text" value={this.state.name} onChange={this.onHandleChange} />
            </label>
            <select value={this.state.fruit} onChange={this.onHandleChangeFruit}>
                <option value="apple">apple</option>
                <option value="banana">banana</option>
                <option value="peach">peach</option>
            </select>
            <input type="submit" value="提交" />
        </form>;
	}
}
