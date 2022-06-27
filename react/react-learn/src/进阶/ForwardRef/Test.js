import React, { Component } from 'react'
import CompA from './CompA'
export default class Test extends Component {
  compARef = React.createRef();
  componentDidMount(){
    console.log(this.compARef)
  }
  render() {
    return (
      <CompA data="123456" ref={this.compARef}></CompA>
    )
  }
}
