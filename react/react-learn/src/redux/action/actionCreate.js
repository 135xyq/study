import * as actionTYpes from "./actionTypes";

/**
 * increase action的创建函数
 * @returns {{type: symbol}}
 */
export function getIncreaseAction(){
    return {
        type:actionTYpes.INCRESE,
    }
}

/**
 * decrease action的创建函数
 * @returns {{type: *}}
 */
export function getDecreaseAction(){
    return{
        type:actionTYpes.DECREASE,
    }
}

/**
 * set action 的创建函数
 * @param newNumber
 * @returns {{payload, type: *}}
 */
export function getSetAction(newNumber){
    return{
        type:actionTYpes.SET,
        payload:newNumber
    }
}