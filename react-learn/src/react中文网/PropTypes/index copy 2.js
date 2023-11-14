import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TestPropTypes extends Component {
  render() {
    return (
      <div><Child name="xyq" ></Child></div>
    )
  }
}

class Child extends Component{
    static defaultProps = {
        name:"谢永强",
        age:'21'
    }
    static propTypes = {
        name:PropTypes.string.isRequired,
        age:PropTypes.number
    }
    render(){
        return <div>
            <div>name:  {this.props.name}</div>
            <div>age:  {this.props.age}</div>
        </div>
    }
}




