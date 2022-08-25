import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsHandbag, BsSearch, BsSuitHeart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import styles from "../Navbar/InnerNavbar.module.css"
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
    <div>
        <Box className={styles.InnerNavAkay}>
          
          <Box className={styles.InnerNavFirstBox}>
          <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem >
      SHOP
    </MenuItem>
   <Link to="/newarrival"> <MenuItem>
      NEW!
    </MenuItem> </Link>
    <MenuItem>
      BRANDS
    </MenuItem>
    <MenuItem>
      EXPLORE
    </MenuItem>
    <MenuItem>
      EVENTS
    </MenuItem>
    <MenuItem>
      BLUEREWARDS
    </MenuItem>
    <MenuItem>
      ROUTINE REBOOT
    </MenuItem>
  </MenuList>
</Menu>
          </Box>

          <Box className={styles.InnerNavSecBox}>
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt=""/>
          </Box>

          <Box className={styles.InnerNavThirBox}>
            <Box className={styles.ThirIconBox}>
            <BsSuitHeart size={22} color="black"/>
            </Box>
            <Box className={styles.ThirIconBox}>
            <BsSearch size={22} color="black"/>
            </Box>
            <Box className={styles.ThirIconBox}>
            <CgProfile size={22} color="black"/>
            </Box>
            <Box className={styles.ThirIconBox}>
            <BsHandbag size={22} color="black"/>
            </Box>
          </Box>


        </Box>
    </div>
  )
}

export default InnerNavbar