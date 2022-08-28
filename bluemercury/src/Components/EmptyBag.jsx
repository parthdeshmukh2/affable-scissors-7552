import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../Styles/EmptyBag.module.css"

const EmptyBag = () => {
  return (
    <div>
        <Box className={styles.EmptyBagBoxakay}>
         
         <Box>
            <Text className={styles.EmptyCart}>YOUR CART IS EMPTY</Text>
         </Box>

         <Button className={styles.EmptyBtn} bg="#12284c" color="white" borderRadius="none">SHOP OUR PRODUCTS</Button>
        </Box>
    </div>
  )
}

export default EmptyBag