import {combineReducers} from "redux"
import number from "./number"
import student from "./student"
import { connectRouter } from 'connected-react-router'



const  reducer =  (history) => combineReducers({
    number,
    student,
    router:connectRouter(history)
})

export default reducer;