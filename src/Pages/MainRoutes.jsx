import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import Wishlist from './Wishlist'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<HomePage/>}  />
        <Route path='/account'  element={<Wishlist/>}  />
      
    </Routes>
  )
}

export default MainRoutes
