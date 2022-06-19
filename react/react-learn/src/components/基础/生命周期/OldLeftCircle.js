// 老版生命周期

import React ,{Component} from "react";
export default class OldLeftCircle extends Component{
    constructor(props){
        super(props);
        this.state = {
            n:0
        }
        console.log("constructor","初始化");
    };

    componentWillMount(){
        console.log("componentWillMount","即将挂载")
    }

    componentDidMount(){
        console.log("componentDidMount","挂载完成")
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps","接收到新的属性值","新的属性",nextProps)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate","是否重新渲染该组件","新的属性",nextProps,"新的状态",nextState)
        return true
    }


    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate","组件即将更新","新的属性",nextProps,"新的状态",nextState)

    }

    componentDidUpdate(previousProps,previousState){
        console.log("componentDidUpdate","组件更新完成","旧的属性",previousProps,"旧的状态",previousState)

    }

    render(){
        console.log("render","页面渲染虚拟DOM")
        return <React.Fragment>
            <h2>属性：{this.props.n}</h2>
            <h2>状态：{this.state.n}</h2>
            <button onClick={()=>{
                this.setState({
                    n:this.state.n + 1
                })
            }}>状态加一</button>
        </React.Fragment>
    }
}