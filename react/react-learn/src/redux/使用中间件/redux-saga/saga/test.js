import { delay, put, take, takeEvery, } from "redux-saga/effects"
import { numberActionTypes ,decrease} from "../action/number"

function* testTakeEvery(){
    yield delay(3000)
    console.log("延时3秒输出")
    yield put(decrease());//触发action
}

export default function* test() {
    yield takeEvery(numberActionTypes.increase,testTakeEvery)
    let action2 = yield take(numberActionTypes.decrease);
    console.log("decrease",action2)
    let action3 = yield take(numberActionTypes.increase);
    console.log("increase",action3)
}