import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../Styles/EmptyBag.module.css"
import Footer from './Footer'
import MainNavbar from './MainNavbar'
import Navbar from './Navbar'

const EmptyBag = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Box>
      {/* <MainNavbar/> */}
      </Box>
        <Box className={styles.EmptyBagBoxakay}>
         
         <Box>
            <Text className={styles.EmptyCart}>YOUR CART IS EMPTY</Text>
         </Box>

         <Button className={styles.EmptyBtn} bg="#12284c" color="white" borderRadius="none" onClick={()=>navigate("/newarrival")}>SHOP OUR PRODUCTS</Button>
        </Box>

        <Box>
        {/* <Footer/> */}
        </Box>
    </div>
  )
}

export default EmptyBag