import store from "../index"

import { increase,decrease } from "../action/number"

store.dispatch(increase())
store.dispatch(increase())
console.log(store.getState())
store.dispatch(increase())
store.dispatch(decrease())
console.log(store.getState())