import React, { Component } from "react";
import "./index.css";

export default class Modal extends Component {
	constructor(props) {
        super(props);
        this.selfData = {
            bg:"rgba(0,0,0,0.5)",
        }
        this.finalData = Object.assign({},this.selfData,this.props);
    }

	render() {
		return (
			<div className="modal-container" style={{
                backgroundColor:this.finalData.bg
            }} onClick={(e)=>{
                if(e.target.className === "modal-container"){
                    this.finalData.onClose();
                }
            }}>
				<div className="modal-content">{this.finalData.children}</div>
			</div>
		);
	}
}
