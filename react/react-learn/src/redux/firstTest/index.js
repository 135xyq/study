import {createStore} from "redux";

/**
 * reducer本质上就是一个普通的函数
 * @param state 之前仓库中的数据
 * @param action 描述要做什么的对象
 */
function reducer(state,action){
    // 返回一个新的状态
    if(action.type === "increase"){
        return state + 1;
    }else if (action.type === "decrease"){
        return state - 1;
    }else{
        return state;
    }
}

const store = createStore(reducer,10);

console.log(store.getState());

store.dispatch({type:"increase"});

console.log(store.getState());
store.dispatch({type:"increase"});

console.log(store.getState());
store.dispatch({type:"increase"});

console.log(store.getState());
