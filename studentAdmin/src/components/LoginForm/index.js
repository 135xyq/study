import React,{useRef} from 'react'
import styles from "./index.less"

export default function LoginForm(props) {
    const loginIdRef = useRef();
    const loginPwdRef = useRef();
  return (
    <div className={styles.container}>
        <p className={styles.item}>
            账号：<input ref={loginIdRef} type="text"  />
        </p>
        <p className={styles.item}>
            密码：<input ref={loginPwdRef} type="password"  />
        </p>
        <p>
            <button onClick={()=>{
                const loginId = loginIdRef.current.value;
                const loginPwd = loginPwdRef.current.value;
                props.onLogin && props.onLogin(loginId,loginPwd);
            }}>登录</button>
        </p>
  </div>
  )
}
