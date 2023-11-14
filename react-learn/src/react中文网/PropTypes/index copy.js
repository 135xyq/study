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
    render(){
        return <div>
            <div>name:  {this.props.name}</div>
            <div>age:  {this.props.age}</div>
        </div>
    }
}

Child.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number
}

Child.defaultProps = {
    name:"谢永强",
    age:21
}


