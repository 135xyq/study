import  {createActions,handleActions} from "redux-actions"

export const {add,del,set} = createActions({
    "ADD":null,
    "DEL":null,
    "SET":number=>number
})


export default handleActions({
    [add]:state=>state+1,
    [del]:state=>state-1,
    [set]:(state,{payload})=>payload
},10)