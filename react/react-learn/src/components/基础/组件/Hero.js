import React from "react";

export default function Hero(props) {
	//传入一个数组
	return <li>
        姓名：{props.cname},
        别名：{props.title},
        皮肤名:{props.skin_name}
    </li>;
}
