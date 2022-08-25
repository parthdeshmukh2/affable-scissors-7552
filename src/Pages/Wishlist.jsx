import React, { useState } from 'react'
import { Text,Flex,Button } from '@chakra-ui/react'
import "../App.css"
import Account_overview from '../Components/Account_overview'
import My_blueRewards from '../Components/My_blueRewards'
import My_Wishlist from '../Components/My_Wishlist'
import Account_Detail from '../Components/Account_Detail'
import My_Purchases from '../Components/My_Purchases'
import Footer from '../Components/Footer'

const Wishlist = () => {
const [category,setCategory]= useState("Account")


  return (
    <div>Wishlist
  <Text fontSize='4xl' fontWeight={100} textAlign={"left"} pb="20px" w="94%" m="30px auto" borderBottom={"1px solid black"}>MY ACCOUNT</Text>
  <Flex direction={"row"} w="94%" m="auto" justifyContent={"space-between"} >
    <Flex direction={"column"} gap="10px" textAlign={"left"} w="350px">
   <Text color=" rgb(139,150,167)"  className='texts'
    border={"1px solid rgb(139,150,167)"} 
    w="300px" p="7px"   
   onClick={()=>setCategory("Account")} >Account Overview</Text>

    <Text color=" rgb(139,150,167)"  className='texts'border={"1px solid rgb(139,150,167)"} w="300px"  p="7px "   
    onClick={()=>setCategory("Purchases")} >My Purchases</Text>


    <Text color=" rgb(139,150,167)"  className='texts' border={"1px solid rgb(139,150,167)"} w="300px"  p="7px "  
    onClick={()=>setCategory("BlueRewards")} >My BlueRewards</Text>


    <Text color=" rgb(139,150,167)"  className='texts' border={"1px solid rgb(139,150,167)"}  onClick={()=>setCategory("MyWishlist")}  w="300px" p="7px ">My Wishlist</Text>

    <Text  color=" rgb(139,150,167)" className='texts'border={"1px solid rgb(139,150,167)"} w="300px"  p="7px "  
    onClick={()=>setCategory("Preferences")} >Account Details + Preferences</Text>

    </Flex>
    { category === "Account" && <Account_overview/>}
    { category === "BlueRewards" && <My_blueRewards/>}
    { category === "Purchases" && <My_Purchases/>}
    { category === "MyWishlist" && <My_Wishlist/>}
    { category === "Preferences" && <Account_Detail/>}
      </Flex>
      <hr style={{"marginTop":"20px"}}/>
      <Footer/>

    </div>
    
  )
}

export default Wishlist