function isPlainObject(obj){
    if(typeof obj !== "object"){
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}

/**
 * createStore函数
 * @param reducer
 * @param defaultState
 */
export default function(reducer,defaultState){
    let currentReducer = reducer;
    let currentState = defaultState;
    let listeners = [];
    function dispatch(action){
        if(!isPlainObject(action)){
            throw new Error("action must is a plain object!");
        }
        if(action.type === undefined){
            throw new Error("type is required!");
        }
        currentState = currentReducer(currentState,action);
        //运行所有的订阅者（监听器）
        for (const listener of listeners) {
            listener();
        }
    }

    function getState(){
        return currentState;
    }


    function subscribe(listener){
        listeners.push(listener);
        return function (){
            const index = listeners.indexOf(listener);
            if(index !== -1){
                listeners.splice(index,1);
            }
        }
    }

    dispatch({
        type:"@@redux/INITq.w.1.1.1.e"
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}