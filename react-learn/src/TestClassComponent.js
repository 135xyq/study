import React from 'react'

export default class ClassComponent extends React.Component {
    render(){
        return <h1>类组件：{this.props.str}</h1>
    }
}