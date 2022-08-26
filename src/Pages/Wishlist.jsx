import React, { useState } from 'react'
import { Text,Flex,Button, useDisclosure } from '@chakra-ui/react'
import "../App.css"
import Account_overview from '../Components/Account_overview'
import My_blueRewards from '../Components/My_blueRewards'
import My_Wishlist from '../Components/My_Wishlist'
import Account_Detail from '../Components/Account_Detail'
import My_Purchases from '../Components/My_Purchases'
import Footer from '../Components/Footer'
import {Link as RLink} from "react-router-dom"

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,Input,Box
} from '@chakra-ui/react'

const Wishlist = () => {
const [category,setCategory]= useState("Account")
const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = React.useRef()

  return (
    <div>Wishlist
     <Box mt="20px">
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>YOUR BAG</DrawerHeader>
<hr />
          <DrawerBody>
         <Text color="rgb(139,150,167)" fontSize={"13px"} fontWeight="600">  FREE RETURNS ON ALL ORDERS </Text>

          </DrawerBody>
            <hr />

          <DrawerFooter>
            {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            <Flex direction={"column"} textAlign={"left"}  alignItems="center" >
            <Text color="rgb(139,150,167)" fontSize={"13px"}> Shipping, Taxes, Beauty Cards, and additional discounts applied at checkout</Text>
            <Box w="fit-content" m="auto" m="10px 0px">
            <RLink to="/checkout"><Button bg="rgb(18,40,76)" color={"white"} borderRadius="0" p="5px 30px" >VIEW BAG | TOTAL</Button></RLink>            </Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Box>

  <Text fontSize='4xl' fontWeight={100} textAlign={"left"} pb="20px" w="94%" m="30px auto" borderBottom={"1px solid black"}>MY ACCOUNT</Text>
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

    </div>
    
  )
}

export default Wishlist