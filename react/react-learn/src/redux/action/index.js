import {createStore,bindActionCreators} from "redux";
import * as createActions from "./actionCreate";
import * as actionTypes from "./actionTypes";

/**
 * reducer本质上就是一个普通的函数
 * @param state 之前仓库中的数据
 * @param action 描述要做什么的对象
 */
function reducer(state,action){
    // 返回一个新的状态
    if(action.type === actionTypes.INCRESE){
        return state + 1;
    }else if (action.type === actionTypes.DECREASE){
        return state - 1;
    }else if(action.type === actionTypes.SET){
        return action.payload;
    } else{
        return state;
    }
}

const store = createStore(reducer,10);
const boundActions = bindActionCreators(createActions,store.dispatch);
console.log(store.getState()); //10

boundActions.getDecreaseAction()

console.log(store.getState());//9

boundActions.getIncreaseAction();

console.log(store.getState());//10

boundActions.getSetAction(3);

console.log(store.getState());//3
