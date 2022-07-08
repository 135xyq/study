import {createStore} from "redux";
import reducer from "./reducer"
import {getAddUserAction} from "./action/getUserAction";

const store = createStore(reducer)

console.log(store.getState());

store.dispatch(getAddUserAction({
    id:3,
    name:"xyq",
    age:21
}))

console.log(store.getState());