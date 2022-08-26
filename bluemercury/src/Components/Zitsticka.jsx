import { Box, GridItem, Image, Grid, Text } from '@chakra-ui/react'
import React from 'react'

const Zitsticka = () => {
  return (
    <Box w='90%' h={{lg:"480px"}} m='auto' mt='8'>
        <Grid  templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} w='100%' h='100%' gap='8' >
            <GridItem w='100%' h='100%'>
                <Image boxSize='480px' w='100%'  objectFit='cover' src='https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_coop_x650.jpg?v=1660762100'/>
            </GridItem>
            <GridItem display='flex'  mt='auto' mb='auto' flexDirection='column' fontFamily='Montserrat Light,sans-serif'>
             <Text fontSize='lg' color='rgb(18,40,76)'>NEW BRAND ALERT!</Text>
             <Text fontSize='xl' color='rgb(18,40,76)' mt='2' fontWeight='600'>Zitsticka</Text>
             <Text color='gray.400' fontSize='md' mt='4' fontWeight='thin'>Offering a full suite of acne products that can treat and prevent all kinds of breakouts, while protecting and nourishing your skin.</Text>
             <Text textDecoration='underline' color='rgb(18,40,76)' mt='5' fontSize='lg'>SHOP NOW</Text>
            </GridItem>
        </Grid>
      
    </Box>
  )
}

export default Zitsticka
