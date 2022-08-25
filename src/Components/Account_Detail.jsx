import React,{useState} from 'react'
import { Text,Flex,Input,Button ,Box,Stack} from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'


const Account_Detail = () => {


  return (
    <Flex direction={"column"} textAlign="left"  w="70%" gap="20px" mt={["25px", "25px" ,"0px" ]} >
    <Text fontSize='md' >My Account > Account Details</Text>
    <Text fontSize='3xl' mt="-20px">ACCOUNT DETAILS</Text>
    
    <Flex justifyContent={"flex-start"} direction={["column","column","flex"]} m="auto" >

<Box w="[70%,70%,40%]" mr="35px" bg="#F8F8F8" h="250px"  border={"1px solid black"} display="flex"
flexDirection="column" gap="15px" p="10px 25px">
<Text fontSize='xl' fontWeight={"600"} >YOUR INFO</Text>
<Text fontSize='md' >Name + Phone Number</Text>
<Text fontSize='md' >Addresses</Text>
<Text fontSize='md' >Communication Preferences</Text>
<Text fontSize='md' >Preferred Store</Text>


</Box>
<Box w="[70%,70%,40%]" bg="#F8F8F8" h="130px" mr="35px" border={"1px solid black"} display="flex"
flexDirection="column" gap="8px" p={["0px 25px","10px 25px","10px 25px"]}>

<Text fontSize='xl' fontWeight={"600"} >ACCOUNT SECURITY</Text>
<Text fontSize='md' >Email Adress</Text>
<Text fontSize='md' >Change Your Password</Text>
</Box>

    </Flex>
    
 



    </Flex>
  )
}

export default Account_Detail




 


  