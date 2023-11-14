import React, { Component } from "react";

export default class Event extends Component {
	state = {
		input: "",
	};
	onHandleChange = (e) => {
		this.setState({
			input: e.target.value,
		});
	};
	onHandleCopy = (e) => {
		console.log(e);
	};
    onHandleContextMenu = (e)=>{
        console.log(e)
    }
	render() {
		return (
			<div>
				<p>
					<input
						type="text"
						value={this.state.input}
						onChange={this.onHandleChange}
					/>
				</p>
				<div onCopy={this.onHandleCopy}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Impedit, blanditiis. Soluta beatae cupiditate perferendis
					fuga debitis ullam magnam quasi ad unde! Maiores enim nam
					voluptates nemo nesciunt repellendus quasi iste?
				</div>
                <div onContextMenu ={this.onHandleContextMenu }>a</div>
			</div>
		);
	}
}
