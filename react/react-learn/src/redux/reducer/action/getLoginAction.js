import * as loginTypes from "../actionType/loginType";

export function getLoginAction(usetInfo){
    return{
        type:loginTypes.LOGIN,
        payload:usetInfo
    }
}

export function getLogoutAction(){
    return{
        type:loginTypes.LOGOUT,
    }
}