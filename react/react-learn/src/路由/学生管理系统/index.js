import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from "./pages/Login"
import Admin from "./pages/Admin"

export default function Test() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/*' element={<Admin/>}></Route>
    </Routes>
  )
}
