import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './AboutUs/'
import Home from './Home'
import Blogs from './Blogs'
import '../App.scss'

export default function index() {
  return (
     <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About resumeDataLink= {process.env.REACT_APP_RESUME_URL}/>}></Route>
        <Route exact path='/blogs' element={<Blogs/>}></Route>
     </Routes>
  )
}
