import { Box, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { BsHandbag, BsSearch, BsSuitHeart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
// import styles from "../Navbar/InnerNavbar.module.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const InnerNavbar = () => {
  return (
    <Box>
        <Box w="99%vw" h="95%" m="auto" display="flex" justifyContent="space-around"  alignItems="center">
          
          <Box>
          <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList zIndex={99}>
    <MenuItem >
      SHOP
    </MenuItem>
   <Link to="/newarrival"> <MenuItem>
      NEW!
    </MenuItem>
    </Link>
    <Link to="/newarrival"> <MenuItem>
      BRANDS
    </MenuItem>
    <Link to="/newarrival"> <MenuItem>
      EXPLORE
    </MenuItem> </Link>
    <Link to="/newarrival"> <MenuItem>
      EVENTS
    </MenuItem> </Link>
    <Link to="/newarrival"></Link><MenuItem>
      BLUEREWARDS
    </MenuItem> </Link>
    <Link to="/newarrival"> <MenuItem>
      ROUTINE REBOOT
    </MenuItem> </Link>
  </MenuList>
</Menu>
          </Box>

          <Box w="50%" h="100%" display="flex" justifyContent="center" >
          <Link to="/"> <Image src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt="" w={{base:"80%", md:"60%"}} h={{base:"80%", md:"80%"}}/></Link>
          </Box>

          <Box display="flex" justifyContent="space-between"  w="30%">
            <Box>
            <BsSuitHeart size={20} color="black"/>
            </Box>
            <Box>
            <BsSearch size={20} color="black"/>
            </Box>
            <Box>
           <Link to="/login"> <CgProfile size={20} color="black"/></Link>
            </Box>
            <Box>
            <Link to="/cart"> <BsHandbag size={20} color="black"/></Link>
            </Box>
          </Box>


        </Box>
        </Box>
  )
}

export default InnerNavbar