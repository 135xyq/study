import React, { Component } from "react";
import types from "../../../../utils/commonTypes";

export default function WithFormComRender(Comp) {
	return class WithFormComRenderWrap extends Component {
		static defaultProps = {
			data: [],
		};

		static propTypes = {
			data: types.datas,
		};

		render() {
			const bs = this.props.data.map((item) => (
				<Comp key={item.value} info={item} {...this.props}></Comp>
			));
			return <>{bs}</>;
		}
	};
}
