import React from 'react'
import "./index.css"

export default function Aside() {
  return (
    <ul className='menu'>
        <li><a href="/student">学生列表</a></li>
        <li><a href="/student/add">新增学生</a></li>
        <li><a href="/course">课程列表</a></li>
        <li><a href="/course/add">新增课程</a></li>
    </ul>
  )
}
