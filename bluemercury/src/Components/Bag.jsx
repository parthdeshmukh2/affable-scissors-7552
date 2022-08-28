import { Box, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductFail, deleteProductReq, deleteProductSuccess, getproductFailure, getproductRequest, getproductSuccess, UpdateProductFail, UpdateProductReq, UpdateProductSuccess } from '../Redux/BagReducer/action'
import styles from "../Styles/Bag.module.css"



const Bag = () => {
    const dispatch = useDispatch()
    const productdata = useSelector((store)=>store.BagReducer.products)
  
    const getProduct =()=>{
        dispatch(getproductRequest())
        return axios.get("https://stark-lake-19402.herokuapp.com/cart")
        .then((r)=>{
            dispatch(getproductSuccess(r.data))
            console.log(r.data);
        })
        .catch((e)=>{
            dispatch(getproductFailure())
        })
    }

    useEffect(()=>{
        getProduct()
    },[])

    const total = productdata.reduce(function(sum,el){
        return sum+(Number(el.price)*Number(el.qty))
       },0)



   const handleDelete=(id)=>{
       dispatch(deleteProductReq())
        return axios.delete(`https://stark-lake-19402.herokuapp.com/cart/${id}/delete`)
        .then((r)=>dispatch(deleteProductSuccess()))
        .catch((e)=>dispatch(deleteProductFail()))
    }

    const manageDelete=(payload)=>{
        handleDelete(payload).then(()=>getProduct())
    }


    const handleUpdate=(id,payload)=>{
        dispatch(UpdateProductReq())
        return axios.patch(`https://stark-lake-19402.herokuapp.com/cart/${id}/edit`,payload)
        .then((r)=>{
            dispatch(UpdateProductSuccess())
        })
        .catch((e)=>{
            dispatch(UpdateProductFail())
        })
    }


    const handleChange=(id, amount, qty)=>{
   
        if((qty+amount)<1)
        {
            handleDelete(id)
            .then(()=>getProduct())
        }
        else
        {
    const payload={
       qty:qty+amount
    }
    console.log(payload);
    handleUpdate(id,payload)
    .then(()=>getProduct())
    }
}
  return (
    <div>
     <Box className={styles.YourBagBoxakay}>
      
      <Text className={styles.YourBagtext} fontSize='3xl'>YOUR BAG</Text>
     </Box>

    <Box className={styles.BaglengthBoxakay}>
        <Text className={styles.CartLengthedit}>{`Your cart (${productdata.length} items)`}</Text>
    </Box>


     <Box className={styles.ReadyshipBox}>
        
        <Box className={styles.ReadyShipfirstBox}>
            <Text className={styles.ReadToShip}>Ready to Ship</Text>
        </Box>

        <Box className={styles.ReadyShipsecBox}>
            <Box>Price</Box>
            <Box>Quantity</Box>
            <Box>Total</Box>
        </Box>
     </Box>


     {productdata.map((item)=>(
           <Box className={styles.mapMainBox} key={item.id}>

            <Box className={styles.MapleftBox}>

                <Box className={styles.MapleftInBox}>
                    <Box className={styles.mapleftInImgBox}>
                        <img src={item.Image} alt="" style={{width:"100px" , height:"80px"}}/>
                    </Box>
                    <Box className={styles.mapleftInImgRight}>
                        <Text className={styles.mapTitleedit}>{item.Title}</Text>
                        <Text className={styles.mapTAboutedit}>{item.Description}</Text>
                    </Box>
                </Box>

            </Box>


            <Box className={styles.MapRightBox}>

              <Box className={styles.MapRightInBox}>

                <Box>$ {item.Price}</Box>

                <Box >
                <Box className={styles.mapBtnBox}>
                    <Button className={styles.incBtnedit} onClick={()=>handleChange(item._id,1,item.Quantity)}>+</Button>
                   <Text style={{padding:"7px 10px" ,border:"1px solid gray" ,borderRadius:"5px"}} >{item.Quantity}</Text> 
                    <Button className={styles.decBtnedit}  onClick={()=>handleChange(item._id,-1,item.Quantity)}>-</Button>
                </Box>
                <Text className={styles.RemoveEdit} onClick={()=>manageDelete(item._id)}>Remove</Text>
                </Box>

                <Box>
                    $ {item.Price*item.Quantity}
                </Box>

                </Box> 
            </Box>

           </Box> 
         ))}


<Box className={styles.SubtotalBox}>
    <Box>
<label className={styles.Subtotaledit}>Subtotal</label>
<label className={styles.priceEedit}>₹{total}</label>
</Box>
<Text style={{fontSize:"14px" ,color:"gray"}}>Shipping, Taxes, Beauty Cards, and additional discounts applied at checkout</Text>

<Button className={styles.bagBtnakay} bg="#12284c" color="white" borderRadius="none">CHECKOUT</Button>
</Box>
    </div>
  )
}

export default Bag