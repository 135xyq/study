import React, { Component } from "react";
import CheckBox from "./index";

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
            chooseArr: [],
        };
    }
	render() {
		return (
			<>
				<CheckBox
					data={this.state.data}
					chooseArr={this.state.chooseArr}
					name="loves"
					onChange={(newArr) => {
						this.setState({
							chooseArr: newArr,
						});
					}}
				>
					Test
				</CheckBox>
			</>
		);
	}
}
