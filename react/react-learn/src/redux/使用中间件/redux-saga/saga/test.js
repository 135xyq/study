import { take } from "redux-saga/effects"
import { numberActionTypes } from "../action/number"



export default function* test() {
    let action1 = yield take(numberActionTypes.increase);
    console.log("increase",action1)
    let action2 = yield take(numberActionTypes.decrease);
    console.log("increase",action2)

}