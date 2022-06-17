import React from "react";
/**
 * 高阶组件
 * @param {*} Comp 组件
 * @returns 
 */
export default function WithTest(Comp){
    return class WithTestWrapper extends React.Component{
        componentDidMount(){
            console.log(`组件${Comp.name}被创建`);
        }
        render(){
            return <>
            <Comp {...this.props}></Comp>
            </>
        }
    }
}