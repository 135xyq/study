import React from 'react';
import {Outlet} from "umi"
function Index(props) {
    return (
        <div>
            <div>
                <p>布局顶部</p>
            </div>
            <Outlet></Outlet>
            <div>
                <p>布局底部</p>
            </div>
        </div>
    );
}

export default Index;