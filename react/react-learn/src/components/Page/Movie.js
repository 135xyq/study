import React from 'react'

export default function Movie({rate,title,url,cover}) {
  return (
    <li>
      <p>名称：{title}</p>
      <p>评分:{rate}</p>
      <a href={url}>链接地址</a>
      <img src={cover} alt="图片封面" />
    </li>
  )
}
