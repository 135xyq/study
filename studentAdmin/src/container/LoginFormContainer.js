import LoginForm from "@/components/LoginForm";
// import {connect} from "dva";

const mapDispatchToProps = dispatch=>({
    async onLogin(loginId,loginPwd){
        const result = await dispatch({type:"loginUser/login",payload:{loginId,loginPwd}})
        console.log(result)
    }
})

// export default connect(null,mapDispatchToProps)(LoginForm)
export default LoginForm