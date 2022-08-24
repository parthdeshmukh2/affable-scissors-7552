import React from 'react'
import { Text,Flex,Button ,Box} from '@chakra-ui/react'


const Account_overview = () => {
  return (
    <Flex border={"1px solid black"} textAlign="left" >
<Flex direction={"column"} >
<Text fontSize='md'>My Account  Account Overview</Text>
<Text fontSize='4xl'>Account Overview</Text>
<Flex textAlign={"center"}>
<Text fontSize='xl' mr="10px">MY BLUEREWARDS</Text>
<a href="">View Loyalty Program Details</a>
</Flex>

<Flex border={"1px solid black"} direction="column" alignItems={"flex-start"} >
   <Text>Earn $10 for every $250 you spend, plus free birthday gifts & treatments</Text>
   <Button>JOIN NOW</Button>
</Flex>

    </Flex>        
    </Flex>
  )
}

export default Account_overview