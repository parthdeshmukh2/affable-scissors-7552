
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Flex,
} from "@chakra-ui/react"
import styles from "../Styles/BlueRewards.module.css"


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
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="-5px">
                <div className={styles.RewardsMainBox}>
           
           <div className={styles.RewardBox}>

           <Flex direction="column"  className={styles.RewardFirBox}>
            <a href="/" style={{fontWeight:"500"}}>MY ACCOUNT</a>
            <a href="/" className={styles.RewardPara}>Account Overview</a>
            <a href="/" className={styles.RewardPara}>My Purchases</a>
            <a href="/" className={styles.RewardPara}>My BlueRewards</a>
            <a href="/" className={styles.RewardPara}>My Wishlist</a>
            <a href="/" className={styles.RewardPara}>Details + Prefrences</a>
           </Flex>

           <Flex direction="column"  className={styles.RewardSecBox}>
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372" alt="" />
            <a href="/" style={{fontWeight:"500"}}>Earn $10 for every $250</a>
            <a href="/"  className={styles.RewardPara}>Free to Join! Learn More</a>
           </Flex>
            
           </div>

               </div>
            </MenuList>
        </Menu>
    )
}