import React from "react";
import {Routes,Route,useParams} from "react-router-dom";

export default function QuickStart() {
    return (
        <Routes>
            <Route
                path="invoices"
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

function ChildPath(){
    return (<div>子组件</div>)
}