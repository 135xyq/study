import * as userTypes from "../actionType/userType";

export function getAddUserAction(payload){
    return{
        type:userTypes.ADDUSER,
        payload,
    }
}
export function getDeleteUserAction(id){
    return{
        type:userTypes.DELETEUSER,
        payload:id,
    }
}

export function getUpdateUserAction(id,newUser){
    return{
        type:userTypes.UPDATEUSER,
        payload:{
            id,
            newUser
        }
    }
}