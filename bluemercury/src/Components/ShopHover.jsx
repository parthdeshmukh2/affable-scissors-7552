import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Flex,
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
               
              <Flex className={styles.BrandFirstBox} direction="column">
                <a href="/" style={{fontWeight:"500"}}>SKIN CARE</a>
                <a href="/" className={styles.BrandSecPara}>MAKEUP</a>
                <a href="/" className={styles.BrandSecPara}>HAIR</a>
                <a href="/" className={styles.BrandSecPara}>BATH & BODY</a>
                <a href="/" className={styles.BrandSecPara}>FRAGRANCE</a>
                <a href="/" className={styles.BrandSecPara}>TOOLS & ACCESSORIES</a>
                <a href="/" className={styles.BrandSecPara}>HOME & LIFESTYLE</a>
                <a href="/" className={styles.BrandSecPara}>SUN CARE</a>
                <a href="/" className={styles.BrandSecPara}>MEN</a>
                <a href="/" className={styles.BrandSecPara}>GIFTS</a>
                <a href="/" className={styles.BrandSecPara}>BEST SELLERS</a>
                <a href="/" className={styles.BrandSecPara}>WELLNESS</a>
                <a href="/" className={styles.BrandSecPara}>FREE GIFTS!</a>
              </Flex>

<Flex width={"500px"} justifyContent="space-between" p="0px 20px">

              <Flex direction="column" className={styles.BrandSecBox}>
                <a href="/" style={{fontWeight:"500"}}>BY CATEGORY</a>
                <a href="/" className={styles.BrandSecPara}>Shop All</a>
                <a href="/" className={styles.BrandSecPara}>Cleansers</a>
                <a href="/" className={styles.BrandSecPara}>Exfoliators & Peels</a>
                <a href="/" className={styles.BrandSecPara}>Eye Care</a>
                <a href="/" className={styles.BrandSecPara}>Lip Care</a>
                <a href="/" className={styles.BrandSecPara}>Masks</a>
                <a href="/" className={styles.BrandSecPara}>Moisturizers</a>
                <a href="/" className={styles.BrandSecPara}>Sun Care</a>
                <a href="/" className={styles.BrandSecPara}>Tools & Devices</a>
                <a href="/" className={styles.BrandSecPara}>Treatment & Serums</a>
                <a href="/" className={styles.BrandSecPara}>Vitamins & Supplements</a>
                <a href="/" className={styles.BrandSecPara}>Value & Gift Sets</a>
              </Flex>

              <Flex direction="column"  className={styles.BrandSecBox}>
              <a href="/" style={{fontWeight:"500"}}>BY BRAND</a>
                <a href="/" className={styles.BrandSecPara}>111Skin</a>
                <a href="/" className={styles.BrandSecPara}>Augustinus Bader</a>
                <a href="/" className={styles.BrandSecPara}>BalmLabs</a>
                <a href="/" className={styles.BrandSecPara}>Dr. Barbara Sturm</a>
                <a href="/" className={styles.BrandSecPara}>EltaMD</a>
                <a href="/" className={styles.BrandSecPara}>IS Clinical</a>
                <a href="/" className={styles.BrandSecPara}>Kiehl's</a>
                <a href="/" className={styles.BrandSecPara}>La Mer</a>
                <a href="/" className={styles.BrandSecPara}>M-61</a>
                <a href="/" className={styles.BrandSecPara}>OSEA</a>
                <a href="/" className={styles.BrandSecPara}>Révive</a>
                <a href="/" className={styles.BrandSecPara}>SkinCeuticals</a>
                <a href="/" className={styles.BrandSecPara}>Tata Harper</a>
                <a href="/" className={styles.BrandSecPara}>ZitSticka</a>
              </Flex>
              </Flex>

              <div style={{textAlign:"left"}}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/powerglow_peel_trial_1_303x303.jpg?v=1659552611" alt="" />
                <a href="/" style={{fontWeight:"500"}}>Best Seller: M-61 PowerGlow® Peel</a>
                <a href="/" style={{fontSize:"14px", color:"gray"}}>Receive a free packette with all purchases while supplies last!</a>
              </div>


               </div>
               </div>
            </MenuList>
        </Menu>
    )
}