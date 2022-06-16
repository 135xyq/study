import React, { Component } from "react";
import Modal from ".";

export default class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
		};
	}
	// 打开蒙层
	onOpenModal() {
		this.setState({
			showModal: true,
		});
	}
	// 关闭蒙层
	onCloseModal() {
		this.setState({
			showModal: false,
		});
	}
	render() {
		return (
			<>
				<img
					src="https://cy-pic.kuaizhan.com/topic_picture_4?cysign=cffc02c4375cc0a48aed236f2218647d&cyt=1655382005"
					alt=""
				/>
				{this.state.showModal ? (
					<Modal onClose={this.onCloseModal.bind(this)}>
						<h1
							style={{
								background: "#fff",
								width: "300px",
								height: "200px",
								textAlign: "center",
							}}
						>
							测试蒙层
							<button onClick={this.onCloseModal.bind(this)}>
							关闭蒙层
						</button>
						</h1>

					</Modal>
				) : null}
				<button onClick={this.onOpenModal.bind(this)}>打开蒙层</button>
			</>
		);
	}
}
