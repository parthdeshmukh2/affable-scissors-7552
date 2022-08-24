
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import styles from "../Chakra/BlueRewards.module.css"


export default function BlueRewards() {
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
                BLUEREWARDS
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} >
                <div className={styles.RewardsMainBox}>
           
           <div className={styles.RewardBox}>

           <div className={styles.RewardFirBox}>
            <p style={{fontWeight:"500"}}>MY ACCOUNT</p>
            <p className={styles.RewardPara}>Account Overview</p>
            <p className={styles.RewardPara}>My Purchases</p>
            <p className={styles.RewardPara}>My BlueRewards</p>
            <p className={styles.RewardPara}>My Wishlist</p>
            <p className={styles.RewardPara}>Details + Prefrences</p>
           </div>

           <div className={styles.RewardSecBox}>
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372" alt="" />
            <p style={{fontWeight:"500"}}>Earn $10 for every $250</p>
            <p className={styles.RewardPara}>Free to Join! Learn More</p>
           </div>
            
           </div>

               </div>
            </MenuList>
        </Menu>
    )
}