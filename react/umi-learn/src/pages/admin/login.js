import React,{useRef,useEffect} from 'react';
import {useNavigate } from "umi";
import "./login.css"
import style from "./login.css"

console.log(style)

function Login(props) {
    const loginId = useRef();
    const loginPwd = useRef();
    const navigate = useNavigate ();
    function  onHandleLogin(){
        if(loginPwd.current.value === "123456"){
            localStorage.setItem("umiLoginId",loginId.current.value);
            navigate("/welcome")
        }else{
            alert("密码 / 账号错误！")
        }
    }

    return (
        <div className='container'>
            <p className={style.username}>
                用户名：<input type="text" ref={loginId} />
            </p>
            <p>
                密码：<input type="password" ref={loginPwd}/>
            </p>
            <p>
                <button onClick={onHandleLogin}>登录</button>
            </p>
        </div>
    );
}

export default Login;