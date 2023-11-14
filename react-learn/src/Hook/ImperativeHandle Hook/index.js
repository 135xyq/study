import React ,{useImperativeHandle} from 'react'

function ImperativeHandleHookTest(props,ref) {
    useImperativeHandle(ref,()=>{
        return{
            method:()=>{
                console.log("ImperativeHandleHookTest里面的method方法！")
            }
        }
    },[])
  return (
    <div>ImperativeHandleHookTest</div>
  )
}

export default React.forwardRef(ImperativeHandleHookTest)