import React from "react";
import { useLocation,Outlet } from "umi";

export default function index() {
    const location = useLocation();
    if(location.pathname === "/login"){
        return <Outlet></Outlet>
    }else{
        return <>
        <div>Layout</div>
        <Outlet></Outlet>
        </>
    }
}
