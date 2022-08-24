import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"

import styles from "../Chakra/Explore.module.css"


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
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <div className={styles.NewMainBox}>
            <div className={styles.NewBox}>
               
               <div className={styles.NewCatBox}>
                
                <p style={{fontWeight:"500"}}>BY CATEGORY</p>
                <p className={styles.CatPara}>Beauty Alfresco</p>
                <p className={styles.CatPara}>Wedding Essentials</p>
                <p className={styles.CatPara}>#ShowUsYourBag</p>
                <p className={styles.CatPara}>The Founders Series</p>
                <p className={styles.CatPara}>Blue Notes</p>
                <p className={styles.CatPara}>Buying Guides</p>
                <p className={styles.CatPara}>Conscious Beauty</p>
                <p className={styles.CatPara}>MORE</p>
               </div>

               <div className={styles.NewImgBox}> 
               
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Wedding_Season_1x1_Blue_Mercury_2208_Alford_7031_303x303.jpg?v=1660140149" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p style={{fontWeight:"500"}}>Wedding Season Essentials</p>

               <p className={styles.CatPara2}>Must have products for the bridal party and guests!</p>

               </div>
             

               <div className={styles.NewImgBox}> 
                
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p style={{fontWeight:"500"}}>Routine Reboot</p>

               <p className={styles.CatPara2}>Explore all beauty routines</p>

               </div>
               </div>
               </div>
            </MenuList>
        </Menu>
    )
}