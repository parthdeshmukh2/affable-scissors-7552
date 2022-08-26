import React from 'react'

import Bag from "./Bag"
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductFailure, getproductRequest, getproductSuccess } from '../Redux/BagReducer/action'
import EmptyBag from './EmptyBag'


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
        {productdata.length>0 ? <Bag/> : <EmptyBag/>}
    </div>
  )
}

export default BagYaEmpty