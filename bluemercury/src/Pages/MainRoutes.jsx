import React from 'react'
import { Routes , Route} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import NewArrival from './NewArrival'
import SignUp from './SignUp'
import SingleProduct from './SingleProduct'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<HomePage/>}  />
        <Route path='/newarrival'  element={<NewArrival/>}  />
        <Route path='/product/:id'  element={<SingleProduct/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path = '/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default MainRoutes
