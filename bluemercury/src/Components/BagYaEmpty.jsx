import React from 'react'

import Bag from "./Bag"
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductFailure, getproductRequest, getproductSuccess } from '../Redux/BagReducer/action'
import EmptyBag from './EmptyBag'
import MainNavbar from './MainNavbar'
import Footer from './Footer'


const BagYaEmpty = () => {
    const dispatch = useDispatch()
    const productdata = useSelector((store)=>store.BagReducer.products)
    

    const getProduct =()=>{
        dispatch(getproductRequest())
        return axios.get("http://localhost:8080/products")
        .then((r)=>{
            dispatch(getproductSuccess(r.data))
        })
        .catch((e)=>{
            dispatch(getproductFailure())
        })
    }

    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
        <Box>
        <MainNavbar/>
        </Box>
        {productdata.length>0 ?<Bag/>:<EmptyBag/> }

        <Box>
        <Footer/>
        </Box>
    </div>
  )
}

export default BagYaEmpty