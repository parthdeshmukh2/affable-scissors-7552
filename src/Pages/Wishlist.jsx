import React from 'react'
import { Text,Flex,Button } from '@chakra-ui/react'
import "../App.css"
import Account_overview from '../Components/Account_overview'

const Wishlist = () => {
  return (
    <div>Wishlist
  <Text fontSize='4xl' fontWeight={100} textAlign={"left"} >MY ACCOUNT</Text>
  <hr />
  <Flex direction={"row"} >
    <Flex direction={"column"} gap="10px" textAlign={"left"}>
   <Text className='texts' border={"1px solid black"} w="300px" p="7px">Account Overview</Text>
    <Text className='texts' border={"1px solid black"} w="300px"  p="7px ">My Purchases</Text>
    <Text className='texts' border={"1px solid black"} w="300px"  p="7px ">My BlueRewards</Text>
    <Text className='texts' border={"1px solid black"}  w="300px" p="7px ">My Wishlist</Text>
    <Text className='texts' border={"1px solid black"} w="300px"  p="7px ">Account Details + Preferences</Text>
    </Flex>
    <Account_overview/>
  </Flex>

    </div>
    
  )
}

export default Wishlist