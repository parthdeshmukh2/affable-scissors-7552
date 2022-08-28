import React, { useState } from 'react'
import { Text,Flex,Button,Box, useDisclosure } from '@chakra-ui/react'
import "../App.css"
import Account_overview from '../Components/Account_overview'
import My_blueRewards from '../Components/My_blueRewards'
import My_Wishlist from '../Components/My_Wishlist'
import Account_Detail from '../Components/Account_Detail'
import My_Purchases from '../Components/My_Purchases'
import Footer from '../Components/Footer'
import {Link as RLink} from "react-router-dom"
import MainNavbar from '../Components/MainNavbar'



const Wishlist = () => {
const [category,setCategory]= useState("Account")


  return (
    <div>
    <div style={{ "position":"absolute", "marginTop":"0"}}>
      <MainNavbar/>
      </div>

      <Flex direction={"column"} width={"100%"} m="auto">
      <Box
        h="35px"
        bg="rgb(215,235,242)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="none"
        mt={{lg:'32'}}
        textAlign="center"
        // color={"rgb(96,111,135)"}
        color={"black"}
        fontSize="0.3rem" letterSpacing={"1px"}
      >
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        >FREE SHIPPING FOR BLUEREWARDS MEMBER</Text> 
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        > FREE GIFTS WITH PURCHASE. BROWSE NOW  </Text> 
    </div>
    <div class="carousel-item">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        > FREE SAMPLES WITH ALL ORDERS</Text>
    </div>
  </div>
</div>
      </Box>
  <Text fontSize='4xl' fontWeight={100} textAlign={"left"} pb="20px" w="94%" m="15px auto" borderBottom={"1px solid black"}>MY ACCOUNT</Text>
  <Flex direction={["column", "column", "row"]} fontFamily={"Montserrat Light,sans-serif"} w="94%" m="auto" justifyContent={"space-between"} >
    <Flex direction={"column"} gap="10px" letterSpacing={"0.1rem"} fontSize="14px" textAlign={"left"} w="350px">
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

    </Flex>
    </div>
    
  )
}

export default Wishlist