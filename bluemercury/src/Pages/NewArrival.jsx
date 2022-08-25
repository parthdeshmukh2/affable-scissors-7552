import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { getData } from '../Redux/AppReducer/action';

const NewArrival = () => {

    const dispatch = useDispatch();

    const product = useSelector((store)=> store.AppReducer.productData);

    useEffect(()=>{
        dispatch(getData())
    }, [])

    console.log(product)
  return (
    <div>

      {product.length>0  && 
      product.map((elem)=> {
          return <Link to={`/product/${elem._id}`}><h1 key={elem.id}>{elem.Title}</h1></Link>
      })}
    </div>
  )
}

export default NewArrival
