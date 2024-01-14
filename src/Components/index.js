import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './AboutUs/'
import Home from './Home'
import Blogs from './Blogs'

export default function index() {
  return (
     <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About resumeDataLink="http://localhost:8080/resume"/>}></Route>
        <Route exact path='/blogs' element={<Blogs/>}></Route>
     </Routes>
  )
}
