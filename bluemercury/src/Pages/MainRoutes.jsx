import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Dumy from './Dumy'
import HomePage from './HomePage'
import NewArrival from './NewArrival'
import SingleProduct from './SingleProduct'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<HomePage/>}  />
        <Route path='/newarrival'  element={<NewArrival/>}  />
      
        
    </Routes>
  )
}

export default MainRoutes
