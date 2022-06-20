import React, { Component } from "react";

export default function WithTest(Comp) {
	class WithTest extends Component {
		render() {
			const { forwardRef, ...rest } = this.props;
			return <Comp ref={forwardRef} {...rest}></Comp>;
		}
	}

	return React.forwardRef((props,ref)=>{
        return <WithTest {...props} forwardRef={ref}></WithTest>
    })
}
