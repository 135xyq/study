import {createStore,applyMiddleware} from "redux";

function reducer(state,action){
    switch (action.type){
        case "add":
            return state + 1;
        case "del":
            return state - 1;
        default:
            return state;
    }
}

/**
 *
 * @param store 最终仓库
 * @returns {function(*): function(*): void}
 */
function middleware1(store){
    console.log("store",store);
    return function(next){
        console.log("next",next);//下一个中间件的dispatch
        return function(action){
            console.log("中间件1")
            console.log("旧数据",store.getState());
            console.log("action",action);
            next(action);
            console.log("新数据",store.getState());
            console.log("")
        }
    }
}

/**
 * 箭头函数
 * @param store
 * @returns {function(*): function(*): void}
 */
const middleware2 = store=>next=>action=>{
        console.log("中间件2")
        console.log("旧数据",store.getState());
        console.log("action",action);
        next(action);
        console.log("新数据",store.getState());
        console.log("")
}

// const store = createStore(reducer,10,applyMiddleware(middleware1,middleware2));

const store = applyMiddleware(middleware1,middleware2)(createStore)(reducer,10);
store.dispatch({
    type:"add"
})
