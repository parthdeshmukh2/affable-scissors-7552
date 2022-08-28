import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Flex,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

import styles from "../Styles/NewHover.module.css"


export default function NewHover() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
           <Link to="/newarrival"> <MenuButton
                fontSize="15"
                variant="ghost"
                color="grey"
                mx={1}
                py={[1, 2, 2]}
                px={2}
                _hover={{ color:"black" , borderBottom: "2px solid black",paddingBottom: "3px" , fontWeight:"500" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                NEW! 
            </MenuButton></Link>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="-5px">
                <div className={styles.NewMainBox}>
            <div className={styles.NewBox}>
               
               <Flex direction="column"  className={styles.NewCatBox}>
                
                <a href="/" style={{fontWeight:"500"}}>BY CATEGORY</a>
                <a href="/" className={styles.CatPara}>Shop All</a>
                <a href="/" className={styles.CatPara}>Skincare</a>
                <a href="/" className={styles.CatPara}>Makeup</a>
                <a href="/" className={styles.CatPara}>Hair</a>
                <a href="/" className={styles.CatPara}>Bath & Body</a>
                <a href="/" className={styles.CatPara}>Fragrance</a>
                <a href="/" className={styles.CatPara}>Tools & Accessories</a>
                <a href="/" className={styles.CatPara}>Wellness</a>
                <a href="/" className={styles.CatPara}>Gifts</a>
                <a href="/" className={styles.CatPara}>Wedding Essentials</a>
               </Flex>

               <div className={styles.NewImgBox}> 
               
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_navigation_303x303.jpg?v=1659549528" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <a href="/" style={{fontWeight:"500"}}>New Brand Alert: ZitSticka</a>

               <a href="/" className={styles.CatPara2}>Treat and prevent all kinds of breakout</a>

               </div>
             

               <div className={styles.NewImgBox}> 
                
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/summer_spectacular_navigation_303x303.jpg?v=1658775534" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p style={{fontWeight:"500"}}>The Summer Beauty Spectacular</p>

               <p className={styles.CatPara2}>$780+ worth of must-haves for less than $400!</p>

               </div>
               </div>
               </div>
            </MenuList>
        </Menu>
    )
}