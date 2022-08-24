import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"

import styles from "../Chakra/NewHover.module.css"


export default function NewHover() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
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
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <div className={styles.NewMainBox}>
            <div className={styles.NewBox}>
               
               <div className={styles.NewCatBox}>
                
                <p style={{fontWeight:"500"}}>BY CATEGORY</p>
                <p className={styles.CatPara}>Shop All</p>
                <p className={styles.CatPara}>Skincare</p>
                <p className={styles.CatPara}>Makeup</p>
                <p className={styles.CatPara}>Hair</p>
                <p className={styles.CatPara}>Bath & Body</p>
                <p className={styles.CatPara}>Fragrance</p>
                <p className={styles.CatPara}>Tools & Accessories</p>
                <p className={styles.CatPara}>Wellness</p>
                <p className={styles.CatPara}>Gifts</p>
                <p className={styles.CatPara}>Wedding Essentials</p>
               </div>

               <div className={styles.NewImgBox}> 
               
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/zitsticka_navigation_303x303.jpg?v=1659549528" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p style={{fontWeight:"500"}}>New Brand Alert: ZitSticka</p>

               <p className={styles.CatPara2}>Treat and prevent all kinds of breakout</p>

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