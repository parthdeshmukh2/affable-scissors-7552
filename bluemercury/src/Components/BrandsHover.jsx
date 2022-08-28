import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Flex,
} from "@chakra-ui/react"
import styles from "../Styles/BrandsHover.module.css"


export default function BrandsHover() {
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
                BRANDS
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mt="-5px">
                <div className={styles.BrandMainBox}>
            <div className={styles.BrandBox}>
               
              <div className={styles.BrandFirstBox}>
                <a href="/" style={{fontWeight:"500"}}>SHOPS ALL BRANDS</a>
              </div>

              <Flex direction="column"  className={styles.BrandSecBox}>
                <a href="/" style={{fontWeight:"500"}}>BEST SELLERS</a>
                <a href="/" className={styles.BrandSecPara}>Augustinus Bader</a>
                <a href="/" className={styles.BrandSecPara}>Chantecaille</a>
                <a href="/" className={styles.BrandSecPara}>diptyque</a>
                <a href="/" className={styles.BrandSecPara}>Dr. Barbara Sturm</a>
                <a href="/" className={styles.BrandSecPara}>Dyson</a>
                <a href="/" className={styles.BrandSecPara}>La Mer</a>
                <a href="/" className={styles.BrandSecPara}>Lune + Aster</a>
                <a href="/" className={styles.BrandSecPara}>M-61</a>
                <a href="/" className={styles.BrandSecPara}>NARS</a>
                <a href="/" className={styles.BrandSecPara}>Olaplex</a>
                <a href="/" className={styles.BrandSecPara}>Oribe</a>
                <a href="/"className={styles.BrandSecPara}>SkinCeuticals</a>
                <a href="/" className={styles.BrandSecPara}>Supergoop!</a>
                <a href="/" className={styles.BrandSecPara}>TOM FORD</a>
                <a href="/" className={styles.BrandSecPara}>Trish McEvoy</a>
                <a href="/" className={styles.BrandSecPara}>VIRTUE</a>
              </Flex>

              <Flex direction="column"  className={styles.BrandSecBox}>
              <a href="/" style={{fontWeight:"500"}}>#NEWATBLUE</a>
                <a href="/" className={styles.BrandSecPara}>BalmLabs</a>
                <a href="/" className={styles.BrandSecPara}>Boucleme</a>
                <a href="/" className={styles.BrandSecPara}>EltaMD</a>
                <a href="/" className={styles.BrandSecPara}>Holy Curls</a>
                <a href="/" className={styles.BrandSecPara}>L'AVANT</a>
                <a href="/" className={styles.BrandSecPara}>Lake & Skye</a>
                <a href="/" className={styles.BrandSecPara}>PCA Skin</a>
                <a href="/" className={styles.BrandSecPara}>Sana Jardin</a>
                <a href="/" className={styles.BrandSecPara}>Sisley-Paris</a>
                <a href="/" className={styles.BrandSecPara}>Solawave</a>
                <a href="/" className={styles.BrandSecPara}>Sunday || Sunday</a>
                <a href="/" className={styles.BrandSecPara}>The Maker</a>
                <a href="/" className={styles.BrandSecPara}>vVARDIS</a>
                <a href="/" className={styles.BrandSecPara}>ZitSticka</a>
              </Flex>

              <Flex direction="column"  style={{textAlign:"left"}}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_md_nav_303x303.jpg?v=1656446190" alt="" />
                <p style={{fontWeight:"500"}}>New to Bluemercury: EltaMD</p>
                <p style={{fontSize:"14px", color:"gray"}}>Snop the cult-favorite sunscreen brand!</p>
              </Flex>


               </div>
               </div>
            </MenuList>
        </Menu>
    )
}