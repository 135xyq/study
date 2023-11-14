import React from "react";
import LoginForm from "@/container/LoginFormContainer"
import login from "@/server/login"
// (async ()=>{
	
// let r = await login("xyq","xyrtq2386152296")
// console.log(r)
// })()


export default function Login() {
	return <LoginForm></LoginForm>;
}
