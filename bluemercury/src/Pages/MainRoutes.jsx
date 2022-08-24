import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Dumy from './Dumy'
import HomePage from './HomePage'
import NewArrival from './NewArrival'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<HomePage/>}  />
        <Route path='/newarrival'  element={<NewArrival/>}  />
        <Route path='/Dumy'  element={<Dumy/>}  />
      
    </Routes>
  )
}

export default MainRoutes
