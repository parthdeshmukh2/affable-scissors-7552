import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Flex,
} from "@chakra-ui/react"

import styles from "../Styles/Explore.module.css"


export default function ExploreHover() {
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
                _hover={{ color:"black" , borderBottom: "2px solid black",paddingBottom: "3px" , fontWeight:"500"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                EXPLORE
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="-5px">
                <div className={styles.NewMainBox}>
            <div className={styles.NewBox}>
               
               <Flex direction="column"  className={styles.NewCatBox}>
                
                <a href="/" style={{fontWeight:"500"}}>BY CATEGORY</a>
                <a href="/" className={styles.CatPara}>Beauty Alfresco</a>
                <a href="/" className={styles.CatPara}>Wedding Essentials</a>
                <a href="/" className={styles.CatPara}>#ShowUsYourBag</a>
                <a href="/" className={styles.CatPara}>The Founders Series</a>
                <a href="/" className={styles.CatPara}>Blue Notes</a>
                <a href="/" className={styles.CatPara}>Buying Guides</a>
                <a href="/" className={styles.CatPara}>Conscious Beauty</a>
                <a href="/" className={styles.CatPara}>MORE</a>
               </Flex>

               <Flex direction="column"  className={styles.NewImgBox}> 
               
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Wedding_Season_1x1_Blue_Mercury_2208_Alford_7031_303x303.jpg?v=1660140149" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <a href="/" style={{fontWeight:"500"}}>Wedding Season Essentials</a>

               <a href="/" className={styles.CatPara2}>Must have products for the bridal party and guests!</a>

               </Flex>
             

               <Flex direction="column"  className={styles.NewImgBox}> 
                
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <a href="/" style={{fontWeight:"500"}}>Routine Reboot</a>

               <a href="/" className={styles.CatPara2}>Explore all beauty routines</a>

               </Flex>
               </div>
               </div>
            </MenuList>
        </Menu>
    )
}