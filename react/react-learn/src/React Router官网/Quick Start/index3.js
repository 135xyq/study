import React from "react";
import {Routes,Route,useParams,Outlet} from "react-router-dom";

export default function QuickStart() {
    return (
        <Routes>
            <Route
                path="invoices"
                element={<Invoices />}
            >
                <Route path=":invoice" element={<Invoice></Invoice>}></Route>
                <Route path="child" element={<ChildPath></ChildPath>}></Route>
            </Route>
        </Routes>
    );
}

function Invoice() {
    let params = useParams();
    console.log(params);
    return (<>
        <div>
            匹配路径：{params.invoice}
        </div>
    </>)
}

function Invoices(){
    return (<>
        <div>父路由</div>
        <hr/>
        <Outlet />
    </>)
}

function ChildPath(){
    return (<div>子组件</div>)
}