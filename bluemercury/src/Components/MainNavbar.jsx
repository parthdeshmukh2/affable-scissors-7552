import { Box } from '@chakra-ui/react'
import React from 'react'
import InnerNavbar from './InnerNavbar'
import Navbar from './Navbar'

const MainNavbar = () => {
  return (
    <Box>

       <Box display={{lg:'none'}}>
        <InnerNavbar/>
       </Box>

       <Box display={{base:"none" , lg:"block"}}>
        <Navbar/>
       </Box>

    </Box>
  )
}

export default MainNavbar