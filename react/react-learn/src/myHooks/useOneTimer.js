import {useEffect} from "react";
/**
 * 创建一个计时器，销毁组件清除计时器
 * @param {*} func 
 * @param {*} duration 
 */
export default function useOneTimer(func,duration){
    useEffect(()=>{
        console.log("开启计时器")
        const timer = setInterval(func,duration);
        return ()=>{
            console.log("清除计时器")
            clearInterval(timer)
        }
    },[])
}