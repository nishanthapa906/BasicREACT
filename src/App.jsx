import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Product from '../pages/Product'
import PageNotFound from '../pages/PageNotFound'
import Header from '../components/Header'
import Register from '../pages/Register'





function App() {
  return (
    <div className='nav'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>} ></Route> 
        <Route path = '/about' element ={<About/>} ></Route>
        <Route path = '/contact' element = {<Contact/>}></Route>
        <Route path = '/login' element = {<Login/>}></Route>
        <Route path = '/product' element = {<Product/>}></Route>
        <Route path = '*' element = {<PageNotFound/>}></Route>
        <Route path = '/register' element = {<Register/>}></Route>
        
      </Routes>
      
    </div>
  )
}

export default App
