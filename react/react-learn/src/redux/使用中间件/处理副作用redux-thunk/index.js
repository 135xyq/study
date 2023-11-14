import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import thunk from "./thunk"

function reducer(state, action) {
	switch (action.type) {
		case "add":
			return state + 1;
		case "del":
			return state - 1;
		default:
			return state;
	}
}

const action = {
    type:"add",
}

function setTimeoutTestAction(dispatch,getState,extra){
    console.log("dispatch",dispatch)
    console.log("getState",getState)
    console.log("extra",extra)
    setTimeout(()=>{
        dispatch(action);//三秒后触发action
    },3000)
}

const store = createStore(reducer, 10, applyMiddleware(thunk, logger));

store.dispatch(setTimeoutTestAction)
