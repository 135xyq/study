import React from 'react';
import {Link,useLocation,useMatch} from "umi";

function Page1(props) {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <div>页面一</div>
            <Link to="/article/add">添加文章</Link>
        </div>
    );
}

export default Page1;