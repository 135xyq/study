import React, { Component } from 'react'
export default class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date().toLocaleTimeString()
        };
        this.timer = null;
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date().toLocaleTimeString()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return <React.Fragment>
            <div>现在的时间是：</div>
            <div>{this.state.date}</div>
        </React.Fragment>
    }
}