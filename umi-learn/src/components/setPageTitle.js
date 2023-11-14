import React,{useEffect} from 'react';
import {Outlet,useLocation} from "umi"
import config from "../../.umirc.js";


function SetPageTitle(props) {
    const location =useLocation();
    // console.log(location)
    let title = "";
    for (const titleElement of config.routes) {
        // console.log(titleElement,titleElement.path,location.pathname)
        if(titleElement.path === location.pathname){
            title = titleElement.title;
        }
    }
    useEffect(()=>{
        document.title = title
    })
    return (
        <Outlet></Outlet>
    );
}

export default SetPageTitle;