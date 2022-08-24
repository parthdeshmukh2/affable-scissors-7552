import React from 'react'
import styles from "../Navbar/Navbar.module.css"
import { GoLocation } from "react-icons/go";
import { BsHandbag, BsSearch, BsSuitHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import NewHover from '../Chakra/NewHover';
import EventHover from '../Chakra/EventsHover';
import BrandsHover from '../Chakra/BrandsHover';
import BlueRewards from '../Chakra/BlueRewards';
import ExploreHover from '../Chakra/ExploreHover';
import RoutineHover from '../Chakra/RoutineHover';
import ShopHover from '../Chakra/ShopHover';

const Navbar = () => {
  return (
    <div>
        <div className={styles.NavbarBox}>

         <div className={styles.NavUpperBox}>
        
        <div className={styles.NavUpprLeftBox}>
         
         <label><GoLocation size={22} color="rgb(33, 31, 31)"/></label>
         <label className={styles.SpaChn}>STORE & SPA LOCATOR</label>
        </div>

        
        <div className={styles.NavUpprRigtBox}>
        
        <div className={styles.NavUpRigFirst}>
        <div>
            <label><BsSuitHeart size={22} color="black"/></label>
        </div>
        <div>
            <label className={styles.WishStyle}>WISHLIST</label>
        </div>
        </div>

        <div className={styles.NavUpRigFirst}>
        <div>
            <label><BsSearch size={22} color="black"/></label>
        </div>
        <div>
            <label className={styles.WishStyle}>SEARCH</label>
        </div>
        </div>

        <div className={styles.NavUpRigFirst}>
        <div>
            <label><CgProfile size={22} color="black"/></label>
        </div>
        <div>
            <label className={styles.WishStyle}>SIGN IN/Up</label>
        </div>
        </div>

        <div className={styles.NavUpRigFirst}>
        <div>
            <label><BsHandbag size={22} color="black"/></label>
        </div>
        <div>
            <label className={styles.WishStyle}>BAG</label>
        </div>
        </div>


        </div>
 
         </div>
        
        
        <div className={styles.blueLogoImg}>
            <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt="" style={{width:"100%" , height:"100%"}}/>
        </div>

       
       <div className={styles.NavbarHoverBox}>
        
       <div>
        <ShopHover/>
       </div>
       <div>
        <NewHover/>
       </div>
       <div>
        <BrandsHover/>
       </div>
       <div>
        <ExploreHover/>
       </div>
       <div>
        <EventHover/>
       </div>
       <div>
        <BlueRewards/>
       </div>
       <div>
        <RoutineHover/>
       </div>

       </div>



        </div>
    </div>
  )
}

export default Navbar