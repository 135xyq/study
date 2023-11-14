import React, { PureComponent } from "react";
// import RenderProps1 from '.'
// import RenderProps2 from './index copy'
import RenderProps from "./RenderProps";
import "./index.css"

export default class Test extends PureComponent {
    show1 = data =>{
        return <div
        className="point"
        style={{
            left: data.x,
            top: data.y,
        }}
    ></div>
    }
    show2 = data =>{
        return <>
        				<p>横坐标：{data.x}</p>
				<p>纵坐标：{data.y}</p></>
    }
	render() {
		return (
			<React.Fragment>
				<RenderProps render={this.show1}></RenderProps>
                <br />
				<RenderProps render={this.show2}></RenderProps>
			</React.Fragment>
		);
	}
}
