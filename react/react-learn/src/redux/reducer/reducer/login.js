import * as loginTypes from "../actionType/loginType";

export default function(state={},{type,payload}){
    switch (type){
        case loginTypes.LOGIN:
            return payload;
        case loginTypes.LOGOUT:
            return {};
        default:
            return state;
    }
}