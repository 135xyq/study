import React, { Component } from "react";
import Select from "./index";

export default class Test extends Component {
	constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: "足球",
                    value: "足球",
                },
                {
                    text: "篮球",
                    value: "篮球",
                },
                {
                    text: "排球",
                    value: "排球",
                },
            ],
            SelectValue: "",
        };
    }
	render() {
		return (
			<>
				<Select
					data={this.state.data}
					SelectValue={this.state.SelectValue}
					name="loves"
					onChange={(newValue) => {
						this.setState({
							SelectValue: newValue,
						});
					}}
				>
				</Select>
			</>
		);
	}
}
