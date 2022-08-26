import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Checkout from './Checkout'
import HomePage from './HomePage'
import Wishlist from './Wishlist'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<HomePage/>}  />
        <Route path='/account'  element={<Wishlist/>}  />
        <Route path='/checkout'  element={<Checkout/>}  />
      
    </Routes>
  )
}

export default MainRoutes
