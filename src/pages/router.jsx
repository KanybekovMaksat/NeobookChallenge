import React from 'react'
import { Route, Routes } from 'react-router-dom'


const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/'/>
        <Route path='/home'/>
        <Route path='/favorite'/>      
        <Route path='/my-products'/> 
        <Route path='/profile'/>
    </Routes>
    </>
  )
}

export default Router