export const numberActionTypes = {
    increase:Symbol("increase"),
    decrease:Symbol("decrease")
}

export function increase(){
    return{
        type:numberActionTypes.increase
    }
}

export function decrease(){
    return{
        type:numberActionTypes.decrease
    }
}