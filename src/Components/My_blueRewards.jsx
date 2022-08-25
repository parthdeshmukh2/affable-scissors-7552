import React from 'react'
import { Text,Flex,Button ,Box,Stack} from '@chakra-ui/react'


const My_blueRewards = () => {
  return (
    <Flex direction={"column"} textAlign="left"  w="70%" gap="20px">
<Text fontSize='md' >My Account > My BlueRewards</Text>
<Text fontSize='3xl' mt="-20px">MY BLUEREWARDS</Text>

<Flex direction="column" alignItems={"flex-start"} p="15px 0px" >
   <Text  color="rgb(139,150,167)" mb="15px">Earn $10 for every $250 you spend, plus free birthday gifts & treatments</Text>
   <Button bg="rgb(18,40,76)" color={"white"} borderRadius="0" p="5px 30px" >JOIN NOW</Button>
</Flex>

</Flex>
  )
}

export default My_blueRewards