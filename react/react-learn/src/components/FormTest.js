import React, { Component } from "react";

export default class FormTest extends Component {
	state = {
		loginId: "",
		loginPwd: "",
		sex: "male",
		place: "hunan",
		loveOptions: [
			{
				text: "足球",
				value: "足球",
			},
			{
				text: "篮球",
				value: "篮球",
			},
			{
				text: "唱歌",
				value: "唱歌",
			},
			{
				text: "睡觉",
				value: "睡觉",
			},
			{
				text: "其他",
				value: "其他",
			},
		],
        loves:["足球"]
	};
    // 处理数据变化
	onHandleChange = (e) => {
		let val = e.target.value;
		let name = e.target.name;
        if(e.target.type === "checkbox"){
            if(e.target.checked){
                val = [...this.state.loves,val]
            }else{
                val = this.state.loves.filter(item=>item!==val);
            }
        }
		this.setState({ 
			[name]: val,
		});
	};
    /**
     * 获取所有的爱好
     */
    getAllLoves(){
        return this.state.loveOptions.map(item=>(
            <label key={item.value}>
                <input type="checkbox" name="loves" value={item.value} checked={
                    this.state.loves.includes(item.value)
                } onChange={this.onHandleChange}/>
                {item.text}
            </label>
        ))
    }
	render() {
        const bs = this.getAllLoves();
		return (
			<div>
				<p>
					<label>
						用户名：
						<input
							type="text"
							name="loginId"
							value={this.state.loginId}
							onChange={this.onHandleChange}
						/>
					</label>
				</p>
				<p>
					<label>
						密码：
						<input
							type="password"
							name="loginPwd"
							value={this.state.loginPwd}
							onChange={this.onHandleChange}
						/>
					</label>
				</p>
				<p>
					<label>
						<input
							type="radio"
							name="sex"
							value="male"
							checked={this.state.sex === "male"}
							onChange={this.onHandleChange}
						/>
						男
					</label>
					<label>
						<input
							type="radio"
							name="sex"
							value="female"
							checked={this.state.sex === "female"}
							onChange={this.onHandleChange}
						/>
						女
					</label>
				</p>
				<p>
					<select
						name="place"
						value={this.state.place}
						onChange={this.onHandleChange}
					>
						<option value="henan">河南</option>
						<option value="hunan">湖南</option>
						<option value="hubei">湖北</option>
					</select>
				</p>
                <p>
            {bs}
                </p>
				<p>
					<button
						onClick={() => {
							console.log(this.state);
						}}
					>
						获取数据
					</button>
				</p>
			</div>
		);
	}
}
