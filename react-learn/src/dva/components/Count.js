import React from "react";
import {connect} from "dva";

function Counter(props){
    return (<p>
        <button onClick={props.onDecrease}> - </button>
        <button onClick={props.onAsyncDecrease}> 异步减 </button>
        {props.count}
        <button onClick={props.onIncrease}> + </button>
        <button onClick={props.onAsyncIncrease}> 异步加 </button>
    </p>)
}

const mapStateToProps = state=>({
    count:state.count
})

const mapDispatchToProps = dispatch=>({
    onIncrease:()=>{
        dispatch({
            type:"count/increase"
        })
    },
    onDecrease:()=>{
        dispatch({
            type:"count/decrease"
        })
    },
    onAsyncIncrease(){
        dispatch({
            type:"count/asyncIncrease"
        })
    },
    onAsyncDecrease(){
        dispatch({
            type:"count/asyncDecrease"
        })
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Counter)