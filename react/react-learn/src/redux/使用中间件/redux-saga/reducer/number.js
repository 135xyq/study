import { numberActionTypes } from "../action/number";

export default function number(state = 10, { type, payload }) {
	switch (type) {
		case numberActionTypes.increase:
			return state + 1;
		case numberActionTypes.decrease:
			return state - 1;
		default:
			return state;
	}
}
