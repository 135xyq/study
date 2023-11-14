/**
 * 返回一个thunk中间件
 * @param {*} extra 额外参数
 * @returns 一个thunk中间件
 */
export function createThunkMiddleWare(extra){
    return store=>next=>action=>{
        if(typeof action === "function"){
            return action(store.dispatch,store.getState,extra);
        }
        return next(action);
    }
}

const thunk = createThunkMiddleWare();
thunk.withExtraArgument = createThunkMiddleWare;

export default thunk;
