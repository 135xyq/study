import React, { Component } from 'react'
import WithTest from './WithTest'

class CompA extends Component {
  render() {
    return (
      <div>CompA
        <h1>  {this.props.data}</h1>
      </div>
    )
  }
}
export default  WithTest(CompA)