import {createStore} from "redux";
import reducer from "./reducer"
import {getAddUserAction} from "./action/getUserAction";
import {getLogoutAction,getLoginAction} from "./action/getLoginAction";

const store = createStore(reducer)

console.log(store.getState());

store.dispatch(getAddUserAction({
    id:3,
    name:"xyq",
    age:21
}))

console.log(store.getState());

store.dispatch(getLoginAction({
    username:"xyq",
    password:"123456"
}))

console.log(store.getState());

store.dispatch(getLogoutAction());

console.log(store.getState())