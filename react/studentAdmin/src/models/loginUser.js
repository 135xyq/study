import login from "@/server/login"
export default{
    state:null,
    reducer:{
        setLoginUser(state,{payload}){
            return payload;
        }
    },
    effects:{
        *login(action,{put,call}){
            console.log(action)
            const {loginId,loginPwd} = action.payload;
            const result = yield call(login(loginId,loginPwd));
            console.log(result)
        }
    }
}