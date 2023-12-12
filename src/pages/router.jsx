import React from 'react'
import { Route, Routes } from 'react-router-dom'


//import pages
import Auth from './Auth'
import Home from './Home'
import Favorite from './Favorite'
import MyProducts from './MyProducts'
import Profile from './Profile'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/favorite' element={<Favorite/>}/>      
        <Route path='/my-products' element={<MyProducts/>}/> 
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default Router