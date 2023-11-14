import React from "react";
import "./index.css";

export default function ThreeLayout(props) {
	const defaultData = {
        leftWidth:200,//左边的苦读
        rightWidth:200,//右边的宽度
        minWidth:800,//最小宽度
        gcp:0,//每个布局的间隙
    };
    const data = Object.assign({},defaultData,props);
	return (
		<div className="three-layout-container" style={{
            minWidth:data.minWidth
        }}>
			<div className="main">{data.children}</div>
			<div className="left-aside" style={{
                width:data.leftWidth,
                marginRight:data.gcp
            }}>{data.left}</div>
			<div className="right-aside" style={{
                width:data.rightWidth,
                marginLeft:data.gcp
            }}>{data.right}</div>
		</div>
	);
}
