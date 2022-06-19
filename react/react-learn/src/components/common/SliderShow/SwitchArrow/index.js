import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"

export default class SwitchArrow extends Component {
    static propTypes = {
        onChange: PropTypes.func
    }
  render() {
    return (
      <div className='switch-arrow-container'>
        <span className='left-arrow arrow' onClick={()=>{
            this.props.onChange && this.props.onChange("left")
        }}>&lt;</span>
        <span className='right-arrow arrow' onClick={()=>{
            this.props.onChange && this.props.onChange("right")
        }}>&gt;</span>
      </div>
    )
  }
}
