import React from "react"
import {Routes,Route,Link} from "react-router-dom";

export default function Installation(){
    return (<div>
        <h1>router</h1>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
        </Routes>
    </div>)
}

function Home(){
    return (
        <>
            <div>Home Page</div>
            <Link to="/about">About</Link>
        </>
    )
}


function About(){
    return(
        <>
            <div>About Page</div>
            <Link to="/">Home</Link>
        </>
    )
}