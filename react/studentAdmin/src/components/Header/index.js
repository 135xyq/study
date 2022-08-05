import React from 'react'
import styles from "./index.less"

export default function Header(props) {
  return (
    <div>
        <div className={styles.left}>
            <h1>学生管理系统</h1>
        </div>
        <div className={styles.right}>
            <span>欢迎你</span>
            <span>{props.loginId}</span>
            <button onClick={props.onLogout}>注销</button>
        </div>
    </div>
  )
}
