import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"

import styles from "../Chakra/RoutineHover.module.css"


export default function RoutineHover() {
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
                ROUTINE REBOOT
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <div className={styles.NewMainBox}>
            <div className={styles.NewBox}>

               <div className={styles.NewImgBox}> 
               
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p style={{fontWeight:"500"}}>Shop All Routines</p>

               </div>
             

               <div className={styles.NewImgBox}> 
                
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/extend_your_summer_glow_2_303x303.jpg?v=1659102162" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p style={{fontWeight:"500"}}>The "Extend Your Summer Glow" Routine</p>

               <p className={styles.CatPara2}>Ward off dukkness ans boost your glow from head to toe</p>

               </div>

               <div className={styles.NewCatBox}>
                
                <p style={{fontWeight:"500"}}>BY ROUTINE</p>
                <p className={styles.CatPara}>Shop All</p>
                <p className={styles.CatPara}>Back to School</p>
                <p className={styles.CatPara}>Extend Your Summer Glow</p>
                <p className={styles.CatPara}>Get Rid of Summer Sun Damage</p>
                <p className={styles.CatPara}>Hydration Head-to-Toe</p>
                <p className={styles.CatPara}>#IWokeUpLikeThis</p>
                <p className={styles.CatPara}>Out the Door in Five</p>
               </div>
               </div>
               </div>
            </MenuList>
        </Menu>
    )
}