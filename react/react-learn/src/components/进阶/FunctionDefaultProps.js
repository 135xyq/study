import React from 'react'

export default function FunctionDefaultProps(props) {
  return (
    <div>
        姓名:{props.name},
        年龄:{props.age}
    </div>
  )
}

FunctionDefaultProps.defaultProps = {
    name:"xyq",
    age:21
}