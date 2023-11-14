import store from "./index"
import {add} from "./count"

console.log(add())
store.dispatch(add())