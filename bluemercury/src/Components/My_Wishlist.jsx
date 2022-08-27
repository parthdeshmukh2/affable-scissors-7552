import React from 'react'
import { Text,Flex,Button ,Box,Stack,Image} from '@chakra-ui/react'


const My_Wishlist = () => {
  return (
    <Flex direction={"column"} textAlign="left"  w="70%" gap="20px" mt={["25px", "25px" ,"0px" ]} >
    <Text fontSize='md' >My Account > My Wishlist</Text>
    <Text fontSize='3xl' mt="-20px">MY WISHLIST</Text>
    
    <Image src='https://i.ibb.co/GscC64R/image-1-8.png' h="500px" w="550px" alt='Dan Abramov' />
    
    </Flex>
  )
}

export default My_Wishlist