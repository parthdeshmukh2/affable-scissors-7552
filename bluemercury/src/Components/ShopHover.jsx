import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"

import styles from "../Styles/Shop.module.css"


export default function ShopHover() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                fontSize="15"
                variant="ghost"
                color="black"
                mx={1}
                py={[1, 2, 2]}
                px={2}
                _hover={{ color:"black" , borderBottom: "2px solid black",paddingBottom: "3px" , fontWeight:"500"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                SHOP
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="-5px">
                <div className={styles.BrandMainBox}>
            <div className={styles.BrandBox}>
               
              <div className={styles.BrandFirstBox}>
                <p style={{fontWeight:"500"}}>SKIN CARE</p>
                <p className={styles.BrandSecPara}>MAKEUP</p>
                <p className={styles.BrandSecPara}>HAIR</p>
                <p className={styles.BrandSecPara}>BATH & BODY</p>
                <p className={styles.BrandSecPara}>FRAGRANCE</p>
                <p className={styles.BrandSecPara}>TOOLS & ACCESSORIES</p>
                <p className={styles.BrandSecPara}>HOME & LIFESTYLE</p>
                <p className={styles.BrandSecPara}>SUN CARE</p>
                <p className={styles.BrandSecPara}>MEN</p>
                <p className={styles.BrandSecPara}>GIFTS</p>
                <p className={styles.BrandSecPara}>BEST SELLERS</p>
                <p className={styles.BrandSecPara}>WELLNESS</p>
                <p className={styles.BrandSecPara}>FREE GIFTS!</p>
              </div>

              <div className={styles.BrandSecBox}>
                <p style={{fontWeight:"500"}}>By CATEGORY</p>
                <p className={styles.BrandSecPara}>Shop All</p>
                <p className={styles.BrandSecPara}>Cleansers</p>
                <p className={styles.BrandSecPara}>Exfoliators & Peels</p>
                <p className={styles.BrandSecPara}>Eye Care</p>
                <p className={styles.BrandSecPara}>Lip Care</p>
                <p className={styles.BrandSecPara}>Masks</p>
                <p className={styles.BrandSecPara}>Moisturizers</p>
                <p className={styles.BrandSecPara}>Sun Care</p>
                <p className={styles.BrandSecPara}>Tools & Devices</p>
                <p className={styles.BrandSecPara}>Treatment & Serums</p>
                <p className={styles.BrandSecPara}>Vitamins & Supplements</p>
                <p className={styles.BrandSecPara}>Value & Gift Sets</p>
              </div>

              <div className={styles.BrandSecBox}>
              <p style={{fontWeight:"500"}}>BY BRAND</p>
                <p className={styles.BrandSecPara}>111Skin</p>
                <p className={styles.BrandSecPara}>Augustinus Bader</p>
                <p className={styles.BrandSecPara}>BalmLabs</p>
                <p className={styles.BrandSecPara}>Dr. Barbara Sturm</p>
                <p className={styles.BrandSecPara}>EltaMD</p>
                <p className={styles.BrandSecPara}>IS Clinical</p>
                <p className={styles.BrandSecPara}>Kiehl's</p>
                <p className={styles.BrandSecPara}>La Mer</p>
                <p className={styles.BrandSecPara}>M-61</p>
                <p className={styles.BrandSecPara}>OSEA</p>
                <p className={styles.BrandSecPara}>Révive</p>
                <p className={styles.BrandSecPara}>SkinCeuticals</p>
                <p className={styles.BrandSecPara}>Tata Harper</p>
                <p className={styles.BrandSecPara}>ZitSticka</p>
              </div>

              <div style={{textAlign:"left"}}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/powerglow_peel_trial_1_303x303.jpg?v=1659552611" alt="" />
                <p style={{fontWeight:"500"}}>Best Seller: M-61 PowerGlow® Peel</p>
                <p style={{fontSize:"14px", color:"gray"}}>Receive a free packette with all purchases while supplies last!</p>
              </div>


               </div>
               </div>
            </MenuList>
        </Menu>
    )
}