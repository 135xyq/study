import React from 'react';
import {useNavigate} from "umi"

function Welcome(props) {
    const loginId = localStorage.getItem("umiLoginId");
    const navgator = useNavigate();
    return (
        <div>
            <p>
                欢迎： {loginId}
            </p>
            <p>
                <button onClick={()=>{
                    localStorage.removeItem("umiLoginId");
                    navgator("/login")
                }}>注销</button>
            </p>
        </div>
    );
}

export default Welcome;