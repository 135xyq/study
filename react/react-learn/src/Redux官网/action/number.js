export const actionTypes ={
    INCREASE:"number/increase",
    DECREASE:"number/decrease"
}

export function increase(){
    return{
        type:actionTypes.INCREASE
    }
}

export function decrease(){
    return{
        type:actionTypes.DECREASE
    }
}