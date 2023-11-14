import React from 'react';
import {Outlet,Link} from "umi"
import style from "./index.less"
function Index(props) {
    return (
        <div> 
            <div className={style.head}>
                <Link className={style.link} to="/">首页</Link>
                <Link className={style.link} to="/login">登录页</Link>
                <Link className={style.link} to="/welcome">欢迎页</Link>
            </div>
            <Outlet></Outlet>
            <div>
                <p>布局底部</p>
            </div>
        </div>
    );
}

export default Index;