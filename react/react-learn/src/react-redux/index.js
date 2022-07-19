import { connect } from "react-redux";
import React from "react";
import store from "../redux/使用中间件/redux-saga";
import {
	increase,
	decrease,
} from "../redux/使用中间件/redux-saga/action/number";

console.log(store.getState());

function Number(props) {
	return (
		<>
			<p>{props.number}</p>
			<button onClick={props.onIncrease}>-</button>
			<button onClick={props.onDecrease}>+</button>
		</>
	);
}

function mapStateToProps(state) {
	return {
		number: state.number,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrease() {
			dispatch(increase());
		},
		onDecrease() {
			dispatch(decrease());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Number);
