import React from 'react'
import "./index.css"
import {Link} from "react-router-dom"

export default function Aside() {
  return (
    <ul className='menu'>
        <li><Link to="/student">学生列表</Link></li>
        <li><Link  to="/student/add">新增学生</Link></li>
        <li><Link to="/course">课程列表</Link></li>
        <li><Link to="/course/add">新增课程</Link></li>
    </ul>
  )
}
