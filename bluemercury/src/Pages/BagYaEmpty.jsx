import React from 'react'


import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproductFailure, getproductRequest, getproductSuccess } from '../Redux/BagReducer/action'
import Bag from '../Components/Bag'
import EmptyBag from '../Components/EmptyBag'



const BagYaEmpty = () => {
    const dispatch = useDispatch()
    const productdata = useSelector((store)=>store.BagReducer.products)
    

    const getProduct =()=>{
        dispatch(getproductRequest())
        return axios.get("https://stark-lake-19402.herokuapp.com/cart")
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