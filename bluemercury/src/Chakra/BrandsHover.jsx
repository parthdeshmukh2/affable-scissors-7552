import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react"
import styles from "../Chakra/BrandsHover.module.css"


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
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <div className={styles.BrandMainBox}>
            <div className={styles.BrandBox}>
               
              <div className={styles.BrandFirstBox}>
                <p style={{fontWeight:"500"}}>SHOPS ALL BRANDS</p>
              </div>

              <div className={styles.BrandSecBox}>
                <p style={{fontWeight:"500"}}>BEST SELLERS</p>
                <p className={styles.BrandSecPara}>Augustinus Bader</p>
                <p className={styles.BrandSecPara}>Chantecaille</p>
                <p className={styles.BrandSecPara}>diptyque</p>
                <p className={styles.BrandSecPara}>Dr. Barbara Sturm</p>
                <p className={styles.BrandSecPara}>Dyson</p>
                <p className={styles.BrandSecPara}>La Mer</p>
                <p className={styles.BrandSecPara}>Lune + Aster</p>
                <p className={styles.BrandSecPara}>M-61</p>
                <p className={styles.BrandSecPara}>NARS</p>
                <p className={styles.BrandSecPara}>Olaplex</p>
                <p className={styles.BrandSecPara}>Oribe</p>
                <p className={styles.BrandSecPara}>SkinCeuticals</p>
                <p className={styles.BrandSecPara}>Supergoop!</p>
                <p className={styles.BrandSecPara}>TOM FORD</p>
                <p className={styles.BrandSecPara}>Trish McEvoy</p>
                <p className={styles.BrandSecPara}>VIRTUE</p>
              </div>

              <div className={styles.BrandSecBox}>
              <p style={{fontWeight:"500"}}>#NEWATBLUE</p>
                <p className={styles.BrandSecPara}>BalmLabs</p>
                <p className={styles.BrandSecPara}>Boucleme</p>
                <p className={styles.BrandSecPara}>EltaMD</p>
                <p className={styles.BrandSecPara}>Holy Curls</p>
                <p className={styles.BrandSecPara}>L'AVANT</p>
                <p className={styles.BrandSecPara}>Lake & Skye</p>
                <p className={styles.BrandSecPara}>PCA Skin</p>
                <p className={styles.BrandSecPara}>Sana Jardin</p>
                <p className={styles.BrandSecPara}>Sisley-Paris</p>
                <p className={styles.BrandSecPara}>Solawave</p>
                <p className={styles.BrandSecPara}>Sunday || Sunday</p>
                <p className={styles.BrandSecPara}>The Maker</p>
                <p className={styles.BrandSecPara}>vVARDIS</p>
                <p className={styles.BrandSecPara}>ZitSticka</p>
              </div>

              <div style={{textAlign:"left"}}>
                <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/elta_md_nav_303x303.jpg?v=1656446190" alt="" />
                <p style={{fontWeight:"500"}}>New to Bluemercury: EltaMD</p>
                <p style={{fontSize:"14px", color:"gray"}}>Snop the cult-favorite sunscreen brand!</p>
              </div>


               </div>
               </div>
            </MenuList>
        </Menu>
    )
}