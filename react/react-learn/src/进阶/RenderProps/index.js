import React, { PureComponent } from "react";
import "./index.css";

export default class RenderProps1 extends PureComponent {
	state = {
		x: 0,
		y: 0,
	};

	pageContainer = React.createRef();

	onHandleMouseMove = (e) => {
		const container = this.pageContainer.current.getBoundingClientRect();
		const x = e.clientX - container.x;
		const y = e.clientY - container.y;
        this.setState({
            x,
            y
        })
	};
	render() {
		return (
			<div
				ref={this.pageContainer}
				className="render-props-container"
				onMouseMove={this.onHandleMouseMove}
			>
				<div
					className="point"
					style={{
						left: this.state.x,
						top: this.state.y,
					}}
				></div>
			</div>
		);
	}
}
