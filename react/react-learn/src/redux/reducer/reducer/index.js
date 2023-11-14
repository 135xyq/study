import {combineReducers} from "redux";
import user from "./users";
import login from "./login"

export default combineReducers({
    user,
    login
})