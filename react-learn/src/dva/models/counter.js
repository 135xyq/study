export default {
    namespace:"count",
    state:1,
    reducers:{
        increase(state){
            return state + 1;
        },
        decrease(state){
            return state - 1;
        }
    },
    effects:{
        *asyncIncrease(action,{call,put}){
            yield call(delay,1000)
            yield put({
                type:"increase"
            })
        },
        *asyncDecrease(action,{call,put}){
            yield call(delay,1000)
            yield put({
                type:"decrease"
            })
        }
    }
}

function delay(duration){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },duration)
    })
}