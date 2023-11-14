import { studentAction } from "../action/student";
import {v4 as uuidv4} from "uuid";

const initStudent = [
	{
		id: uuidv4(),
		name: "谢永强",
	},
	{
		id: uuidv4(),
		name: "张三",
	},
];

export default function student(state = initStudent, { type, payload }) {
	switch (type) {
		case studentAction.addStudent:
			return [...state, payload];
		case studentAction.delStudent:
			return state.filter((item) => item.id !== payload);
		case studentAction.updateStudent:
			return state.map(item=>item.id === payload.id ? payload.newStudent : item);
		default:
			return state;
	}
}
