import React, { Component } from 'react'

export default class Profiler extends Component {
  render() {
    return (
      <div>
        <One></One>
      </div>
    )
  }
}

function One(){
    let arr = [];
    for (let i = 0; i < 100; i++) {
       arr.push(<div key={i}><div>One</div><Two></Two></div>)
    }
    return <>{arr}</>
}

function Two(){
    let arr = [];
    for (let i = 0; i < 100; i++) {
       arr.push(<div key={i}><div>Two</div><Third></Third></div>)
    }
    return <>{arr}</>
}

function Third(){
    return <div>测试Portals</div>
}
