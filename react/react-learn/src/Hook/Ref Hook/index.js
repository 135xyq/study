import React, { useRef,useState,useEffect} from "react";

export default function RefHookTest() {
    const [n, setN] = useState(10);
    const nRef = useRef(n);
    useEffect(()=>{
        let timer = setInterval(()=>{
            setN(nRef.current-1)
            nRef.current--;
            if(nRef.current ===0){
                clearInterval(timer)
            }
            return ()=>{
                clearInterval(timer)
            }
        },1000)
    },[])
	return <div>
        {n}
    </div>;
}
