
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import styles from "../Styles/EventsHover.module.css"


export default function EventHover() {
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
                EVENTS
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="-5px">
                <div className={styles.EventMainBox}>
            <div className={styles.NewBox}>
               

               <div className={styles.NewImgBox}> 
               
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury_303x303_8b06250d-4cc8-431d-8217-688769352c79_303x303.webp?v=1659551087" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p>Bluemercury Presents: #Masterclass</p>

               <p className={styles.CatPara2}>Join us for live virtual shopping events</p>

               </div>
             

               <div className={styles.NewImgBox}> 
                
               <div className={styles.NewImgBoxSize}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_303x303.jpg?v=1657733426" alt="" style={{height:"100%" ,width:"100%"}}/>
               </div>
               
               <p>Complimentary Consulations!</p>

               <p className={styles.CatPara2}>Book your one-on-one appointment at your local store</p>

               </div>
               </div>
               </div>
            </MenuList>
        </Menu>
    )
}