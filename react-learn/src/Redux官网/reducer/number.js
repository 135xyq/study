import { actionTypes } from "../action/number";
const initialState = 0;
export default function reducer(state = initialState,{type}){
    switch(type){
        case actionTypes.INCREASE:
            return state + 1;
        case actionTypes.DECREASE:
            return state - 1;
        default:
            return state;
    }
}