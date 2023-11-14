import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";

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


const store = createStore(reducer,10,applyMiddleware(logger));

store.dispatch({
    type:"add"
})


store.dispatch({
    type:"del"
})

store.dispatch({
    type:"add"
})