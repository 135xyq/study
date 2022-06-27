import React, { Component } from 'react'

export default class ClassDefaultProps extends Component {
    static defaultProps = {
        name:"xyq",
        age:21
    }
  render() {
    return (
      <div>
        名字:{this.props.name}
        年龄:{this.props.age}
      </div>
    )
  }
}

// ClassDefaultProps.defaultProps = {
//     name:"xyq",
//     age:21
// }
