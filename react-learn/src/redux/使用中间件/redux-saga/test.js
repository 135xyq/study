import store from "./index"

import { increase, decrease, } from "./action/number"

window.increase = function(){
    store.dispatch(increase());
}

window.decrease = function(){
    store.dispatch(decrease());
}
