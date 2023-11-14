import React, { Component } from "react";
import Radio from "./index";

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
            chooseValue: "",
        };
    }
	render() {
		return (
			<>
				<Radio
					data={this.state.data}
					chooseValue={this.state.chooseValue}
					name="loves"
					onChange={(newValue) => {
						this.setState({
							chooseValue: newValue,
						});
					}}
				>
					Test
				</Radio>
			</>
		);
	}
}
