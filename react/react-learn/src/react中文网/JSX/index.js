//测试原生创建元素
import { createElement } from "react";

export default function Jsx() {
	const div = createElement(
		"div",
		{
			style: {
				color: "#fff",
				backgroundColor: "green",
			},
		},
        4,
        createElement(
            "p",
            {
                style:{
                    color:"red"
                }
            },
            '你好'
        )
	);
	return div;
}
